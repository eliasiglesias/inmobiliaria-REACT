const checkInitialFilters = (filter) => {
	if (
		filter.type === "" ||
		filter.rooms === -1 ||
		filter.bathrooms === -1 ||
		filter.parking === -1
	) {
		return true;
	} else return false;
};

export default checkInitialFilters;
