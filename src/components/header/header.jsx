import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import PubSub from "pubsub-js";

// import Home from "./childcomps/home";
// import Song from "./childcomps/song";
// import About from "./childcomps/about";

// import styles from "./header.scss";

import { Layout, Menu } from "antd";

const { Header } = Layout;

export default class MyHeader extends React.Component {
	tabChange = pathname => {
		PubSub.publish("tabChange", pathname);
	};
	render() {
		console.log(222, this.props);
		const menuItem = [
			{ path: "/home", name: "Home" },
			{ path: "/song/1/1", name: "Song" },
			{ path: "/about", name: "About" },
		];
		return (
			<Header className={["header", this.props.className].join(" ")}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={location.pathname.split("/")[1]}
					id="headerMenu"
				>
					{menuItem.map(item => (
						<Menu.Item
							key={item.path.split("/")[1]}
							onClick={() => {
								this.tabChange(item.path.split("/")[1]);
							}}
						>
							<Link to={item.path}>{item.name}</Link>
						</Menu.Item>
					))}
					{/* <Menu.Item key="home">
						<Link to="/home">Home</Link>
					</Menu.Item>
					<Menu.Item key="song">
						<Link to="/song">Song</Link>
					</Menu.Item>
					<Menu.Item key="about">
						<Link to="/about">About</Link>
					</Menu.Item> */}
				</Menu>
			</Header>
		);
	}
}
