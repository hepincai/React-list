import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import MainContent from "components/MainContent";
import styles from "css/MainLayout.scss";
const { Header, Content, Footer } = Layout;

export default class MainLayout extends React.Component {
	render() {
		const vDOM = (
			<Layout style={{ height: "100vh" }}>
				<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={location.pathname.split("/")[1] || "song"}
					>
						<Menu.Item key="song">
							<Link to="song">Song</Link>
						</Menu.Item>
						<Menu.Item key="about">
							<Link to="about">About</Link>
						</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
				<Content className={["site-layout", styles.content].join(" ")} style={{ marginTop: 64 }}>
					<div className="site-layout-background" style={{ display: "flex" }}>
						<MainContent />
					</div>
				</Content>
				{/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
			</Layout>
		);
		return vDOM;
	}
}
