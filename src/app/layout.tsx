import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/sunitajesh/shared/smooth-scroll-provider";
import { ThemeProvider } from "@/components/sunitajesh/shared/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunitajesh | Transforming Ideas into Powerful Digital Solutions",
  description:
    "We combine strategy, design, and technology to build innovative solutions that drive growth and lasting impact.",
  icons: { icon: "/sunitajesh/icon.svg" },
};

// Runs before first paint so a stored light theme never flashes dark first.
const NO_FLASH = `(function(){try{var t=localStorage.getItem('sj-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // NO_FLASH rewrites data-theme before React hydrates, so the server value
    // ("dark") and the client value can legitimately differ on this one element.
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH }} />
      </head>
      <body className="font-haffer antialiased bg-darkgrey text-white">
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
