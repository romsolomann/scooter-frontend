import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useParkingsQueryHooks } from "../../api/parking/parking.query-hooks";
import { useDialogManager } from "../../hooks/useDialogManager";
import { type CreatedParking } from "../../interfaces/parking.interface";

export const CreateParking = () => {
	const { handleSubmit, register } = useForm<CreatedParking>();
	const { closeDialog } = useDialogManager();

	const { refetch: refetchParkings } = useParkingsQueryHooks.useGetParkings();
	const { mutate: createParking } = useParkingsQueryHooks.useCreateParking({
		onSuccess() {
			refetchParkings();
			closeDialog();
		},
	});

	const onSubmit = (data: CreatedParking) => {
		const parking: CreatedParking = {
			...data,
			location: {
				latitude: +data.location.latitude,
				longitude: +data.location.longitude,
			},
		};
		createParking(parking);
	};

	return (
		<Box p={2}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<TextField
							{...register("address.street.name")}
							label="Street Name"
							type="text"
							required
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register("address.street.number")}
							label="Street Number"
							type="number"
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register("address.city")}
							label="City"
							type="text"
							required
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register("numberOfScooters")}
							label="Number of Scooters"
							type="number"
							required
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register("location.latitude")}
							label="Latitude"
							type="text"
							required
						/>
					</Grid>
					<Grid item xs={4}>
						<TextField
							{...register("location.longitude")}
							label="Longitude"
							type="text"
							required
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					sx={{ mt: 2 }}
				>
					Create Parking
				</Button>
			</form>
		</Box>
	);
};
