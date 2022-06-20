<template>
  <div v-if="!user" class="loader">Loading...</div>
  <section v-else class="home-page">
    <h2 class="welcome-title">Welcome {{ user.name }}!</h2>
    <div class="user-coin-info">
      <span v-if="btcRate" class="btc-rat"> (₿) BTC: {{ btcRate }} </span>
      <br />
      <span class="btc-rat"> (💰) Coins: {{ user.coins }} </span>
    </div>
  </section>
</template>

<script>
import userService from '../services/userService'
import bitcoinService from '../services/bitcoinService'
export default {
  data() {
    return {
      user: null,
      btcRate: null,
    }
  },
  async created() {
    this.user = userService.getUser()
    this.btcRate = await bitcoinService.getRate(this.user.coins)
  },
}
</script>
