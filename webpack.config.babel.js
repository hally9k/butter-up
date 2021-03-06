import HtmlWebpackPlugin from 'html-webpack-plugin'
import paths from './config/path'
import webpack from 'webpack'
import { port, env } from './config'

export default {
    devtool: 'cheap-module-eval-source-map',
    entry: paths.appIndexJs,
    output: {
        path: paths.appBuild,
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.appHtmlTemplate,
        }),
        new webpack.DefinePlugin({
            NODE_ENV: env,
            PORT: port,
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                // options: {
                //     config: {
                //         path: `${paths.appRoot}/postcss.config.js`
                //     }
                // }
            },
            {
                test: /\.(jpe?g|png|gif|svg|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.(graphql|gql|xml)$/,
                exclude: /node_modules/,
                loader: 'raw-loader',
            },
        ],
    },
    resolve: {
        modules: [paths.appSrc, 'node_modules'],
        extensions: ['.js', '.jsx', '.css', '.graphql', '.xml'],
    },
    devServer: {
        host: '0.0.0.0',
        port,
        compress: true,
        contentBase: paths.appPublic,
        historyApiFallback: true,
        hot: false,
        https: false,
        noInfo: true,
        publicPath: '/',
        watchOptions: {
            ignored: /node_modules/,
        },
    },
}
