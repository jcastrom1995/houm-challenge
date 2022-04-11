/* eslint-disable react/jsx-props-no-spreading */
import "styles/globals.css"
import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import type { AppProps } from "next/app"

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return getLayout(<Component {...pageProps} />)
}

export default MyApp
