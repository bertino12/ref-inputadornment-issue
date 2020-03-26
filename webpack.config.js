const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.mjs', '.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            hash: true,
        }),
    ],
};
