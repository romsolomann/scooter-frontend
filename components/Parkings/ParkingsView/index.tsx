import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { useParkingsQueryHooks } from "../../../api/parking/parking.query-hooks";
import Map from "../../Map";
import { Popup } from "react-map-gl";

const ParkingsView = () => {
	const { isLoading, data: parkings } = useParkingsQueryHooks.useGetParkings();
	return (
		<Box>
			{isLoading ? (
				<CircularProgress />
			) : (
				<Box width="100%">
					<Typography variant="h5" my={2}>
						Parking Spots
					</Typography>
					<Map>
						{parkings?.data.map((parking) => (
							<Popup
								key={parking._id}
								longitude={parking.location.longitude}
								latitude={parking.location.latitude}
								anchor="bottom"
								closeButton={false}
								className="custom-popup"
							>
								<Typography variant="subtitle2" fontWeight="bold">
									Amount of Scooter&#39;s Parking: {parking.numberOfScooters}
								</Typography>
							</Popup>
						))}
					</Map>
				</Box>
			)}
		</Box>
	);
};

export default ParkingsView;
