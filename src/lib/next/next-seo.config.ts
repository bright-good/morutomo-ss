import { DefaultSeoProps } from "next-seo";

/**@package */
export const defaultSeo: DefaultSeoProps = {
  additionalLinkTags: [
    {
      href: "/favicon-32x32.png",
      rel: "icon",
      sizes: "32x32",
      type: "image/png",
    },
    {
      href: "/favicon-16x16.png",
      rel: "icon",
      sizes: "16x16",
      type: "image/png",
    },
    {
      href: "/apple-touch-icon.png",
      rel: "apple-touch-icon",
      sizes: "180x180",
    },
    { href: "/site.webmanifest", rel: "manifest" },
  ],
  canonical: process.env.NEXT_PUBLIC_ROOT_URL,
  defaultTitle: "株式会社丸友製作所",
  description:
    "粉物の聖地「大阪堺」で半世紀に渡り、お好み焼きテーブル を製造販売しています。オーダーメイド にこだわり、お客様の理想を生み出してきました。またグリドル 、シンク 、キャビネット など金属加工も得意し、マルチにお客様に寄り添っていきます。",
  openGraph: {
    description:
      "粉物の聖地「大阪堺」で半世紀に渡り、お好み焼きテーブル を製造販売しています。オーダーメイド にこだわり、お客様の理想を生み出してきました。またグリドル 、シンク 、キャビネット など金属加工も得意し、マルチにお客様に寄り添っていきます。",
    images: [
      {
        url: "/logo/1200x630.png",
      },
    ],
    locale: "ja_JP",
    site_name: "株式会社丸友製作所",
    type: "website",
    url: process.env.NEXT_PUBLIC_ROOT_URL,
  },

  titleTemplate: "%s - 株式会社丸友製作所",
};
