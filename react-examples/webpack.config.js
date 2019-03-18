const path = require('path');

module.exports = {
    entry: {
        '1': './react-web/1.jsx',
        '2': './react-web/2.jsx',
        '3': './react-web/3.jsx',
        '4': './react-web/4.jsx',
        'game': './react-game/game.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['transform-loader?brfs', 'babel-loader'],
            exclude: /node_modules/
        }
        ]
    },
    plugins: []
}