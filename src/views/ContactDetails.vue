<template>
  <section v-if="contact" class="contact-details flex align-center column">
    <div class="avatar-container">
      <img className="avatar" src="../assets/imgs/contact-default.png" alt="" />
    </div>
    <div v-for="(value, field) in contact" :key="field" class="info-container">
      <span v-if="field !== '_id'">
        {{ `${field}: ${value}` }}
        <br />
      </span>
    </div>
    <RouterLink to="/contact"> Back </RouterLink>
    <RouterLink :to="`/contact/edit/${contact._id}`"> Edit </RouterLink>
  </section>
</template>

<script>
import contactService from '../services/contactService'
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
}
</script>
