const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = {
    development: 'development',
    test: 'test',
    production: 'production'
};

const BUILD = {
    vendor: 'vendor',
    bayer: 'bayer',
    admin: 'admin'
};

const NODE_ENV = process.env.NODE_ENV || ENV.production;
const NODE_BUILD = process.env.NODE_BUILD;

console.log('BUILD = ', NODE_BUILD);
console.log('NODE_ENV = ', NODE_ENV);

const dependencies = [
    'angular'
];

module.exports = {
    entry: {
        dependencies,
        test: path.resolve(__dirname, 'app/test/test.module'),
        test2: path.resolve(__dirname, 'app/test2/test2.module')
    },

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.js', '.json', '.css', 'html']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'app', 'index.html'),
            hash: true,
            inject: true,
            chunksSortMode: (chunk1, chunk2) => {
                const orders = ['dependencies', 'test', 'test2'];
                const order1 = orders.indexOf(chunk1.names[0]);
                const order2 = orders.indexOf(chunk2.names[0]);
                return order1 - order2;
            }
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // defaults the environment to development if not specified
                NODE_ENV: JSON.stringify(NODE_ENV ||ENV.development)
            }
        }),
        new ExtractTextPlugin('styles.bundler.css'),
    ],
    devServer: {
        port: 8090,
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        historyApiFallback: true,
    },
    watchOptions: {
        aggregateTimeout: 2000, // in ms
        // aggregates multiple changes to a single rebuild
        poll: 2000 // intervall in ms

    },
};