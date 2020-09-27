const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname),
		port: 3000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				use: {
					loader: "babel-loader",
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: "[path][name]__[local]--[hash:base64:5]",
							},
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "123",
			template: path.join(__dirname, "/src/index.html"),
		}),
	],
	resolve: {
		extensions: [".js", ".jsx", ".json"],
		alias: {
			"@": path.join(__dirname, "./src"),
			components: path.join(__dirname, "./src/components"),
			css: path.join(__dirname, "./src/assets/css"),
			views: path.join(__dirname, "./src/views"),
		},
	},
};
