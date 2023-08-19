import { Box, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { Login } from "../components/Auth/Login";
import { Signup } from "../components/Auth/Signup";
import { EAuthMethod } from "../interfaces/auth.interface";

const Auth = () => {
	const [authMethod, setAuthMethod] = useState<EAuthMethod>(EAuthMethod.LOGIN);

	const switchAuthMethod = (value: EAuthMethod) => {
		setAuthMethod(value);
	};
	return (
		<Box
			sx={{ height: "100vh", width: "100%", backgroundColor: grey[400] }}
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				maxWidth={350}
				sx={{ backgroundColor: "white", p: 2, borderRadius: 1 }}
			>
				{authMethod === EAuthMethod.LOGIN ? <Login /> : <Signup />}
			</Box>
			<Box>
				<Button
					onClick={() => {
						switchAuthMethod(
							authMethod === EAuthMethod.LOGIN
								? EAuthMethod.SIGNUP
								: EAuthMethod.LOGIN
						);
					}}
				>
					{authMethod === EAuthMethod.LOGIN
						? "Not Signed up yet? register here"
						: "already signed up? login here"}
				</Button>
			</Box>
		</Box>
	);
};

Auth.isPublic = true;
export default Auth;
