import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QuizProvider } from "@/Context/Store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AssessMate",
  description: "An AI Quiz Application with Effective Feeback System.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <QuizProvider>{children}</QuizProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
