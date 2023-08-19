import React from "react";
import { type PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { muiTheme } from "../themes/muiTheme";

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
	return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
