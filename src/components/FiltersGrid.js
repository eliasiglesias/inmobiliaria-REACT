import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import Filter from "./Filter";
import FilterContext from "../context/FilterContext";

const FilterGrid = (props) => {
	const filterContext = useContext(FilterContext);

	return (
		<Row className="d-flex justify-content-around mx-5 px-5 mt-5">
			<Col>
				<Filter
					name="type"
					title="Tipo"
					options={filterContext.filterList.type}
					change={props.changeFilter}
				/>
			</Col>
			<Col>
				<Filter
					name="rooms"
					title="Habitaciones"
					options={filterContext.filterList.rooms}
					change={props.changeFilter}
				/>
			</Col>
			<Col>
				<Filter
					name="bathrooms"
					title="Baños"
					options={filterContext.filterList.bathrooms}
					change={props.changeFilter}
				/>
			</Col>
			<Col>
				<Filter
					name="parking"
					title="Parking"
					options={filterContext.filterList.parking}
					change={props.changeFilter}
				/>
			</Col>
		</Row>
	);
};

export default FilterGrid;
