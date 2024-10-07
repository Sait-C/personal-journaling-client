// No imports needed: web3, anchor, pg and more are globally available

describe("Test", () => {
  const testTimestamp = '1728075600';
  const testContent = "Test Content";
  const testTitle = "Test Title";
  const testImage = "Test Image Url";
  const testUuid = "test_u_u_i_d1234";
  it("initializeUser", async () => {
    const [userProfilePda, bump] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from("USER_STATE"), pg.wallet.publicKey.toBytes()],
      pg.PROGRAM_ID
    );

    // Send transaction
    const txHash = await pg.program.methods
      .initializeUser()
      .accounts({
        authority: pg.wallet.publicKey.toBytes(),
        userProfile: userProfilePda,
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([pg.wallet.keypair])
      .rpc();
    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

    // Confirm transaction
    await pg.connection.confirmTransaction(txHash);

    // Fetch the created account
    const userProfile = await pg.program.account.userProfile.fetch(
      userProfilePda
    );

    console.log("On-chain data is:", userProfile.diaryCount);
  });

  it("addDiary", async () => {
    const [userProfilePda, bump] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from("USER_STATE"), pg.wallet.publicKey.toBytes()],
      pg.PROGRAM_ID
    );
    const [diaryPda, bump] = await web3.PublicKey.findProgramAddressSync(
      [Buffer.from("DIARY_STATE"), pg.wallet.publicKey.toBytes(), Buffer.from(testTimestamp)],
      pg.PROGRAM_ID
    );

    // Send transaction
    const txHash = await pg.program.methods
      .addDiary(testTimestamp.toString(), testContent, testTitle,
      testImage, testUuid)
      .accounts({
        userProfile: userProfilePda,
        diaryAccount: diaryPda,
        authority: pg.wallet.publicKey.toBytes(),
        systemProgram: web3.SystemProgram.programId,
      })
      .signers([pg.wallet.keypair])
      .rpc();
    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

    // Confirm transaction
    await pg.connection.confirmTransaction(txHash);

    // Fetch the created account
    const diary = await pg.program.account.diaryAccount.fetch(
      diaryPda
    );

    console.log("On-chain data is:", diary.title);
  });
});
