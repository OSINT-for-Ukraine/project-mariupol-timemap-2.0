const socialMedia = [
  "facebook",
  "instagram",
  "tiktok",
  "twitter",
  "https://x.com",
  "youtube",
  "t.me",
];

export const getSocialMediaType = (path: string) => {
  if (path.includes("https://x.com")) {
    return "twitter";
  }
  for (const media of socialMedia) {
    if (path.includes(media)) {
      return media;
    }
  }
  return "other";
};
