import React from "react";

const Filter = (props) => {
	return (
		<select className="custom-select" onChange={props.change}>
			<option selected disabled>
				{props.title}
			</option>
			{props.options &&
				props.options.map((option) => <option>{option}</option>)}
		</select>
	);
};

export default Filter;
