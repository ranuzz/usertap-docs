## Setup

```sh
npx @docusaurus/init@latest init pub-docs classic

cd pub-docs

npm i docusaurus-lunr-search  --save

npm install

npm run swizzle docusaurus-lunr-search SearchBar -- --danger

```

## Edit docusaurus.config.js

```js
module.exports = {
  // ...
    plugins: [
        [require.resolve('docusaurus-lunr-search'),
            {
                indexBaseUrl: true
            }
        ]
    ],
}
```

## build and index

```sh
npm run build
```

## test

```sh
npx http-server ./build

```