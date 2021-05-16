import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

const InsightMap = props => {
	return (
		<GoogleMap defaultZoom={10} defaultCenter={{ lat: 10.092534, lng: -84.45857 }}>
			<Marker
				title={"Central de Insight Menu"}
				name={"Insight Menu"}
				position={{ lat: 10.092534, lng: -84.45857 }}
			/>
		</GoogleMap>
	);
};

export default withScriptjs(withGoogleMap(InsightMap));
