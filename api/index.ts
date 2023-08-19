import axios, { type AxiosInstance } from "axios";
import { type ResponseError } from "../interfaces/api.interface";

const BACKEND_API_URL = "http://localhost:3030/api";

export interface DetailsError {
	message: string;
	code: string;
	path?: string;
}

export interface BackendError extends Error {
	message: string;
	errorCode: string;
}

const createAxiosInstance = (
	baseUrl: string,
	authRequired: boolean,
	onResponseFail: (error: ResponseError) => Promise<BackendError>
): AxiosInstance => {
	const instance = axios.create({
		baseURL: baseUrl,
	});

	if (authRequired && typeof window === "object") {
		instance.interceptors.request.use((config) => {
			const modifiedConfig = { ...config };
			// const jwtToken = getAuthToken();

			// if (jwtToken) {
			//   modifiedConfig.headers.Authorization = `Bearer ${jwtToken}`;
			// }

			return modifiedConfig;
		});
	}

	instance.interceptors.response.use(
		(response) => response,
		async (error) => {
			const backendError = await onResponseFail(error);
			return await Promise.reject(backendError);
		}
	);

	return instance;
};

export function getBackendApi(
	routeSuffix = "",
	authRequired = false
): AxiosInstance {
	return createAxiosInstance(
		BACKEND_API_URL + routeSuffix,
		authRequired,
		async (error: ResponseError): Promise<BackendError> => {
			return (
				error?.response?.data || {
					message: "Something went wrong",
					errorCode: "UNKNOWN",
				}
			);
		}
	);
}
