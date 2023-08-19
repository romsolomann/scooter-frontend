import { authApi } from "./auth.api";
import {
	type UseMutationOptions,
	type UseMutationResult,
	useMutation,
} from "@tanstack/react-query";

import { type UserResponse } from "../../interfaces/user.interface";
import {
	type LoginDetails,
	type SignupDetails,
	type TokenData,
} from "../../interfaces/auth.interface";
import {
	type ErrorResponse,
	type Response,
} from "../../interfaces/api.interface";

const useLogin = (
	options?: UseMutationOptions<Response<TokenData>, ErrorResponse, LoginDetails>
): UseMutationResult<Response<TokenData>, ErrorResponse, LoginDetails> => {
	return useMutation(
		["login"],
		async (payload) => await authApi.login(payload),
		options
	);
};

const useSignUp = (
	options?: UseMutationOptions<
		Response<TokenData>,
		ErrorResponse,
		SignupDetails,
		string[]
	>
): UseMutationResult<Response<TokenData>, ErrorResponse, SignupDetails> => {
	return useMutation(
		["signup"],
		async (payload) => await authApi.signup(payload),
		options
	);
};

const useLogout = (
	options?: UseMutationOptions<
		Response<UserResponse>,
		ErrorResponse,
		LoginDetails
	>
): UseMutationResult<Response<any>, ErrorResponse, any> => {
	return useMutation(["logout"], async () => await authApi.logout(), options);
};

export const useAuthQueryHooks = {
	useLogin,
	useSignUp,
	useLogout,
};
