import axios, { type AxiosInstance, type AxiosResponse } from "axios";

import {
	type RequestConfig,
	type ApiConfiguration,
	type ApiArguments,
	type ResponseError,
	type Response,
	type RequestData,
} from "../interfaces/api.interface";
import { getAuthToken } from "../services/auth";

const REQUEST_DEFAULT_TIMEOUT = 30000; // milliseconds (30sec)

const createAxiosInstance = (
	baseUrl: string,
	args: ApiArguments
): AxiosInstance => {
	const { authRequired, timeout, onResponseSuccess, onResponseFail } = args;

	const instance = axios.create({
		baseURL: baseUrl,
		timeout: timeout ?? REQUEST_DEFAULT_TIMEOUT,
	});

	if (authRequired && typeof window === "object") {
		instance.interceptors.request.use((config) => {
			const modifiedConfig = { ...config };
			const jwtToken = getAuthToken();

			if (jwtToken) {
				modifiedConfig.headers.Authorization = `Bearer ${jwtToken}`;
			}

			return modifiedConfig;
		});
	}

	if (onResponseSuccess ?? onResponseFail) {
		instance.interceptors.response.use(
			onResponseSuccess ?? ((response) => response),
			async (err: ResponseError) => {
				if (err.response?.status === 401) {
					window.location.reload();
				}
				if (onResponseFail) {
					return await onResponseFail(err);
				} else {
					return await Promise.reject(err);
				}
			}
		);
	}

	return instance;
};

const updateAxiosConfiguration = (
	axiosInstance: AxiosInstance,
	config: ApiConfiguration = {}
): void => {
	const { defaults } = axiosInstance;

	axiosInstance.defaults.timeout = config.timeout ?? defaults.timeout;
	axiosInstance.defaults.headers = {
		...defaults.headers,
		...config.headers,
	};
};

const get = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.get(
		url,
		config
	);
	return response.data.data;
};

const del = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.delete(
		url,
		config
	);
	return response.data.data;
};

const head = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.head(
		url,
		config
	);
	return response.data.data;
};

const post = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	data?: RequestData,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.post(
		url,
		data,
		config
	);
	return response.data.data;
};

const put = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	data?: RequestData,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.put(
		url,
		data,
		config
	);
	return response.data.data;
};

const patch = async <T>(
	axiosInstance: AxiosInstance,
	url: string,
	data?: RequestData,
	config?: RequestConfig
): Promise<T> => {
	const response: AxiosResponse<Response<T>> = await axiosInstance.patch(
		url,
		data,
		config
	);
	return response.data.data;
};

export {
	createAxiosInstance,
	updateAxiosConfiguration,
	get,
	del,
	head,
	post,
	put,
	patch,
};
