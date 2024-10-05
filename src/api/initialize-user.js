import { web3 } from "@project-serum/anchor";
import { useWorkspace } from "@/composables/useWorkspace";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";

export const initializeUser = async () => {
  const { wallet, program } = useWorkspace();
  const [profilePda] = await findProgramAddressSync(
    [utf8.encode("USER_STATE"), wallet.value.publicKey.toBuffer()],
    program.value.programId
  );
  // Send a "AddDiary" instruction with the right data and the right accounts
  await program.value.methods
    .initializeUser()
    .accounts({
      authority: wallet.value.publicKey,
      userProfile: profilePda,
      systemProgram: web3.SystemProgram.programId,
    })
    .rpc();
};
