const sortNumParkings = (properties) => {
	return properties.map((prop) => prop.parking_lot_amount).sort();
};

const getParkingFilter = (properties) => {
	let hash = {};
	properties = properties.filter((property) => {
		var exists = !hash[property.parking_lot_amount];
		hash[property.parking_lot_amount] = true;
		return exists;
	});
	const result = sortNumParkings(properties);

	return result;
};

export default getParkingFilter;
