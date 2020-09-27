import React from "react";
import Layout from "components/MainLayout";
import About from "components/About";
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from "react-router-dom";

export default class App extends React.Component {
	render() {
		let id = 1;
		return (
			<Router>
				<Switch>
					<Route path="/about/:id2" component={About} />
					<Route path="/about" component={About} />
				</Switch>
				<Link to={{ pathname: `/about/1` }}>关于</Link>
				<Link to={{ pathname: `/about/2` }}>关于2</Link>
				<Link to={{ pathname: `/about` }}>关于3</Link>
				<Link to={{ pathname: `/about`, query: { id }, search: "id=1" }}>关于4</Link>
			</Router>
		);
	}
}
