import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useAuthQueryHooks } from "../../api/auth/auth.query-hooks";
import { useUser } from "../../contexts/user.context";
import { type LoginDetails } from "../../interfaces/auth.interface";
import { type UserResponse } from "../../interfaces/user.interface";
import { ERoutes } from "../../routes/routes.enum";
import { decodeToken, setAuthToken } from "../../services/auth";

export const Login = () => {
	const { handleSubmit, register } = useForm<LoginDetails>();
	const { setUser } = useUser();
	const { push } = useRouter();

	const { mutate: login } = useAuthQueryHooks.useLogin({
		onSuccess(data) {
			const token = data.data.token;
			const user: UserResponse = decodeToken(token);

			push(ERoutes.PARKINGS);
			setAuthToken(token);
			setUser(user);
		},
	});

	const onSubmit = (data: LoginDetails) => {
		login(data);
	};
	return (
		<Box>
			<Typography my={2} variant="h5">
				Login
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							{...register("username")}
							label="Username"
							type="text"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register("password")}
							label="Password"
							type="password"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Login
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};
