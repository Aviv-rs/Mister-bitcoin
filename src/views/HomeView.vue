<template>
  <div v-if="!user" class="loader">Loading...</div>
  <section v-else class="home-page">
    <h2 class="welcome-title">Welcome {{ user.username }}!</h2>
    <div class="user-coin-info">
      <span class="btc-rat"> (💰) Coins: {{ user.coins }} </span>
      <br />
      <span v-if="btcRate" class="btc-rat"> (₿) BTC: {{ btcRate }} </span>
    </div>
  </section>
</template>

<script>
import bitcoinService from '../services/bitcoinService'

export default {
  data() {
    return {
      user: null,
      btcRate: null,
    }
  },
  async created() {
    const { user } = this.$store.getters
    if (!user) {
      this.$router.push('/signup')
      return
    }
    this.user = user
    this.btcRate = await bitcoinService.getRate(this.user.coins)
  },
}
</script>
