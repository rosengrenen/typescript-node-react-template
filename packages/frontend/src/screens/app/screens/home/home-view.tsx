import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
	return (
		<ul>
			<li>
				<Link to="/examples/create">Create an example</Link>
			</li>
			<li>
				<Link to="/examples/list">List examples</Link>
			</li>
		</ul>
	);
};

export default HomeView;
