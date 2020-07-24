import React from "react";
import { Row, Col } from "reactstrap";

const Property = (props) => {
	return (
		<div className="mx-5">
			<Row className="my-4 mx-5 border shadow alert alert-success">
				<Col xs="4">
					<img src={props.property.photos} alt="" />
				</Col>
				<Col xs="8" className="border-left">
					<h5>{props.property.publication_title}</h5>
					<p>{props.property.description}</p>
					<div>
						<span className="mr-3">Tipo: {props.property.type.name}</span>
						<span className="mr-3">
							Habitaciones: {props.property.room_amount}
						</span>
						<span className="mr-3">
							Baños: {props.property.bathroom_amount}
						</span>
						<span className="mr-3">
							Parking: {props.property.parking_lot_amount}
						</span>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Property;
