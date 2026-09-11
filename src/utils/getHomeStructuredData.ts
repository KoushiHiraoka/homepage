import { SITE } from "@/config";
import { toSiteURL } from "@/utils/toSiteURL";

export function getHomeStructuredData(profileImage: string) {
  const siteURL = new URL(SITE.website);
  const profileImageURL = toSiteURL(profileImage);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": new URL("#website", siteURL).href,
        name: SITE.title,
        url: siteURL.href,
        description: SITE.desc,
        inLanguage: SITE.lang,
      },
      {
        "@type": "Person",
        "@id": new URL("#person", siteURL).href,
        name: SITE.name,
        alternateName: [SITE.nameEn, SITE.author],
        url: SITE.profile,
        image: profileImageURL.href,
        email: SITE.email,
        jobTitle: "博士後期課程学生",
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "九州大学",
          url: "https://www.kyushu-u.ac.jp/",
        },
        knowsAbout: [
          "Human Activity Recognition",
          "Privacy-Aware System",
          "Subjective Privacy",
          "Ubiquitous Computing",
          "Wearable Computing",
        ],
        sameAs: SITE.sameAs,
      },
      {
        "@type": "ProfilePage",
        "@id": new URL("#profile-page", siteURL).href,
        name: SITE.title,
        url: siteURL.href,
        description: SITE.desc,
        image: profileImageURL.href,
        mainEntity: {
          "@id": new URL("#person", siteURL).href,
        },
      },
    ],
  };
}
