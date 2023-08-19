import { Grid } from "@mui/material";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Grid>{children}</Grid>
		</>
	);
};

export default Layout;
