export const SITE = {
  website: "https://a-ddr.me/",
  author: "Alejandro-Daniel Díaz Román",
  profile: "https://a-ddr.me",
  desc: "My personal blog :)",
  title: "alex",
  //ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/al3xfreeman/a-ddr/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Madrid",
} as const;
