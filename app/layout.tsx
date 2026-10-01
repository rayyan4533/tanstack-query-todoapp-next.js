import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers/queryprovider";

export const metadata: Metadata = {
  title: "Todo Query Learning",
  description: "Learning manual server-state management before TanStack Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
