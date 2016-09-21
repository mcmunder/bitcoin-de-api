const test = require('tape')
const api = require('../src/index')
const dotenv = require('dotenv')

dotenv.config()
const apiKey = process.env.API_KEY

/*
Testing only one function to not exhaust api call limit
*/
test('getTrades() test', should => {
  should.equal(typeof api.getTrades(apiKey).then, 'function', 'getTrades()(apiKey) should have a .then method i.e. most likely be a promise')

  api.getTrades()
    .catch((err) => {
      should.equal(err.message, '403 - "api key not found"', 'Calling getTrades() without passing an api key should throw a 403')
    })

  api.getTrades(apiKey)
    .then(data => {
      const keys = Object.keys(data[0])
      should.deepEqual(keys, ['date', 'price', 'amount', 'tid'], `Response body should be an array of objects with keys ['date', 'price', 'amount', 'tid']`)
    })
    .catch((err) => {
      should.equal(err.message, '403 - "api key not found"', 'Calling getTrades() with an undefined api key should throw a 403.')
    })

  should.end()
})
