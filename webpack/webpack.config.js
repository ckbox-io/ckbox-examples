const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
    })],
    devServer: {
        compress: true,
        port: 4137,
        open: true,
      },
    mode: 'development',
};