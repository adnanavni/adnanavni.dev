import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./global.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const lato = Lato({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adnan Avni",
  description:
    "Explore my portfolio if creative projects and designs. Discover a world of innovation and passion.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "black", color: "white" }}>
      <body className={lato.className} style={{ margin: "0" }}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
