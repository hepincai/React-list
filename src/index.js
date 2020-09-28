import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

// import { Layout, Menu, Breadcrumb } from "antd";
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from "@ant-design/icons";
// const { SubMenu } = Menu;
// const { Header, Content, Footer, Sider } = Layout;

import App from "@/App";

ReactDOM.render(<App />, document.getElementById("app"));
