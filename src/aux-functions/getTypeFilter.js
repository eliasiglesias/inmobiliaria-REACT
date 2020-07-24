const getTypeFilter = (properties) => {
	let hash = {};
	properties = properties.filter((property) => {
		var exists = !hash[property.type.code];
		hash[property.type.code] = true;
		return exists;
	});

	return properties.map((prop) => prop.type.name);
};

export default getTypeFilter;
