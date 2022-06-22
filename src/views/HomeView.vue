<template>
  <div v-if="!user" class="loader">Loading...</div>
  <section v-else class="home-page main-layout">
    <h2 class="welcome-title">Welcome back, {{ user.username }}</h2>
    <div class="user-balance-info flex column">
      <h4 class="current-balance-text">Current balance</h4>
      <span class="coin-amount"> (💰) Coins: {{ user.coins }} </span>
      <span v-if="btcRate" class="btc-rate"> (₿) BTC: {{ btcRate }} </span>
      <h3 class="recent-moves-text">Your recent moves 🔁</h3>
      <MoveList :moves="recentMoves" />
    </div>
  </section>
</template>

<script>
import MoveList from '../cmps/MoveList.vue'
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
  components: {
    MoveList,
  },
  computed: {
    recentMoves() {
      const { moves } = this.user
      const movesAmount = moves.length > 3 ? 3 : moves.length
      return moves.slice(-movesAmount)
    },
  },
}
</script>
