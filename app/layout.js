import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HandOff Application",
  description: "Make hand-offs easier",
  keywords: "doctors,",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar></NavBar>
      {children}</body>
    </html>
  );
}
