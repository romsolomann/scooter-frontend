import React, { type PropsWithChildren } from "react";
import {
	QueryClientProvider,
	QueryClient,
	Hydrate,
} from "@tanstack/react-query";

const queryClientConfig = {
	defaultOptions: {
		queries: {
			retry: 1,
			retryDelay: 500,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
		},
	},
};

interface IProps {
	dehydratedState: any;
}

export const ReactQueryProvider = ({
	dehydratedState,
	children,
}: PropsWithChildren<IProps>) => {
	const [queryClient] = React.useState(
		() => new QueryClient(queryClientConfig)
	);

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={dehydratedState}>{children}</Hydrate>
		</QueryClientProvider>
	);
};
