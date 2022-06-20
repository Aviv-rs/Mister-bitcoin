<template>
  <AppHeader />
  <main class="route main-layout">
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
}
</script>
