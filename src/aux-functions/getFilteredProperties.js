const getFilteredProperties = (properties, filter) => {
	return properties.filter((property) => {
		const checkType = property.type.name.includes(filter.type);
		const checkRooms = property.room_amount >= filter.rooms;
		const checkBathrooms = property.bathroom_amount >= filter.bathrooms;
		const checkParking = property.parking_lot_amount >= filter.parking;
		return checkType && checkRooms && checkBathrooms && checkParking;
	});
};

export default getFilteredProperties;
