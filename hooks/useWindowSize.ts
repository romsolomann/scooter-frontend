import { type Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useIsMobileScreen(
	size: Breakpoint | number = "sm"
): boolean {
	const theme = useTheme();
	return useMediaQuery(theme.breakpoints.down(size));
}
