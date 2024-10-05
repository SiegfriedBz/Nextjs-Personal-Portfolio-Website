import { buildUrl } from "cloudinary-build-url";

const getCldImages = (img: string) => {
  const imgUrlSplit = img.split("upload/");
  const imgCldId = imgUrlSplit[1].split(".png")[0];

  const url = buildUrl(imgCldId, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLD_NAME || "",
    },
  });

  const blurredUrl = buildUrl(imgCldId, {
    cloud: {
      cloudName: process.env.NEXT_PUBLIC_CLD_NAME || "",
    },
    transformations: {
      effect: {
        name: "blur:1000",
      },
      quality: 1,
    },
  });
  return { url, blurredUrl };
};

export default getCldImages;
