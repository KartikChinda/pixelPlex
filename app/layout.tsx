import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import '@stream-io/video-react-sdk/dist/css/styles.css'
import 'react-datepicker/dist/react-datepicker.css'


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
      {/* need to wrap everything inside the clerk provider for it to work, also clerkProvider has this appearance attribute which can be used to add css to your clerk components */}
      <ClerkProvider
        appearance={{
          elements: {

            button:
              " text-palette-4",
          },

          layout: {
            // shows only google instead of login with google. 
            socialButtonsVariant: 'iconButton',

          },
          variables: {
            colorText: '#D4D7ED',
            colorBackground: '#150F28',
            colorPrimary: '#FF829E',
            colorInputBackground: '#050520',
            colorInputText: '#D4D7ED',
          }
        }}
      >
        <body className=" bg-palette-1 text-palette-4">
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>


  );
}
