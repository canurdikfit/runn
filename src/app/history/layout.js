
import { ThemeProvider } from "@/components/theme-provider";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import HashNav from "@/components/topsection/HashNav";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "History || Foundation",
  description:
    "Foundation is designed to usher newcomers into the dynamic world of Web3. With an emphasis on web3 education, practical experience and Campaigns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className={cn(
          "min-h-screen dark:bg-[#131721] bg-[#f5f5f5] font-sans antialiased w-screen",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <HashNav page={'history'}/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
