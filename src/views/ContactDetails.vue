<template>
  <section
    v-if="contact"
    class="contact-details flex align-center column main-layout"
  >
    <div class="avatar-container">
      <img className="avatar" src="../assets/imgs/contact-default.png" alt="" />
    </div>
    <div v-for="(value, field) in contact" :key="field" class="info-container">
      <span v-if="field !== '_id'">
        {{ `${field}: ${value}` }}
        <br />
      </span>
    </div>
    <RouterLink class="styled-link" to="/contact"> Back 🔙 </RouterLink>
    <RouterLink class="styled-link" :to="`/contact/edit/${contact._id}`">
      Edit 📝
    </RouterLink>
    <TransferFund
      @transferCoins="transferCoins"
      :contact="contact"
      :maxCoins="$store.getters.user.coins"
    />
    <div class="move-history-container">
      <h3 class="move-history-title">Moves history</h3>
      <MoveList :moves="contactMoves || []" />
    </div>
  </section>
</template>

<script>
import contactService from '../services/contactService'
import MoveList from '../cmps/MoveList.vue'
import TransferFund from '../cmps/TransferFund.vue'
import userService from '../services/userService'
export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const contactId = this.$route.params.contactId
    this.contact = await contactService.getContactById(contactId)
  },
  methods: {
    transferCoins(amount) {
      userService.addMove(this.contact, amount)
      this.$store.commit({
        type: 'setUser',
        user: userService.getLoggedInUser(),
      })
    },
  },
  computed: {
    contactMoves() {
      const { user } = this.$store.getters
      return user.moves.filter(move => move.toId === this.contact._id)
    },
  },
  components: {
    MoveList,
    TransferFund,
  },
}
</script>
