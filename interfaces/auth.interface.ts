import { type User } from "./user.interface";

export type LoginDetails = Pick<User, "username" | "password">;

export type SignupDetails = Omit<User, "_id">;

export enum EAuthMethod {
	SIGNUP = "signup",
	LOGIN = "login",
}

export interface TokenData {
	token: string;
	expiresIn: number;
}
