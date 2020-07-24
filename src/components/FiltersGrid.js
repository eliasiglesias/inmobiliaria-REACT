import React, { useContext, useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Filter from "./Filter";
import PropertiesContext from "../context/PropertiesContext";
import getTypeFilter from "../aux-functions/getTypeFilter";
import getRoomsFilter from "../aux-functions/getRoomsFilter";
import getBathroomsFilter from "../aux-functions/getBathroomsFilter";
import getParkingFilter from "../aux-functions/getParkingFilter";

const FilterGrid = (props) => {
	const properties = useContext(PropertiesContext);
	const [filters, setFilters] = useState([]);

	useEffect(() => {
		if (properties.properties) {
			setFilters({
				type: getTypeFilter(properties.properties),
				rooms: getRoomsFilter(properties.properties),
				bathrooms: getBathroomsFilter(properties.properties),
				parking: getParkingFilter(properties.properties),
			});
		}
	}, [properties]);

	return (
		<Row className="d-flex justify-content-around mx-5 px-5 mt-5">
			<Col>
				<Filter
					title="Tipo"
					options={filters.type}
					change={props.changeFilter.changeType}
				/>
			</Col>
			<Col>
				<Filter
					title="Habitaciones"
					options={filters.rooms}
					change={props.changeFilter.changeRooms}
				/>
			</Col>
			<Col>
				<Filter
					title="Baños"
					options={filters.bathrooms}
					change={props.changeFilter.changeBathrooms}
				/>
			</Col>
			<Col>
				<Filter
					title="Parking"
					options={filters.parking}
					change={props.changeFilter.changeParking}
				/>
			</Col>
		</Row>
	);
};

export default FilterGrid;
