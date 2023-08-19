import { getBackendApi } from "../index";
import {
	type LoginDetails,
	type SignupDetails,
	type TokenData,
} from "../../interfaces/auth.interface";
import { type Response } from "../../interfaces/api.interface";

const authRouteApi = getBackendApi("/auth");

export const signup = async (
	payload: SignupDetails
): Promise<Response<TokenData>> => {
	return await authRouteApi.post<TokenData>("/signup", payload);
};

export const login = async (
	payload: LoginDetails
): Promise<Response<TokenData>> => {
	return await authRouteApi.post<TokenData>("/login", payload);
};

export const logout = async (): Promise<Response<any>> => {
	return await authRouteApi.post("/logout");
};

export const authApi = {
	signup,
	login,
	logout,
};
