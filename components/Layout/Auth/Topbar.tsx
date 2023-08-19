import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Topbar = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				boxShadow: "none",
				zIndex: 1100,
				top: 0,
				right: 0,
				left: "auto",
				background: "white",
			}}
		>
			<Toolbar sx={{ p: 2 }}>
				<Typography
					variant="h6"
					noWrap
					component="div"
					sx={{
						flexGrow: 1,
						display: { xs: "none", sm: "block" },
						color: "black",
					}}
				></Typography>
			</Toolbar>
		</AppBar>
	);
};
