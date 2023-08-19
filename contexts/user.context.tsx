import { useRouter } from "next/router";
import {
	type PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { type UserResponse } from "../interfaces/user.interface";
import { ERoutes } from "../routes/routes.enum";
import { decodeToken, getAuthToken } from "../services/auth";

interface IUserContext {
	isLoading: boolean;
	isLoggedIn: boolean;
	user: UserResponse | undefined;
	setUser: (user: UserResponse | undefined) => void;
	clearUser: () => void;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const UserContext = createContext({} as IUserContext);

export const UserContextWrapper = ({
	children,
}: PropsWithChildren<{}>): JSX.Element => {
	const { push } = useRouter();
	const [user, setUser] = useState<UserResponse | undefined>(undefined);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const isLoggedIn = !isLoading && !!user?._id;

	const clearUser = (): void => {
		setUser(undefined);
	};

	useEffect(() => {
		if (!user) {
			push(ERoutes.AUTH);
		}
	}, [user]);

	useEffect(() => {
		setIsLoading(true);
		const token = getAuthToken();

		if (token) {
			const user: UserResponse = decodeToken(token);
			setUser(user);
		}

		setIsLoading(false);
	}, [setUser]);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				clearUser,
				isLoggedIn,
				isLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = (): IUserContext => {
	return useContext(UserContext);
};
