import { web3 } from "@project-serum/anchor";
import { useWorkspace } from "@/composables/useWorkspace";
import { Diary } from "@/models";
import { v4 as uuidv4 } from "uuid";
import { pinFileToIPFS } from "@/composables/usePinata";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
import { asyncTransactionHandler } from "@/composables/asyncTransactionHandler";

export const sendDiary = asyncTransactionHandler(
  async (content, title, image) => {
    const { wallet, program } = useWorkspace();

    // TODO: GET TIME ZONE
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight to get the start of the day
    const unixTimestamp = Math.floor(today.getTime() / 1000); // Convert to Unix timestamp in seconds

    let imageUrl = `${process.env.VUE_APP_DEFAULT_DIARY_IMAGE_URL}`;

    if (image) {
      const uploadResult = await pinFileToIPFS(image);
      if (uploadResult.success) {
        imageUrl = `https://gateway.pinata.cloud/ipfs/${uploadResult.data.IpfsHash}`;
      } else {
        console.error(uploadResult.error);
      }
      console.log(imageUrl);
    }
    const [profilePda] = await findProgramAddressSync(
      [utf8.encode("USER_STATE"), wallet.value.publicKey.toBuffer()],
      program.value.programId
    );
    const textEncoder = new TextEncoder();
    console.log(textEncoder.encode(unixTimestamp.toString()));
    const [diaryPda] = await findProgramAddressSync(
      [
        utf8.encode("DIARY_STATE"),
        wallet.value.publicKey.toBuffer(),
        textEncoder.encode(unixTimestamp.toString()),
      ],
      program.value.programId
    );

    // Send a "AddDiary" instruction with the right data and the right accounts
    await program.value.methods
      .addDiary(
        unixTimestamp.toString(),
        content,
        title,
        imageUrl.toString(),
        uuidv4()
      )
      .accounts({
        userProfile: profilePda,
        diaryAccount: diaryPda,
        authority: wallet.value.publicKey,
        systemProgram: web3.SystemProgram.programId,
      })
      .rpc();

    // Fetch the newly created account from the blockchain.
    const diaryAccount = await program.value.account.diaryAccount.fetch(
      diaryPda
    );
    console.log(diaryAccount);
    // Wrap the fetched account in a Diary model so our frontend can display it
    return { data: new Diary(diaryPda, diaryAccount) };
  }
);
