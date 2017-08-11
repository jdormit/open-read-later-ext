const path = require('path');

module.exports = {
    entry: './src/ts/popus.ts',
    output: {
        filename: 'popup.js',
        path: path.join(__dirname, 'build')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
}
