import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import ListExamplesView from './list-examples-view';

interface GetExamplesResponse {
	examples: {
		id: string;
		name: string;
		ratio: number;
	}[];
}

interface GetExamplesInput {
	from: Date;
	to?: Date;
}

const GET_EXAMPLES = gql`
	query GetExamples($from: DateTime!, $to: DateTime) {
		examples(from: $from, to: $to) {
			id
			name
			ratio
		}
	}
`;

const FROM_DATE = new Date(Date.now() - 1000 * 60 * 60 * 24 * 7); // Last 7 weeks

const ListExamplesData: React.FC = () => {
	const { data, error, loading } = useQuery<
		GetExamplesResponse,
		GetExamplesInput
	>(GET_EXAMPLES, {
		variables: {
			from: FROM_DATE,
		},
	});

	if (loading) {
		return <>Loading...</>;
	}

	if (error) {
		return <>Error...</>;
	}

	if (data) {
		return <ListExamplesView examples={data.examples} />;
	}

	return null;
};

export default ListExamplesData;
