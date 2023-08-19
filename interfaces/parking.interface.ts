import { type Address, type Geolocation } from "./common.interface";

export interface Parking {
	_id: string;
	address: Address;
	numberOfScooters: number;
	location: Geolocation;
}

export type CreatedParking = Omit<Parking, "_id">;
