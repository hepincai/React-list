import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "views/layout";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Layout></Layout>
			</Router>
		);
	}
}
