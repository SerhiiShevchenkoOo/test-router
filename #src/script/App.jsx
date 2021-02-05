import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { useRoutes, A, useRedirect, setBasepath, usePath } from 'hookrouter';
import { Router, BrowserRouter, Link } from 'react-router-dom';
// import PropsTypes from 'prop-types'
usePath('/dist');
const routes = {
	'/': () => <p>users</p>,
	'/about': () => <p>about</p>,
	'/contact': () => <p>contact</p>,
};

function App() {
	const routeResult = useRoutes(routes);
	return (
		<div>
			<A href='/'>Users Page</A>
			<A href='/about'>About Page</A>
			<A href='/contact'>Contacts Page</A>
			{routeResult || <div>ryryryhcdhckddckj</div>}
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
