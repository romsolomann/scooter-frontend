export type Theme = "dark" | "light";

export type Language = "he" | "en";

export interface Geolocation {
	latitude: number;
	longitude: number;
}

export interface Address {
	location: Geolocation;
	street: { name: string; number?: number };
	city: string;
}
