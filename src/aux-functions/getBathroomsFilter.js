const sortNumBaths = (properties) => {
	return properties.map((prop) => prop.bathroom_amount).sort();
};

const getBathroomsFilter = (properties) => {
	let hash = {};
	properties = properties.filter((property) => {
		var exists = !hash[property.bathroom_amount];
		hash[property.bathroom_amount] = true;
		return exists;
	});
	const result = sortNumBaths(properties);

	return result;
};

export default getBathroomsFilter;
