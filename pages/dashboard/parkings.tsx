import { Button, Grid } from "@mui/material";
import React from "react";
import { CreateParking } from "../../components/Parkings/CreateParking";
import ParkingsView from "../../components/Parkings/ParkingsView";
import { useDialogManager } from "../../hooks/useDialogManager";

const Parkings = () => {
	const { openDialog } = useDialogManager();

	const openParkingModal = () => {
		openDialog(CreateParking, {
			DialogProps: { maxWidth: "sm", fullScreen: false },
		});
	};
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Button variant="contained" onClick={openParkingModal}>
					Add new Parking Location
				</Button>
			</Grid>
			<Grid item xs={12}>
				<ParkingsView />
			</Grid>
		</Grid>
	);
};

export default Parkings;
