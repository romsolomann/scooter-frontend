import {
	ESidebarLinks,
	type SidebarLink,
} from "../interfaces/sidebar.interface";
import GridViewIcon from "@mui/icons-material/GridView";

export const SIDEBAR_LINKS: SidebarLink[] = [
	{
		title: ESidebarLinks.PARKINGS,
		route: `/dashboard/${ESidebarLinks.PARKINGS}`,
		icon: <GridViewIcon />,
	},
];
