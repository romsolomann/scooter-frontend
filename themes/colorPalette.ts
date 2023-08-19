import colorScheme from "../colors/colorScheme";
import { createTheme } from "@mui/material";

const colorPalette = createTheme({
	palette: {
		primary: {
			...colorScheme.primary,
		},
		secondary: {
			...colorScheme.secondary,
		},
		info: {
			...colorScheme.accent,
		},
		success: {
			...colorScheme.success,
		},
		error: {
			...colorScheme.error,
		},
		black: {
			...colorScheme.black,
		},
		white: {
			...colorScheme.white,
		},
		// Add more color variations as needed
	},
});

export default colorPalette;
