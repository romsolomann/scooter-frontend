import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { useAuthQueryHooks } from "../../api/auth/auth.query-hooks";
import { type SignupDetails } from "../../interfaces/auth.interface";
import { decodeToken, setAuthToken } from "../../services/auth";
import { type UserResponse } from "../../interfaces/user.interface";
import { useUser } from "../../contexts/user.context";
import { ERoutes } from "../../routes/routes.enum";
import { useRouter } from "next/router";

export const Signup = () => {
	const { handleSubmit, register } = useForm<SignupDetails>();
	const { setUser } = useUser();
	const { push } = useRouter();

	const { mutate: signup } = useAuthQueryHooks.useSignUp({
		onSuccess(data) {
			const token = data.data.token;
			const user: UserResponse = decodeToken(token);

			push(ERoutes.PARKINGS);
			setAuthToken(token);
			setUser(user);
		},
	});

	const onSubmit = (data: SignupDetails) => {
		signup(data);
	};
	return (
		<Box>
			<Typography my={2} variant="h5">
				Sign up
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
							{...register("firstName")}
							label="First name"
							type="text"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register("lastName")}
							label="Last Name"
							type="text"
							required
							fullWidth
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							{...register("email")}
							label="Email"
							type="email"
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
							Sign up
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};
