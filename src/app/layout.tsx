import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A Hello World page with a blue button",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
