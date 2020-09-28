import React, { Component } from "react";
import propTypes from "prop-types";

import Pagination from "components/pagination/pagination";

import styles from "./song.scss";

export default class Song extends Component {
	static propTypes = {
		// type: propTypes.number,
		// page: propTypes.number,
		match: propTypes.object,
	};
	static defaultProps = {
		match: { type: 1, page: 1 },
	};
	state = {
		currentList: [], // 当前歌曲列表
		songListInfos: [
			// 歌曲类型、页数及对应的歌曲列表
			{
				type: 1,
				page: 0,
				list: [],
			},
			{
				type: 2,
				page: 0,
				list: [],
			},
		],
	};

	fetchData = (type, page) => {
		let url = `https://www.mxnzp.com/api/music/order/song/list?app_id=qhmlunnqtgmcioii&app_secret=Ukdma0lHYUgySG1SQnFJYXdPZDIyZz09&type=${type}&page=${page}`;
		fetch(url)
			.then(res => {
				return res.json();
			})
			.then(res => {
				// 修改当前歌曲列表为所获取的
				const index = type - 1,
					{ songListInfos } = this.state;
				songListInfos[index].list = res.data.list;
				this.setState({ currentList: res.data.list, songListInfos });
			});
	};

	// 路由变化时
	componentWillReceiveProps(newProps) {
		let { type, page } = newProps.match.params;
		type = parseInt(type);
		page = parseInt(page);
		const index = type - 1;
		const { songListInfos } = this.state;
		// 对比新参数和旧参数
		if (this.state.songListInfos[index].page !== page) {
			songListInfos[index].page = page;
			// 参数不同时则保存当前数据
			this.setState({ songListInfos }, () => {
				this.fetchData(type, page);
			});
			return;
		}
		// 参数相同时则直接设置当前显示歌曲列表为之前存储的
		this.setState({ currentList: songListInfos[index].list });
	}
	// 组件创建时发送请求
	componentDidMount() {
		// const { songListInfos } = this.state;
		// const currentType = location.pathname.split("/")[2] || 1;
		// const currentTPage = location.pathname.split("/")[3] || 1;
		const currentType = this.props.match.type;
		const currentPage = this.props.match.page;
		this.fetchData(currentType, currentPage);
		// console.log("111", this.props.history);
	}
	render() {
		// console.log("123333", this.props, this.state.url);
		// debugger;
		return (
			<div className={styles["song-list-wrapper"]}>
				<div className={styles["song-list"]}>
					{this.state.currentList.map((item, index) => (
						<div className={styles["song-wrapper"]} key={index}>
							<img className={styles["song-cover"]} src={item.pic_big} />
							<br />
							歌名:<span className="title">{item.title}</span>&nbsp;&nbsp; 作者:
							<span className="author">{item.author}</span>
						</div>
					))}
				</div>
				<Pagination />
			</div>
		);
	}
}
