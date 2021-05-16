import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const InsightMap = props => {
	return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 10, lng: -84 }} />;
};

export default withScriptjs(withGoogleMap(InsightMap));
