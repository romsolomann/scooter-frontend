export interface User {
	_id: string;
	username: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
}

export type UserResponse = Omit<User, "password">;
