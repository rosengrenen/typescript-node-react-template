import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <div>App</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));

if ((module as any).hot) {
	(module as any).hot.accept();
}
