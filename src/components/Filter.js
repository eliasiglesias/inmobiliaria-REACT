import React from "react";

const Filter = (props) => {
	return (
		<>
			{props.disabled ? (
				<select
					name={props.name}
					className="custom-select"
					onChange={props.change}
					disabled={props.disabled}
				>
					<option value="">{props.title}</option>
					{props.options &&
						props.options.map((option) => (
							<option key={`option${option}`}>{option}</option>
						))}
				</select>
			) : (
				<>
					<select
						name={props.name}
						className="custom-select"
						onChange={props.change}
					>
						<option value="">{props.title}</option>
						{props.options &&
							props.options.map((option) => (
								<option key={`option${option}`}>{option}</option>
							))}
					</select>
				</>
			)}
		</>
	);
};

export default Filter;
