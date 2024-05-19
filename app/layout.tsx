import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Pixel Plex",
  description: "PixelPlex is a video conferencing app, that is used for creating meetings and attending meetings. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-palette-1 text-[#EEEEEE]">{children}</body>
    </html>
  );
}
