import axios from 'axios'
import { syncStorageService } from './syncStorageService'

const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

export default bitcoinService

const KEY = 'bitcoin'
const BASE_URL = 'https://api.blockchain.info/'

async function getRate(coins) {
    const bitcoin = syncStorageService.loadFromStorage(KEY) || {}
    if (bitcoin.rate) return bitcoin.rate * +coins
    const { data: rate } = await axios.get(`${BASE_URL}tobtc?currency=USD&value=1`)
    bitcoin.rate = rate
    syncStorageService.saveToStorage(KEY, bitcoin)
    return bitcoin.rate * +coins
}

async function getMarketPrice(timeSpan = '5months') {
    const bitcoin = syncStorageService.loadFromStorage(KEY) || {}
    if (bitcoin.marketPrice) return bitcoin.marketPrice
    const { data: marketPrice } = await axios.get(`${BASE_URL}charts/market-price?timespan=${timeSpan}&format=json&cors=true`)
    bitcoin.marketPrice = marketPrice
    syncStorageService.saveToStorage(KEY, bitcoin)
    return data
}

async function getConfirmedTransactions(timeSpan = '5months') {
    const bitcoin = syncStorageService.loadFromStorage(KEY) || {}
    if (bitcoin.confirmedTransactions) return bitcoin.confirmedTransactions
    const { data: confirmedTransactions } = await axios.get(`${BASE_URL}charts/n-transactions?timespan=${timeSpan}&format=json&cors=true`)
    bitcoin.confirmedTransactions = confirmedTransactions
    syncStorageService.saveToStorage(KEY, bitcoin)
    return data
}