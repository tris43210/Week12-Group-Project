import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import { Limelight } from "next/font/google";

const limelight = Limelight({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Folio App",
  description:
    "A great platform to show off your art WORLD WIDE!. Share your art and show support for others here!",
  openGraph: {
    title: "Folio App",
    description:
      "A great platform to show off your art WORLD WIDE!. Share your art and show support for others here!",
    type: "website",
    url: "PLACEHOLDER URL....",
    images: ["https://pngimg.com/uploads/letter_f/letter_f_PNG55.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
