"use client";

import Script from "next/script";
import Header from "@/components/Header";
import HeaderBlack from "@/components/HeaderBlack";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import OfferButton from "@/components/OfferButton";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const useBlackHeader =
    pathname === "/about-us" ||
    pathname === "/contact-us" ||
    pathname === "/admin" ||
    pathname === "/admin/login" ||
    pathname === "/admin/blocks" ||
    pathname === "/admin/apartments" ||
    pathname === "/admin/payments";
  
  return (
    <html lang="bg">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          ДомоМениджър - Професионален домоуправител в Пловдив, България
        </title>
        <meta
          name="description"
          content="ДомоМениджър - професионален домоуправител и услуги за етажна собственост в Пловдив, България. Касиер, поддръжка, юридическа помощ и онлайн плащания."
        />
        <meta
          name="keywords"
          content="хазяин, хазяни, домоуправител, домоуправители, професионален домоуправител, етажна собственост, управление на вход, вход, поддръжка на вход, касиер, Пловдив, България, DomoManager, property management Plovdiv"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="ДомоМениджър" />
        <meta name="geo.region" content="BG" />
        <meta name="geo.placename" content="Plovdiv" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ДомоМениджър - Професионален домоуправител в Пловдив"
        />
        <meta
          property="og:description"
          content="Управление на етажна собственост, прозрачни плащания и надеждна поддръжка в Пловдив."
        />
        <meta property="og:site_name" content="ДомоМениджър" />
        <meta property="og:locale" content="bg_BG" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ДомоМениджър - Професионален домоуправител в Пловдив"
        />
        <meta
          name="twitter:description"
          content="Услуги за етажна собственост в Пловдив: домоуправител, касиер, поддръжка и онлайн плащания."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ДомоМениджър",
              description:
                "Професионален домоуправител и услуги за етажна собственост в Пловдив, България.",
              areaServed: ["Пловдив", "България"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Пловдив",
                addressCountry: "BG",
              },
              telephone: "+359885668825",
              email: "HAZJAITE@GMAIL.COM",
              url: "https://domomenidzhur.com",
              keywords:
                "хазяин, хазяни, домоуправител, домоуправители, етажна собственост, Пловдив, България",
            }),
          }}
        />

        {/* Fonts & Icons */}
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        {/* Local CSS */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/styles.css" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Slick Slider */}
        <link rel="stylesheet" href="/css/slick.min.css" />
        <link rel="stylesheet" href="/css/slick-theme.min.css" />
      </head>

      <body>
        {useBlackHeader ? <HeaderBlack /> : <Header />}
        {children}
        <Footer />
        <ScrollToTop />
        <OfferButton />

        <Script src="/js/jquery-3.7.1.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
