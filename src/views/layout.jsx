import React from "react";

import Header from "components/header/header";
import Content from "components/content/content";
import Footer from "components/footer/footer";

export default class MyLayout extends React.Component {
	render() {
		return (
			<div>
				<Header className="external-class-name" />
				<Content />
				<Footer />
			</div>
		);
	}
}
