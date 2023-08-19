/* eslint-disable @typescript-eslint/no-unused-vars */
import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		black: CustomPaletteColorOptions;
		white: CustomPaletteColorOptions;
	}

	interface PaletteOptions {
		black?: CustomPaletteColorOptions;
		white?: CustomPaletteColorOptions;
	}

	// Custom color options interface
	interface CustomPaletteColorOptions {
		main: string;
		darker?: string;
		light?: string;
		contrastText?: string;
	}
}
