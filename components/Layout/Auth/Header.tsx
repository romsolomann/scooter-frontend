import { Paper, Box, Typography, Card, Grid } from "@mui/material";
import React from "react";
import { type Breadcrumb } from "../../../interfaces/breadcrumbs.interface";
import { Breadcrumbs } from "../../Breadcrumbs/Breadcrumbs";

interface IHeaderProps {
	label: string;
	breadcrumbs?: Breadcrumb[];
}

export const Header = ({ label, breadcrumbs }: IHeaderProps) => {
	return (
		<Paper component={Card} sx={{ mb: 3 }}>
			<Box p={2}>
				<Grid
					container
					spacing={1}
					alignItems="center"
					justifyContent="space-between"
				>
					<Grid item>
						<Typography
							variant="h4"
							sx={{
								textTransform: "capitalize",
							}}
						>
							{label}
						</Typography>
					</Grid>
					{breadcrumbs != null && (
						<Grid item>
							<Breadcrumbs breadcrumbs={breadcrumbs} />
						</Grid>
					)}
				</Grid>
			</Box>
		</Paper>
	);
};
