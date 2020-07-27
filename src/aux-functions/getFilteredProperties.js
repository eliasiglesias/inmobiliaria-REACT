const getFilteredProperties = (properties, filter) => {
	return properties.filter((property) => {
		const checkType = property.type.name.includes(filter.type);
		let checkRooms = false;
		if (filter.rooms === -1) {
			checkRooms = property.room_amount >= filter.rooms;
		} else checkRooms = property.room_amount == filter.rooms;

		let checkBathrooms = false;
		if (filter.bathrooms === -1) {
			checkBathrooms = property.bathroom_amount >= filter.bathrooms;
		} else checkBathrooms = property.bathroom_amount == filter.bathrooms;

		let checkParking = false;
		if (filter.parking === -1) {
			checkParking = property.parking_lot_amount >= filter.parking;
		} else checkParking = property.parking_lot_amount == filter.parking;

		return checkType && checkRooms && checkBathrooms && checkParking;
	});
};

export default getFilteredProperties;
