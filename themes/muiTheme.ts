import { createTheme } from "@mui/material";
import colorPalette from "./colorPalette";
import fontPalette from "./fontPalette";
import { overrides } from "./overrides";

export const muiTheme = createTheme({
	direction: "ltr",
	palette: colorPalette.palette,
	typography: fontPalette.typography,
});
muiTheme.components = overrides(muiTheme);
