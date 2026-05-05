import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recally Flow",
  description:
    "Missed revenue recovery for appointment-based healthcare and beauty practices through reactivation, loyalty, slot rescue, and lower manual follow-up.",
  icons: {
    icon: [{ url: "/Favicon_Recally_Flow.png", type: "image/png" }],
    shortcut: [{ url: "/Favicon_Recally_Flow.png", type: "image/png" }],
  },
};

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
