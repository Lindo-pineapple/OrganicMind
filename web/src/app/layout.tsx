import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "../styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoApp",
  description: "Fullstack React Productivity App.",
  creator: "Lindokuhle Percieval Dlomo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{fontFamily:  "Lexend"}} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
