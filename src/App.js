import React, { useState } from "react";
import PropertiesGrid from "./components/PropertiesGrid";
import FilterGrid from "./components/FiltersGrid";
import Title from "./components/Title";
import FilterContext from "./context/FilterContext";

function App() {
	const [filters, setFilters] = useState({
		type: "",
		rooms: 0,
		bathrooms: 0,
		parking: 0,
	});

	const [filtersList, setFiltersList] = useState({
		type: [],
		rooms: [],
		bathrooms: [],
		parking: [],
	});

	const changeFilterSelect = (event) => {
		setFilters({ ...filters, [event.target.name]: event.target.value });
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
				}}
			>
				<FilterGrid changeFilter={changeFilterSelect} />
				<PropertiesGrid />
			</FilterContext.Provider>
		</div>
	);
}

export default App;
