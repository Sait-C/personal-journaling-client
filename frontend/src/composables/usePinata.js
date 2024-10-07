import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: `${process.env.VUE_APP_PINATA_JWT}`,
  pinataGateway: `${process.env.VUE_APP_PINATA_GATEWAY}`,
});

export async function pinFileToIPFS(file) {
  console.log(process.env.VUE_APP_PINATA_GATEWAY);
  try {
    const fileToUpload = new File([file], file.name, { type: file.type });
    const upload = await pinata.upload.file(fileToUpload);
    console.log(upload);
    return { success: true, data: upload };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}

export async function retrieveOptimizedImageFile(ipfshash) {
  try {
    const data = await pinata.gateways.get(ipfshash).optimizeImage({
      width: 500,
      height: 500,
      format: "webp",
    });
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}
