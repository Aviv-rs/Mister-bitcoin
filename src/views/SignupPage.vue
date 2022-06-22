<template>
  <section class="signup-page main-layout">
    <h1>Welcome to Mister Bitcoin</h1>
    <h3>Sign up</h3>
    <form @submit.prevent="signup">
      <input required placeholder="Username" v-model="username" type="text" />
      <button class="btn-signup">Sign up</button>
    </form>
  </section>
</template>

<script>
import userService from '../services/userService'
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    signup() {
      const user = userService.signup(this.username)
      this.$store.commit({ type: 'setUser', user })
      this.$router.push('/')
    },
  },
}
</script>
