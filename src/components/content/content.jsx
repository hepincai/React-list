import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import PubSub from "pubsub-js";
import { withRouter } from "react-router-dom";

import Home from "./childcomps/home";
import Song from "./childcomps/song/song";
import About from "./childcomps/about";
import Sider from "./childcomps/sider/sider";

import { Layout } from "antd";

const { Content } = Layout;

export default withRouter(
	class MyContent extends React.Component {
		state = {
			isShowLeftBar: location.pathname.split("/")[1] == "song", // 是否显示侧边栏
		};

		componentDidMount() {
			// 标签变化时触发
			PubSub.subscribe("tabChange", (name, msg) => {
				// 标签切换时判断是否为song页来决定是否显示侧边栏
				if (msg === "song") this.setState({ isShowLeftBar: true });
				else this.setState({ isShowLeftBar: false });
			});
			// 页面变化时触发
			PubSub.subscribe("pageChange", (name, page) => {
				const currentType = this.refs.sider.state.currentType;
				// 给侧边栏发送新页数
				this.refs.sider.pageChange(page);
				// 页面变化时改变url
				this.props.history.push(`/song/${currentType}/${page}`);
			});
		}
		render() {
			return (
				<Content style={{ display: "flex" }}>
					<Sider isShow={this.state.isShowLeftBar} ref="sider" />
					<Content style={{ minHeight: 280 }}>
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/song/:type/:page" component={Song} ref="song" />
							<Route path="/about" component={About} />
							<Redirect from="/" to="/home" />
						</Switch>
					</Content>
				</Content>
			);
		}
	}
);
