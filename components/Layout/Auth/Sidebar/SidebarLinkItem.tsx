import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { type SidebarLink } from "../../../../interfaces/sidebar.interface";
import { muiTheme } from "../../../../themes/muiTheme";
import Link from "../../../../themes/styled-components/Link";

export const SidebarLinkItem = ({ item }: { item: SidebarLink }) => {
	const { asPath } = useRouter();

	const isSelected = item.route === asPath;

	return (
		<>
			<List sx={{ position: "relative", listStyle: "none", m: 0 }}>
				<Link
					href={item.route}
					underline="none"
					color={"none"}
					sx={{
						borderRadius: muiTheme.spacing(1),
						py: 1.25,
						pr: 2,
						pl: 3,
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
						color: isSelected
							? muiTheme.palette.primary.main
							: muiTheme.palette.black.light,
						backgroundColor: isSelected
							? muiTheme.palette.primary.light
							: "inherit",
						fontWeight: isSelected ? 500 : "inherit",
						"&:hover": {
							fontWeight: 500,
							backgroundColor: muiTheme.palette.primary.light,
							color: muiTheme.palette.primary.main,
							cursor: "pointer",
						},
					}}
				>
					<ListItem
						key={item.title}
						disablePadding
						sx={{
							color: "inherit",
						}}
					>
						<ListItemIcon
							sx={{
								minWidth: 35,
								fontSize: muiTheme.typography.body2.fontSize,
								color: "inherit",
							}}
						>
							{item.icon}
						</ListItemIcon>
						<ListItemText
							primary={item.title}
							primaryTypographyProps={{
								variant: "subtitle2",
								sx: {
									textTransform: "capitalize",
								},
							}}
						/>
					</ListItem>
				</Link>
			</List>
			<Divider
				sx={{
					borderColor: muiTheme.palette.grey[200],
					borderWidth: "thin",
				}}
			/>
		</>
	);
};
