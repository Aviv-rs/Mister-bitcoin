<template>
  <section className="contact-list">
    <ContactPreview
      v-for="contact in contacts"
      :key="contact._id"
      :contact="contact"
    />
  </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'
export default {
  emits: ['contactRemoved'],
  props: {
    contacts: {
      required: true,
      type: Array,
    },
  },
  components: {
    ContactPreview,
  },
}
</script>

<style></style>
