import webpack from 'webpack';

import { execSync } from 'child_process';

const GIT_VERSION = execSync('git describe --tags --dirty').toString().trim();

const CONFIG: webpack.Configuration = {
    plugins: [
        new webpack.DefinePlugin({
            CHEMISCOPE_GIT_VERSION: `"${GIT_VERSION}"`,
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            { test: /\.ts$/, use: ['ts-loader', './utils/webpack-assert-message.js'] },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // { test: /\.html\.in$/, loader: 'html-loader', options: { minimize: true } },
            { test: /\.html\.in$/, loader: 'raw-loader' },
            { test: /\.svg$/, loader: 'raw-loader' },
            // this is required by plotly, since we are building our own bundle
            { test: /\.js$/, use: ['ify-loader'] },
        ],
    },
};

export = CONFIG;
