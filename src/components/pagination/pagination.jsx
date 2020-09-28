import React, { Component } from "react";
import PubSub from "pubsub-js";

import { Pagination } from "antd";

import styles from "./pagination.scss";

export default class MyPagination extends Component {
	state = {
		currentPage: parseInt(location.pathname.split("/")[3]) || 1,
	};
	// 点击分页时触发函数获取页面
	pageChange = (page) => {
		PubSub.publish("pageChange", page);
		this.setState({ currentPage: page });
	};
	componentDidMount() {
		// 获取音乐类型转换后的类型所保存的页面
		PubSub.subscribe("typeChange", (name, page) => {
			this.setState({ currentPage: page });
		});
	}
	render() {
		return (
			<Pagination
				className={styles["pagination"]}
				current={this.state.currentPage}
				size="default "
				total={5000}
				showSizeChanger
				showQuickJumper
				onChange={(page) => {
					this.pageChange(page);
				}}
			/>
		);
	}
}
