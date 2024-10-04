import dayjs from "dayjs";

export class Diary {
  constructor(publicKey, accountData) {
    this.publicKey = publicKey;
    this.author = accountData.authority;
    this.timestamp = accountData.date;
    this.title = accountData.title;
    this.content = accountData.content;
    this.image = accountData.image;
    this.id = accountData.uuid;
  }

  get key() {
    return this.publicKey.toBase58();
  }

  get created_at() {
    return dayjs.unix(this.timestamp).format("lll");
  }
}
