<template>
  <form @submit.prevent="transferCoins" class="transfer-fund">
    <h3 class="transfer-title">Transfer coins to {{ contact.name }}</h3>
    <label for="amount">
      Amount:
      <input min="1" :max="maxCoins" required type="number" v-model="amount" />
    </label>
    <button class="btn-transfer-coins">Transfer</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      amount: 0,
    }
  },
  props: {
    contact: {
      type: Object,
      required: true,
    },
    maxCoins: {
      type: Number,
      required: true,
    },
  },
  methods: {
    transferCoins() {
      this.$emit('transferCoins', this.amount)
    },
  },
}
</script>
