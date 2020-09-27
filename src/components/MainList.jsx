import React from "react";
import styles from "css/MainList.scss";

export default class MainList extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentWillMount() {
		// console.log(this.props);
		let url = `https://www.mxnzp.com/api/music/order/song/list?app_id=qhmlunnqtgmcioii&app_secret=Ukdma0lHYUgySG1SQnFJYXdPZDIyZz09&type=${this.props.type}&page=${this.props.page}`;
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({ list: res.data.list });
			});
	}
	render() {
		// console.log(this.state.list);
		if (this.state.list) {
			// console.log(this.state.list);
			const vDOM = (
				<div className={styles["item-wrapper"]}>
					{this.state.list.map((item) => (
						<div className={styles.item} key={item.song_id}>
							<img className={styles.img} src={item.pic_big} />
							<div className={styles["text-detail"]}>
								<div className={styles["text-detail1"]}>
									{item.country}
									{item.title}
								</div>
								<div className={styles["text-detail2"]}>
									{item.publishtime}
									{item.author}
								</div>
							</div>
						</div>
					))}
				</div>
			);
			return vDOM;
		} else return <div>123</div>;
	}
}
