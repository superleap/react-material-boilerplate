const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    //eslint config options. Part of the eslint-loader package
    eslint: {
        configFile: '.eslintrc.json'
    },
    devtool: 'eval',
    //Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/app.js')
    ],
    output: {
        path: buildPath,    //Path of output file
        filename: 'app.js'
    },
    //Config options on how to interpret requires imports
    resolve: {
        extensions: ["", ".js", ".css", ".less"]
        //node_modules: ["web_modules", "node_modules"]  (Default Settings)
    },
    //Server Configuration options
    devServer: {
        contentBase: 'src/www',  //Relative directory for base of server
        historyApiFallback: true,
        devtool: 'eval',
        hot: true,
        inline: true,
        progress: true,
        port: process.env.PORT || 3000,        //Port Number
        host: process.env.HOST  //Change to '0.0.0.0' for external facing server
    },
    module: {
        loaders: [
            {
                //React-hot loader and
                test: /\.js[x]?$/,  //All .js files
                loaders: ['react-hot', 'babel-loader?sourceMap'],
                exclude: [nodeModulesPath]
            },
            {
                // Extract less files
                test: /\.less$/,
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader?sourceMap")
                loaders: ['style-loader', 'css-loader?sourceMap', 'less-loader?sourceMap']
            }
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin(),

        //Moves files
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.resolve(__dirname, "src")),

        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),

        new NpmInstallPlugin({
            save: true // --save
        })
    ]
};

module.exports = config;
