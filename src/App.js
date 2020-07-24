import React, { useState, useEffect } from "react";
import getApiInfo from "./api/getApiInfo";
import PropertiesGrid from "./components/PropertiesGrid";
import FilterGrid from "./components/FiltersGrid";
import Title from "./components/Title";
import PropertiesContext from "./context/PropertiesContext";
import FilterContext from "./context/FilterContext";

function App() {
	const [properties, setProperties] = useState();
	const [filters, setFilters] = useState({
		type: "",
		rooms: 0,
		bathrooms: 0,
		parking: 0,
	});

	const changeFilterType = (event) => {
		setFilters({ ...filters, type: event.target.value });
	};

	const changeFilterRooms = (event) => {
		setFilters({ ...filters, rooms: event.target.value });
	};

	const changeFilterBathrooms = (event) => {
		setFilters({ ...filters, bathrooms: event.target.value });
	};

	const changeFilterParking = (event) => {
		setFilters({ ...filters, parking: event.target.value });
	};

	useEffect(() => {
		async function getApi() {
			const data = await getApiInfo();
			setProperties(data);
		}
		getApi();
	}, []);

	return (
		<div className="App ">
			<Title />
			<PropertiesContext.Provider
				value={{ properties: properties, setProperties: setProperties }}
			>
				<FilterGrid
					changeFilter={{
						changeType: changeFilterType,
						changeRooms: changeFilterRooms,
						changeBathrooms: changeFilterBathrooms,
						changeParking: changeFilterParking,
					}}
				/>
				<FilterContext.Provider value={filters}>
					<PropertiesGrid />
				</FilterContext.Provider>
			</PropertiesContext.Provider>
		</div>
	);
}

export default App;
