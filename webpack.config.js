const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.html`,
            filename: 'index.html'
        })
    ],

    module: {
        rules: [     
            {
                test: /\.(png|svg|jpg|wav|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        }
                    }
                ]
            },       
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                  	minimize: false,
                  	attrs: ['img:src', 'link:href', 'audio:src'],
                },
            },
        ]
	},
	
    mode: 'development',
    devtool: 'source-map'
}