import { Box, Container, Drawer } from "@mui/material";
import React, { type ReactNode } from "react";
import { AUTH_TOPBAR_HEIGHT, DRAWER_WIDTH } from "../../../constants/style";
import { muiTheme } from "../../../themes/muiTheme";
import { Sidebar } from "./Sidebar/Sidebar";
import { Topbar } from "./Topbar";
import Toolbar from "@mui/material/Toolbar";

const AuthLayout = ({ children }: { children: ReactNode }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<Topbar />
			<Drawer
				sx={{
					width: DRAWER_WIDTH,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						borderRight: "none",
						width: DRAWER_WIDTH,
						boxSizing: "border-box",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar />
				<Sidebar />
			</Drawer>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 2.5,
					width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
					backgroundColor: "grey.200",
					minHeight: `calc(100vh - ${AUTH_TOPBAR_HEIGHT}px)`,
					borderTopRightRadius: muiTheme.spacing(1),
					borderTopLeftRadius: muiTheme.spacing(1),
					mr: 2.5,
					ml: 0,
					mt: `${AUTH_TOPBAR_HEIGHT}px`,
				}}
			>
				<Container disableGutters maxWidth={false} sx={{ height: "100%" }}>
					{children}
				</Container>
			</Box>
		</Box>
	);
};

export default AuthLayout;
