export enum ESidebarLinks {
	PARKINGS = "parkings",
}

export interface SidebarLink {
	title: ESidebarLinks;
	route: string;
	icon: React.ReactNode;
}
