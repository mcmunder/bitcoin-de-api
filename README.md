# bitcoin-de-api

A (very) simple javascript wrapper for the (very) simple [bitcoin.de](https://www.bitcoin.de/de/api/marketplace) api.

## Install
`npm install --save bitcoin-de-api`

## Run tests
`npm run test`  

Test runs will have different outputs depending on whether or not an `API_KEY` was set in `.env` (see 'Usage' below).

## Usage
Create a .env file at the root of your project and add your API_KEY:

```bash
API_KEY=your_api_key_goes_here_without_quotes
```

Add .env to your .gitignore file! It's a secret, right?! See [dotenv](https://www.npmjs.com/package/dotenv) if you are not sure what I am talking about.

```js
const api = require('bitcoin-de-api')
const dotenv = require('dotenv')

dotenv.config() // parses .env and sets environnment variables
const apiKey = process.env.API_KEY

api.getTrades(apiKey, since) // since parameter is optional
  .then(data => {
    // do stuff with the data here
    console.log(data)
  })
  .catch( err => {
    console.error(err)
  })
```

## API

| method           | returns       |
| :--------------: | :-----------: |
| `getTrades()`    | promise       |
| `getOrderBook()` | promise       |
| `getRates()`     | promise       |

## Copyright and license

Copyright 2016 Matthias Munder.  
Licensed under the [MIT license](./LICENSE).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
