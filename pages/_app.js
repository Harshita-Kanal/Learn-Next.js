import { Montserrat } from "next/font/google";

import "../styles.scss";

const inter = Montserrat({ weight: "600", subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
