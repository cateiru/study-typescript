# TypeScript 環境の初期設定

## install

```bash
yarn add -D webpack webpack-cli ts-loader typescript tsc
```

## create tsconfig.json

```bash
yarn tsc --init
```

## create webpack.config.js

```bash
touch webpack.config.js
```

```js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            loader: "ts-loader"
          }
        ]
      },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}
```
