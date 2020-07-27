import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import Filter from "./Filter";
import FilterContext from "../context/FilterContext";

const FilterGrid = () => {
	const filterContext = useContext(FilterContext);

	const resetFilter = (property, value) => {
		filterContext.setFilters({
			...filterContext.filter,
			[property]: value,
		});
		filterContext.setFlagsFilters({
			...filterContext.flagsFilters,
			[property]: false,
		});
	};

	return (
		<>
			<Row className="d-flex justify-content-around mx-5 px-5 mt-5">
				<Col>
					<Filter
						name="type"
						title="Tipo"
						options={filterContext.filterList.type}
						change={filterContext.changeFilter}
						disabled={filterContext.filterList.type.length === 1}
					/>
				</Col>
				<Col>
					<Filter
						name="rooms"
						title="Habitaciones"
						options={filterContext.filterList.rooms}
						change={filterContext.changeFilter}
						disabled={filterContext.filterList.rooms.length === 1}
					/>
				</Col>
				<Col>
					<Filter
						name="bathrooms"
						title="Baños"
						options={filterContext.filterList.bathrooms}
						change={filterContext.changeFilter}
						disabled={filterContext.filterList.bathrooms.length === 1}
					/>
				</Col>
				<Col>
					<Filter
						name="parking"
						title="Parking"
						options={filterContext.filterList.parking}
						change={filterContext.changeFilter}
						disabled={filterContext.filterList.parking.length === 1}
					/>
				</Col>
			</Row>

			{/* Mostrar los filtros cuando se han seleccionado con una X para borrarlos */}
			<Row className="d-flex justify-content-start mx-5 px-5 mt-2">
				{filterContext.flagsFilters.type && (
					<p className="border rounded-pill px-2 py-1 bg-light">
						Tipo: {filterContext.filterList.type}
						<span
							className="ml-2 text-secondary"
							onClick={() => resetFilter("type", "")}
						>
							x
						</span>
					</p>
				)}
				{filterContext.flagsFilters.rooms && (
					<p className="ml-2 border rounded-pill px-2 py-1 bg-light">
						Habitaciones: {filterContext.filterList.rooms}
						<span
							className="ml-2 text-secondary"
							onClick={() => resetFilter("rooms", -1)}
						>
							x
						</span>
					</p>
				)}
				{filterContext.flagsFilters.bathrooms && (
					<p className="ml-2 border rounded-pill px-2 py-1 bg-light">
						Baños: {filterContext.filterList.bathrooms}
						<span
							className="ml-2 text-secondary"
							onClick={() => resetFilter("bathrooms", -1)}
						>
							x
						</span>
					</p>
				)}
				{filterContext.flagsFilters.parking && (
					<p className="ml-2 border rounded-pill px-2 py-1 bg-light">
						Parking: {filterContext.filterList.parking}
						<span
							className="ml-2 text-secondary"
							onClick={() => resetFilter("parking", -1)}
						>
							x
						</span>
					</p>
				)}
			</Row>
		</>
	);
};

export default FilterGrid;
