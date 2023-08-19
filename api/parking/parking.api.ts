import { getBackendApi } from "../index";

import { type Response } from "../../interfaces/api.interface";
import {
	type CreatedParking,
	type Parking,
} from "../../interfaces/parking.interface";

const parkingsRouteApi = getBackendApi("/parkings");

export const getParkings = async (): Promise<Response<Parking[]>> => {
	return await parkingsRouteApi.get<Parking[]>("/");
};

export const getParkingById = async (
	parkingId: string
): Promise<Response<Parking>> => {
	return await parkingsRouteApi.get<Parking>(`/${parkingId}`);
};

export const createParking = async (
	payload: CreatedParking
): Promise<Response<Parking>> => {
	return await parkingsRouteApi.post<Parking>("/", payload);
};

export const updateParking = async (
	payload: Parking
): Promise<Response<Parking>> => {
	return await parkingsRouteApi.put<Parking>(`/${payload._id}`, payload);
};

export const removeParking = async (
	parkingId: string
): Promise<Response<Parking>> => {
	return await parkingsRouteApi.put<Parking>(`/${parkingId}`);
};

export const parkingApi = {
	getParkings,
	getParkingById,
	createParking,
	updateParking,
	removeParking,
};
