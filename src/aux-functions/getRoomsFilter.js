const sortNumRooms = (properties) => {
	return properties.map((prop) => prop.room_amount).sort();
};

const getRoomsFilter = (properties) => {
	let hash = {};
	properties = properties.filter((property) => {
		var exists = !hash[property.room_amount];
		hash[property.room_amount] = true;
		return exists;
	});
	const result = sortNumRooms(properties);

	return result;
};

export default getRoomsFilter;
