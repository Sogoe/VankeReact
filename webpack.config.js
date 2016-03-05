var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isDevelopment = process.env.NODE_ENV !== "prod";
function makeEntry(array) {
    if(isDevelopment)
      array.unshift("webpack-dev-server/client?http://192.168.1.104:3000", "webpack/hot/only-dev-server");
    return array;
}

module.exports = {
    entry: {
        register: makeEntry(['./src/register.js']),
        info: makeEntry(['./src/info.js']),
        pay: makeEntry(['./src/pay.js'])
    },
    output: {
        path: './dist',
        filename: './js/[name].bundle.js'
    },
    module: {
        loaders: [
            { test: /\.png$/, loader: 'url?limit=8000&name=images/[name][hash:8].[ext]' },
            { test: /\.css$/, loader: //ExtractTextPlugin.extract("style", "css!autoprefixer")
                'style!css!autoprefixer'
            },
            { test: /\.scss$/, loader: //ExtractTextPlugin.extract("style", "css!autoprefixer!sass")
                'style!css!autoprefixer!sass'
            },
            { test: /\.js$/, exclude: /node_modules/, loaders: isDevelopment ? ['react-hot', 'babel'] : ['babel'] }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        host: '192.168.1.104',
        port: '3000'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', './js/vendor.js'),
        // new ExtractTextPlugin("css/[name].css"),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './public/pages/base.html',
            title: '注册页面',
            chunks: ['vendor', 'register']
        }),
        new HtmlWebpackPlugin({
            filename: 'info.html',
            template: './public/pages/base.html',
            title: '我的会员卡',
            chunks: ['vendor', 'info']
        }),
        new HtmlWebpackPlugin({
            filename: 'pay.html',
            template: './public/pages/base.html',
            title: '支付',
            chunks: ['vendor', 'pay']
        })
    ]
};
