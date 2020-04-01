import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const ReactRouter: React.FC = ({ children }) => {
	return <Router>{children}</Router>;
};

export default ReactRouter;
