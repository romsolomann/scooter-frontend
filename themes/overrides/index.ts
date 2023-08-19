import { type Theme } from "@mui/material";
import { Paper } from "./Paper";

export function overrides(theme: Theme) {
	return Object.assign(Paper(theme));
}
