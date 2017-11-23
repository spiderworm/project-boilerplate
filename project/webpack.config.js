
var path = require("path");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./client/client.js",
	output: {
		filename: "build/client.js"
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './client/index.html', to: './build/index.html'}
		])
	],
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
};
