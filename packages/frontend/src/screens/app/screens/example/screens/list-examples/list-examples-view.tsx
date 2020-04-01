import React from 'react';

interface ListExamplesViewProps {
	examples: {
		id: string;
		name: string;
		ratio: number;
	}[];
}

const ListExamplesView: React.FC<ListExamplesViewProps> = ({ examples }) => {
	return (
		<>
			<h3>List of examples</h3>
			<ul>
				{examples.map(({ id, name, ratio }) => (
					<li key={id}>
						{name}: {ratio}
					</li>
				))}
			</ul>
		</>
	);
};

export default ListExamplesView;
