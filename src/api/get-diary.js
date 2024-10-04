import { useWorkspace } from "@/composables";
import { Diary } from "@/models";

export const getTweet = async (publicKey) => {
  const { program } = useWorkspace();
  const account = await program.value.account.diaryAccount.fetch(publicKey);
  return new Diary(publicKey, account);
};
