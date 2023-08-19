import jwtDecode from "jwt-decode";

export function getAuthToken(): string {
	return localStorage.getItem("token") ?? "";
}

export function setAuthToken(token: string): void {
	localStorage.setItem("token", token);
}

export function decodeToken<T>(token: string): T {
	return jwtDecode(token);
}
