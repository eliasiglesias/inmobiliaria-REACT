import React, { useContext, useEffect, useState } from "react";
import Property from "./Property";
import FilterContext from "../context/FilterContext";
import getFilteredProperties from "../aux-functions/getFilteredProperties";
import getTypeFilter from "../aux-functions/getTypeFilter";
import getRoomsFilter from "../aux-functions/getRoomsFilter";
import getBathroomsFilter from "../aux-functions/getBathroomsFilter";
import getParkingFilter from "../aux-functions/getParkingFilter";
import getApiInfo from "../api/getApiInfo";
import checkInitialFilters from "../aux-functions/checkInitialFilters";

const PropertiesGrid = () => {
	const [properties, setProperties] = useState();
	const [propertiesList, setPropertiesList] = useState();
	const filterContext = useContext(FilterContext);

	useEffect(() => {
		async function getApi() {
			const data = await getApiInfo();
			setProperties(data);
			setPropertiesList(data);
		}
		getApi();
	}, []);

	useEffect(() => {
		if (properties && checkInitialFilters(filterContext.filter)) {
			setPropertiesList(
				getFilteredProperties(properties, filterContext.filter)
			);
		} else if (propertiesList) {
			setPropertiesList(
				getFilteredProperties(propertiesList, filterContext.filter)
			);
		}
	}, [filterContext.filter]);

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
