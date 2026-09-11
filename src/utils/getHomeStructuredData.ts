import { SITE } from "@/config";
import { toSiteURL } from "@/utils/toSiteURL";
import { profile, type Locale } from "@/data/home";
import { homePath } from "@/utils/homePath";

export function getHomeStructuredData(
  profileImage: string,
  locale: Locale = "ja"
) {
  const siteURL = new URL(SITE.website);
  const pageURL = toSiteURL(homePath(locale));
  const profileImageURL = toSiteURL(profileImage);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": new URL("#website", siteURL).href,
        name: SITE.title,
        url: siteURL.href,
        description: profile.description[locale],
        inLanguage: locale,
      },
      {
        "@type": "Person",
        "@id": new URL("#person", siteURL).href,
        name: profile.name[locale],
        alternateName: [SITE.nameEn, SITE.author],
        url: SITE.profile,
        image: profileImageURL.href,
        email: SITE.email,
        jobTitle: profile.position[locale],
        affiliation: {
          "@type": "CollegeOrUniversity",
          name: locale === "ja" ? "九州大学" : "Kyushu University",
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
        "@id": new URL("#profile-page", pageURL).href,
        name: profile.name[locale],
        url: pageURL.href,
        description: profile.description[locale],
        inLanguage: locale,
        image: profileImageURL.href,
        mainEntity: {
          "@id": new URL("#person", siteURL).href,
        },
      },
    ],
  };
}
