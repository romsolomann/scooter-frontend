import {
	type UseMutationOptions,
	type UseMutationResult,
	useMutation,
	type UseQueryOptions,
	useQuery,
	type UseQueryResult,
} from "@tanstack/react-query";

import {
	type Response,
	type ErrorResponse,
} from "../../interfaces/api.interface";
import {
	type CreatedParking,
	type Parking,
} from "../../interfaces/parking.interface";
import { parkingApi } from "./parking.api";

const useGetParkings = (
	options?: UseQueryOptions<Response<Parking[]>, ErrorResponse>
): UseQueryResult<Response<Parking[]>, ErrorResponse> =>
	useQuery(["parkings"], parkingApi.getParkings);

const useCreateParking = (
	options?: UseMutationOptions<Response<Parking>, ErrorResponse, CreatedParking>
): UseMutationResult<Response<Parking>, ErrorResponse, CreatedParking> => {
	return useMutation(
		["parkings"],
		async (payload) => await parkingApi.createParking(payload),
		options
	);
};

export const useParkingsQueryHooks = {
	useGetParkings,
	useCreateParking,
};
