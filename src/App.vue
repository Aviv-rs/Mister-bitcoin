<template>
  <AppHeader v-if="user" />
  <main class="route">
    <RouterView />
  </main>
</template>

<script>
import '@/assets/styles/main.scss'
import AppHeader from '@/cmps/AppHeader.vue'

export default {
  components: {
    AppHeader,
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
  },
}
</script>
