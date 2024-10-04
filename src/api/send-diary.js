import { web3 } from "@project-serum/anchor";
import { useWorkspace } from "@/composables/useWorkspace";
import { Diary } from "@/models";
import { v4 as uuidv4 } from "uuid";

export const sendDiary = async (content, title, image) => {
  const { wallet, program } = useWorkspace();

  // Generate a new keypair for our new tweet account.
  const diary = web3.Keypair.generate();

  // TODO: GET TIME ZONE
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight to get the start of the day
  const unixTimestamp = Math.floor(today.getTime() / 1000); // Convert to Unix timestamp in seconds

  // Send a "AddDiary" instruction with the right data and the right accounts
  await program.value.rpc.addDiary(
    content,
    title,
    image,
    uuidv4(),
    unixTimestamp.toString(),
    {
      accounts: {
        authority: wallet.value.publicKey,
        diaryAccount: diary,
        systemProgram: web3.SystemProgram.programId,
      },
      signers: [diary],
    }
  );

  // Fetch the newly created account from the blockchain.
  const diaryAccount = await program.value.account.diaryAccount.fetch(
    diary.publicKey
  );

  // Wrap the fetched account in a Diary model so our frontend can display it
  return new Diary(diary.publicKey, diaryAccount);
};
