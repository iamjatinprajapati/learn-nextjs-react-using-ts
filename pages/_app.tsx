import type {AppProps} from "next/app";
import {NextPage} from "next";
import {ReactElement, ReactNode} from "react";
import NextNProgress from "nextjs-progressbar";
import "../styles/tailwind.css";
import Head from "next/head";
import {Andada_Pro, Fira_Code} from "@next/font/google";
import Script from "next/script";

const andadaPro = Andada_Pro({subsets: ["latin"], weight: ["400", "500"]});
export const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(
        <>
            <Head>
                <meta name="description"
                      content="A demo application showcasing the basics of TypeScript, React and Next.js!"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                {/*<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>*/}
            </Head>
            <NextNProgress/>
            <main>
                <Component {...pageProps} />
            </main>
            <style jsx global>{`
              html {
                font-family: ${firaCode.style.fontFamily};
              }
            `}</style>
        </>
    );
}
