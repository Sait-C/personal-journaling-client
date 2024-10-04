import { useWorkspace } from "@/composables/useWorkspace";
import { Diary } from "@/models";

export const fetchDiaries = async (authorityKey, otherFilters = []) => {
  const { program } = useWorkspace();
  const diaries = await program.value.account.diaryAccount.all([
    authorFilter(authorityKey),
    ...otherFilters,
  ]);
  return diaries.map((diary) => new Diary(diary.publicKey, diary.account));
};

export const authorFilter = (authorBase58PublicKey) => ({
  memcmp: {
    offset: 8, // Discriminator.
    bytes: authorBase58PublicKey,
  },
});
