<template>
  <section class="statistics-page main-layout">
    <BarChart
      v-if="marketPriceData"
      :data="chartData('marketPriceData')"
      :labels="dateLabels('marketPriceData')"
      :title="'The average USD market price across major bitcoin exchanges'"
      :chartId="'market-price'"
    />
    <BarChart
      v-if="transactionData"
      :data="chartData('transactionData')"
      :labels="dateLabels('transactionData')"
      :title="'The total number of confirmed transactions per day.'"
      :chartId="'market-price'"
    />
  </section>
</template>

<script>
import BarChart from '../cmps/BarChart.vue'
import bitcoinService from '../services/bitcoinService'

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      marketPriceData: null,
      transactionData: null,
    }
  },
  async created() {
    const marketPriceData = await bitcoinService.getMarketPrice()
    const transactionData = await bitcoinService.getConfirmedTransactions()
    this.marketPriceData = marketPriceData.values
    this.transactionData = transactionData.values
  },
  methods: {
    dateLabels(dataType) {
      const labels = this[dataType].map(data => {
        const { x: timeStamp } = data
        const date = new Date(timeStamp * 1000)
        const label = new Intl.DateTimeFormat('en-US').format(date)
        return label
      })
      return labels
    },
    chartData(dataType) {
      return this[dataType].map(pricePoint => pricePoint.y)
    },
  },
}
</script>
