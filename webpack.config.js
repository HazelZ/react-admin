const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: 'js/bundle.js'
	},
	module: {
		rules: [
			// react语法处理
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			// css文件的处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			// sass文件的处理
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			// 图片的处理
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'resource/[name].[ext]'
					}
				}]
			},
			// 字体图标的配置
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8192,
						name: 'resource/[name].[ext]'
					}
				}]
			}

		]
	},
	// 引入文件的时候可以省略文件后缀
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			page: path.resolve(__dirname, 'src/page'),
			component: path.resolve(__dirname, 'src/component'),
			utils: path.resolve(__dirname, 'src/utils'),
			service: path.resolve(__dirname, 'src/service'),
		}
	},
	plugins: [
		// 处理html文件和favicon
		new HtmlWebpackPlugin({
			template: './src/index.html',
			favicon:'./favicon.ico'
		}),
		// 独立css文件
		new ExtractTextPlugin('css/[name].css'),
		// 提出公共模块(自动将出现次数多的重复部分合并到一个文件里)
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		})
	],
	devServer: {
		port: 8088,
		// 访问路径时如果404，返回一个指定页面，也可以在访问网站根目录时返回这个页面
		historyApiFallback: {
			index: '/dist/index.html'
		},
		proxy: {
			'/manage': {
				target: 'http://admintest.happymmall.com',
				changeOrigin: true
			}
		}
	}
};