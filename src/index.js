const rp = require('request-promise')

function getTrades (apiKey, since) {
  const baseUrl = 'https://bitcoinapi.de/v1'
  const query = since ? `trades.json?${since}` : 'trades.json'
  const url = `${baseUrl}/${apiKey}/${query}`

  const options = {
    uri: url,
    method: 'GET',
    json: true
  }

  return rp(options)
}

function getOrderbook (apiKey) {
  const baseUrl = 'https://bitcoinapi.de/v1'
  const query = 'orderbook.json'
  const url = `${baseUrl}/${apiKey}/${query}`

  const options = {
    uri: url,
    method: 'GET',
    json: true
  }

  return rp(options)
}

function getRate (apiKey) {
  const baseUrl = 'https://bitcoinapi.de/v1'
  const query = 'rate.json'
  const url = `${baseUrl}/${apiKey}/${query}`

  const options = {
    uri: url,
    method: 'GET',
    json: true
  }

  return rp(options)
}

// api
module.exports.getTrades = getTrades
module.exports.getOrderbook = getOrderbook
module.exports.getRate = getRate
