import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Insta from "./components/icon/Insta";
import Image from "next/image";
import Link from "next/link";


const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] });
export const metadata: Metadata = {
  title: "Share The Light",
  description: "Genco Genius | Row Desk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          <Link href={"/"} >
            <div className="flex flex-col items-center justify-between border-b border-gray-200 mb-20">
              <div className="relative flex place-items-center m-10 mt-5  ">
                <Image

                  src="/logo.svg"
                  alt="Next.js Logo"
                  width={180}
                  height={37}
                  priority
                />
              </div>
            </div>
          </Link>

          {children}

        </main>
        <footer className="border-t p-8 text-center text-gray-500 mt-16">
          <div className="flex gap-2 items-center justify-center text-sm">
            &copy; 2024 All rights reserved |<a href="https://www.instagram.com/row_desk" target="_blank"><Insta /></a><a href="https://www.instagram.com/row_desk" target="_blank">row_desk</a>
          </div>
          {/* <div className="flex gap-2 items-center justify-center">
          &copy; 2024 All rights reserved | <a href="#" target="_blank">Genco Genius</a> & <a href="https://www.instagram.com/row_desk" target="_blank"><Insta /></a><a href="https://www.instagram.com/row_desk" target="_blank">row_desk</a>
        </div> */}
        </footer>
      </body>
    </html >
  );
}
