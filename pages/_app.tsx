import { type NextPage } from "next";
import { type AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { type ReactElement, type ReactNode } from "react";
import { type DehydratedState } from "@tanstack/query-core";
import { CacheProvider, type EmotionCache } from "@emotion/react";
import { toast } from "react-toastify";

import { UserContextWrapper } from "../contexts/user.context";
import { DialogProvider } from "../contexts/dialog.context";
import { ReactQueryProvider } from "../providers/react-query.provider";
import { clientSideEmotionCache } from "../utils/create-emotion-cache";
import { TOAST_CLOSE_TIME } from "../constants/common";
import { getToastType } from "../utils/get-toast-type";
import { ToastContainer } from "../components/ToastContainer";

import "../styles/globals.css";
import "../styles/mapbox.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import AuthLayout from "../components/Layout/Auth/AuthLayout";

export type NextPageWithLayout<T = {}, P = T> = NextPage<T, P> & {
	getLayout?: (page: ReactElement) => ReactNode;
	isPublic?: boolean;
};

export type MyAppProps = AppProps & {
	Component: NextPageWithLayout;
	emotionCache?: EmotionCache;
	pageProps: {
		dehydratedState: DehydratedState;
	};
};

function MyApp({
	Component,
	emotionCache = clientSideEmotionCache,
	pageProps,
}: MyAppProps): ReactNode {
	const getLayout =
		Component.getLayout ??
		((page) =>
			isPublic ? <Layout>{page}</Layout> : <AuthLayout>{page}</AuthLayout>);
	const { isPublic = false } = Component;

	return (
		<ReactQueryProvider dehydratedState={pageProps.dehydratedState}>
			<CacheProvider value={emotionCache}>
				<UserContextWrapper>
					{getLayout(
						<>
							<ToastContainer
								rtl={true}
								closeButton={false}
								autoClose={TOAST_CLOSE_TIME}
								position={toast.POSITION.BOTTOM_LEFT}
								hideProgressBar={true}
								icon={getToastType}
							/>
							<CssBaseline />
							<DialogProvider>
								<Component {...pageProps} />
							</DialogProvider>
						</>
					)}
				</UserContextWrapper>
			</CacheProvider>
		</ReactQueryProvider>
	);
}

export default MyApp;
