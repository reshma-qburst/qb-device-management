// Helper: root() is defined at the bottom
var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;
var isProd = ENV === 'build';

module.exports = function makeWebpackConfig() {

    var config = {};

    config.entry = {
        'app': './src/main.ts' // our angular app
    };

    /**
     * Output
     */
    config.output = isTest ? {} : {
        path: root('dist'),
        filename: 'js/app.bundle.js'
    };

    config.resolve = {
        // only discover files that have those extensions
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    };

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        rules: [
            // Support for .ts files.
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', '@angularclass/hmr-loader'],
                exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
            }, {
                test: /\.css$/,
                exclude: root('src', 'app'),
                loader: isTest ? 'null-loader' : ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader'] })
            },
            { test: /\.css$/, include: root('src', 'app'), loader: 'raw-loader!postcss-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader?limit=100000' }
        ]
    };

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [
        // Workaround needed for angular 2 angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src') // location of your src
        )
    ];

    config.plugins.push(
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        })
    );

    config.plugins.push(
        new ExtractTextPlugin({
            filename: 'node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css'
        })
    );


    config.plugins.push(
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    );



    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    config.devServer = {
        contentBase: './src',
        historyApiFallback: true,
        quiet: true,
        stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
    };

    return config;
}();

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}
