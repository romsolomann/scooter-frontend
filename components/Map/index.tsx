import { Box } from "@mui/material";
import getConfig from "next/config";
import React, { type PropsWithChildren } from "react";
import { Map as Mapbox } from "react-map-gl";
import { BOUNDS, MAP_STYLE } from "../../constants/map";

const { publicRuntimeConfig } = getConfig();
const MAPBOX_ACCESS_TOKEN_KEY = publicRuntimeConfig.MAPBOX_ACCESS_TOKEN_KEY;

const Map = ({ children }: PropsWithChildren) => {
	return (
		<Box sx={{ width: "100%" }}>
			<Mapbox
				mapboxAccessToken={MAPBOX_ACCESS_TOKEN_KEY}
				initialViewState={BOUNDS}
				style={{ width: "100%", height: 400 }}
				mapStyle={MAP_STYLE}
			>
				{children}
			</Mapbox>
		</Box>
	);
};

export default Map;
