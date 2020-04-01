import React from 'react';

interface CreateExampleViewProps {
	name: string;
	ratio: string;
	handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleRatioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => void;
}

const CreateExampleView: React.FC<CreateExampleViewProps> = ({
	handleNameChange,
	handleRatioChange,
	handleSubmit,
	name,
	ratio,
}) => {
	return (
		<>
			<h3>Create example</h3>
			<div>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" value={name} onChange={handleNameChange} />
			</div>
			<div>
				<label htmlFor="ratio">Ratio</label>
				<input
					type="text"
					id="ratio"
					value={ratio}
					onChange={handleRatioChange}
				/>
			</div>
			<button onClick={handleSubmit} disabled={isNaN(parseFloat(ratio))}>
				Submit
			</button>
		</>
	);
};

export default CreateExampleView;
