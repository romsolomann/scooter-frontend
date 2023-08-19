import * as React from "react";
import { SIDEBAR_LINKS } from "../../../../constants/sidebarLinks";
import { SidebarLinkItem } from "./SidebarLinkItem";
import { Box } from "@mui/material";

export const Sidebar = () => {
	return (
		<Box
			sx={{
				px: 2,
				mt: 0,
				py: 0,
				position: "relative",
			}}
		>
			{SIDEBAR_LINKS.map((item, key) => {
				return <SidebarLinkItem key={key} item={item} />;
			})}
		</Box>
	);
};
