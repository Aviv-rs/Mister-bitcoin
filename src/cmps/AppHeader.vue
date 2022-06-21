<template>
  <header class="app-header">
    <nav class="links flex">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/contact">Contacts</RouterLink>
      <RouterLink to="/statistic">Statistics</RouterLink>
      <RouterLink v-if="!user" to="/signup">Sign up</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
