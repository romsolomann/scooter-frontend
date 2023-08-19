import { type AxiosResponse } from "axios";
export type ResponseType =
	| "arraybuffer"
	| "blob"
	| "document"
	| "json"
	| "text"
	| "stream";

export interface RequestConfig {
	headers?: Record<string, string>;
	params?: Record<string, string>;
	timeout?: number;
	responseType?: ResponseType;
}

export type Response<T = any> = AxiosResponse<T>;
export type RequestPromise<T = any> = () => Promise<Response<T>>;
export type RequestData = Record<string, any>;

export interface ResponseError<T = any> extends Error {
	config: RequestConfig | RequestConfig;
	code?: string;
	request?: any;
	response: Response<T>;
}

export interface ApiConfiguration {
	headers?: Record<string, string>;
	timeout?: number;
}

export interface ApiArguments {
	authRequired?: boolean;
	timeout?: number;
	onResponseSuccess?: (response: Response) => any;
	onResponseFail?: (response: ResponseError) => Promise<Error>;
}

export interface ErrorResponse {
	errorCode: string;
	message: string;
}
