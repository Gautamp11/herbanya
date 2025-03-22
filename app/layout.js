import "./globals.css";
import { Inter } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  // weight: ["400", "700"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Herbanya - Products for a Healthy Life",
  description:
    "Buy 100% natural and organic herbal products from Herbanya. Discover premium herbs for wellness, skincare, and health.",
  keywords:
    "Herbal products, Organic herbs, Ayurveda, Natural skincare, Herbal remedies",
  openGraph: {
    title: "Herbanya - Herbal Products",
    description: "Buy 100% natural and organic herbal products from Herbanya.",
    url: "https://herbanya.in",
    site_name: "Herbanya",
    type: "website",
    images: [
      {
        url: "https://herbanya.in/og-image.jpg", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "Herbanya Herbal Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbanya - Herbal Products",
    description: "Buy 100% natural and organic herbal products from Herbanya.",
    images: ["https://herbanya.in/og-image.jpg"], // Replace with an actual image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} bg-white`}>{children}</body> */}
      {/* <body className={`${ebGaramond.className} bg-white`}>{children}</body> */}
      <body className={`${josefin.className} bg-white`}>{children}</body>
    </html>
  );
}
