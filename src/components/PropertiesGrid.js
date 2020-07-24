import React, { useContext, useEffect, useState } from "react";
import Property from "./Property";
import PropertiesContext from "../context/PropertiesContext";
import FilterContext from "../context/FilterContext";
import getFilteredProperties from "../aux-functions/getFilteredProperties";

const PropertiesGrid = () => {
	const properties = useContext(PropertiesContext);
	const filter = useContext(FilterContext);

	useEffect(() => {
		if (properties.properties) {
			properties.setProperties(
				getFilteredProperties(properties.properties, filter)
			);
		}
	}, [filter]);

	return (
		<div>
			{properties.properties &&
				properties.properties.map((property) => (
					<Property key={property.id} property={property} />
				))}
			;
		</div>
	);
};

export default PropertiesGrid;
