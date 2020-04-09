import React, { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import CreateExampleView from './create-example-view';

interface CreateExampleResponse {
	createExample: {
		id: string;
	};
}

interface CreateExampleInput {
	input: {
		name: string;
		ratio: number;
	};
}

const CREATE_EXAMPLE = gql`
	mutation CreateExample($input: CreateExampleInput!) {
		createExample(input: $input) {
			id
		}
	}
`;

const CreateExampleState: React.FC = () => {
	const [name, setName] = useState('');
	const [ratio, setRatio] = useState('');

	const [createExample, { client }] = useMutation<
		CreateExampleResponse,
		CreateExampleInput
	>(CREATE_EXAMPLE);

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handleRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRatio(event.target.value);
	};

	const handleSubmit = () => {
		const parsedRatio = parseFloat(ratio);
		if (!isNaN(parsedRatio)) {
			createExample({
				variables: {
					input: {
						name,
						ratio: parsedRatio,
					},
				},
			}).then(() => {
				client?.resetStore();
				setName('');
				setRatio('');
			});
		}
	};

	return (
		<CreateExampleView
			handleNameChange={handleNameChange}
			handleRatioChange={handleRatioChange}
			handleSubmit={handleSubmit}
			name={name}
			ratio={ratio}
		/>
	);
};

export default CreateExampleState;
