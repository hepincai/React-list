import React, { Component } from "react";
import PubSub from "pubsub-js";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

export default class MySider extends Component {
	static propTypes = {
		isShow: propTypes.bool.isRequired, // 是否显示侧边栏
		currentPage: propTypes.number, // 当前页数
	};
	state = {
		currentType: parseInt(location.pathname.split("/")[2]) || 1, // 当前音乐类型
		optionInfos: [
			// 音乐类型数组
			{
				path: "/song/1/",
				type: 1,
				page: 1,
			},
			{
				path: "/song/2/",
				type: 2,
				page: 1,
			},
		],
	};
	// 侧边栏类型选切换
	typeSelect = (currentType) => {
		if (this.state.currentType != currentType) {
			this.setState({ currentType });
			const index = currentType - 1;
			const { optionInfos } = this.state;
			// 侧边栏切换后发送保存的页面
			PubSub.publish("typeChange", optionInfos[index].page);
		}
	};
	pageChange = (page) => {
		const index = this.state.currentType - 1;
		const optionInfos = this.state.optionInfos;
		optionInfos[index].page = page;
		this.setState({ optionInfos });
	};
	componentWillMount() {
		// 是否显示侧边栏
		if (location.pathname.indexOf("song") == -1) this.setState({ isShowLeftBar: false });
	}
	render() {
		const { optionInfos } = this.state;
		return (
			<Sider
				className="site-layout-background"
				width={200}
				style={{ display: this.props.isShow ? "block" : "none" }}
			>
				<Menu
					mode="inline"
					defaultSelectedKeys={this.state.currentType.toString()}
					style={{ height: "100%" }}
				>
					{optionInfos.map((item) => (
						<Menu.Item
							key={item.type}
							onClick={() => {
								this.typeSelect(item.type);
							}}
						>
							<Link to={item.path + item.page}>类型{item.type}</Link>
						</Menu.Item>
					))}
				</Menu>
			</Sider>
		);
	}
}
