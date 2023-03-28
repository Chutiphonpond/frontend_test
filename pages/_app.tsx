import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Be_Vietnam_Pro } from "@next/font/google";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={beVietnam.className}>
      <Component {...pageProps} />
    </main>
  );
}
