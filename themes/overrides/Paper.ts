import { type Components, type Theme } from "@mui/material";

export const Paper = (theme: Theme): Components => ({
	MuiPaper: {
		styleOverrides: {
			root: {
				borderRadius: theme.spacing(1),
				boxShadow: "none",
			},
		},
	},
});
