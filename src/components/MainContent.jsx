import React from "react";
import { Layout, Menu } from "antd";
import MainList from "components/MainList";
import styles from "css/MainContent.scss";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class MainContent extends React.Component {
	render() {
		const vDOM = (
			<Content>
				<Layout className="site-layout-background">
					{/* <Sider className={["site-layout-background", styles.sider].join(" ")} width={200}>
						<Menu
							mode="inline"
							defaultSelectedKeys={"type1"}
							defaultOpenKeys={["sub1"]}
							style={{ height: "100%" }}
						>
							<Menu.Item key="type1">
								<Link to="/song/type1">种类一</Link>
							</Menu.Item>
							<Menu.Item key="type2">
								<Link to="/song/type2">种类二</Link>
							</Menu.Item>
						</Menu>
					</Sider> */}
					<Content style={{ minHeight: 280 }}>
						<MainList type={1} page={1} />
					</Content>
				</Layout>
			</Content>
		);
		return (
			<Layout>
				<Header className="header">
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
						<Menu.Item key="1">nav 1</Menu.Item>
						<Menu.Item key="2">nav 2</Menu.Item>
						<Menu.Item key="3">nav 3</Menu.Item>
					</Menu>
				</Header>
				<Content style={{ padding: "0 50px" }}>
					<Layout className="site-layout-background" style={{ padding: "24px 0" }}>
						<Sider className="site-layout-background" width={200}>
							<Menu
								mode="inline"
								defaultSelectedKeys={["1"]}
								defaultOpenKeys={["sub1"]}
								style={{ height: "100%" }}
							>
								<Menu.Item key="9">option9</Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</Menu>
						</Sider>
						<Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
					</Layout>
				</Content>
				{/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
			</Layout>
		);
	}
}
