import React from "react";

export default class About extends React.Component {
	componentDidMount() {
		console.log("123", this.props);
	}
	componentWillReceiveProps() {
		console.log("222");
	}
	render() {
		return <h1>About</h1>;
	}
}
