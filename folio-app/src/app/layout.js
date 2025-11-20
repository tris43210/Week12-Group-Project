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
      <body className={`antialiased min-h-screen`}>
        <NavBar />
        <main className="pb-16 overflow-auto">{children}</main>
        <Footer className="fixed bottom-0 left-0 right-0 z-10" />
      </body>
    </html>
  );
}
