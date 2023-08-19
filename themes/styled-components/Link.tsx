import React, { type FC } from "react";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material";

type GenericLinkProps = NextLinkProps & MuiLinkProps;

const Link: FC<GenericLinkProps> = ({
	href,
	as,
	replace,
	scroll,
	shallow,
	prefetch,
	locale,
	...muiLinkProps
}) => {
	return (
		<MuiLink
			component={NextLink}
			href={href}
			as={as}
			replace={replace}
			scroll={scroll}
			shallow={shallow}
			prefetch={prefetch}
			locale={locale}
			passHref
			{...muiLinkProps}
		/>
	);
};

export default Link;
