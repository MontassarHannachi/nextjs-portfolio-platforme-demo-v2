import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Montassar Hannachi | Portfolio",
  description: "Junior Cloud and DevOps Engineer interested in Linux, Cloud Infrastructure, Automation and Platform Engineering."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
