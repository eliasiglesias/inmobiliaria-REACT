import React, { useContext, useEffect, useState } from "react";
import Property from "./Property";
import FilterContext from "../context/FilterContext";
import getFilteredProperties from "../aux-functions/getFilteredProperties";
import getTypeFilter from "../aux-functions/getTypeFilter";
import getRoomsFilter from "../aux-functions/getRoomsFilter";
import getBathroomsFilter from "../aux-functions/getBathroomsFilter";
import getParkingFilter from "../aux-functions/getParkingFilter";
import getApiInfo from "../api/getApiInfo";

const PropertiesGrid = () => {
	const [properties, setProperties] = useState();
	const [propertiesList, setPropertiesList] = useState();
	const filterContext = useContext(FilterContext);
	const { filter } = useContext(FilterContext);

	useEffect(() => {
		async function getApi() {
			const data = await getApiInfo();
			setProperties(data);
		}
		getApi();
	}, []);

	useEffect(() => {
		if (properties) {
			setPropertiesList(getFilteredProperties(properties, filter));
		}
	}, [filter, properties]);

	useEffect(() => {
		if (propertiesList) {
			filterContext.setFilterList({
				type: getTypeFilter(propertiesList),
				rooms: getRoomsFilter(propertiesList),
				bathrooms: getBathroomsFilter(propertiesList),
				parking: getParkingFilter(propertiesList),
			});
		}
	}, [propertiesList]);

	return (
		<div>
			{propertiesList &&
				propertiesList.map((property) => (
					<Property key={property.id} property={property} />
				))}
			;
		</div>
	);
};

export default PropertiesGrid;
