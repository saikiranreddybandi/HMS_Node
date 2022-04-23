const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const styleLoader = [{
        loader: 'style-loader'
    },
    {
        loader: 'css-loader',
        options:{
            modules:true,
            sourceMap:true
        }
    }
]
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    mode:'development',
    
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            
            {
                test: /\.(png|jpg|gif|ico|ttf|woff|woff2|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }

                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
              }

        ],

    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/assets',
                to: 'images'
            }]
        })
    ]
}