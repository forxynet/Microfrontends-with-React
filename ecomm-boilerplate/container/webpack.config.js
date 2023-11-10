const HtmlWebPackPlugin = require('html-webpack-plugin');

module.export = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    Plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
    ],
};