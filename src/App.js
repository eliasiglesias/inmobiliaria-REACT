import React, { useState } from "react";
import PropertiesGrid from "./components/PropertiesGrid";
import FilterGrid from "./components/FiltersGrid";
import Title from "./components/Title";
import FilterContext from "./context/FilterContext";

function App() {
	const [filters, setFilters] = useState({
		type: "",
		rooms: -1,
		bathrooms: -1,
		parking: -1,
	});

	const [filtersList, setFiltersList] = useState({
		type: [],
		rooms: [],
		bathrooms: [],
		parking: [],
	});

	const [flagsFilters, setFlagsFilters] = useState({
		type: false,
		rooms: false,
		bathrooms: false,
		parking: false,
	});

	const changeFilterSelect = (event) => {
		setFilters({ ...filters, [event.target.name]: event.target.value });
		setFlagsFilters({ ...flagsFilters, [event.target.name]: true });
	};

	return (
		<div className="App ">
			<Title />
			<FilterContext.Provider
				value={{
					filter: filters,
					filterList: filtersList,
					changeFilter: changeFilterSelect,
					setFilterList: setFiltersList,
					setFilters: setFilters,
					flagsFilters: flagsFilters,
					setFlagsFilters: setFlagsFilters,
				}}
			>
				<FilterGrid />
				<PropertiesGrid />
			</FilterContext.Provider>
		</div>
	);
}

export default App;
