<template>
  <section class="contact-edit main-layout flex justify-center">
    <form v-if="contact" @submit.prevent="save" class="contact-edit-form">
      <h1 v-if="title">{{ title }}</h1>
      <div v-for="(value, field) in contact" :key="field" class="form-group">
        <label v-if="field !== '_id'" :for="field">
          {{ field + ': ' }}
          <input
            @input="handleChange"
            :type="field === 'email' ? field : 'text'"
            :name="field"
            :value="value"
            autocomplete="no"
            required
          />
        </label>
      </div>
      <button>Save</button>
    </form>
  </section>
  <RouterLink :to="`/contact/${contact._id || ''}`"> Back </RouterLink>
</template>

<script>
import contactService from '../services/contactService'
export default {
  data() {
    return {
      contact: null,
    }
  },
  methods: {
    async save() {
      await contactService.saveContact(this.contact)
      this.$router.push(`/contact/${this.contact._id}`)
    },
    handleChange({ target: { value, name } }) {
      this.contact[name] = value
    },
  },
  async created() {
    const { contactId } = this.$route.params
    if (contactId) {
      this.contact = await contactService.getContactById(contactId)
      this.title = 'Edit contact'
    } else {
      this.contact = contactService.getEmptyContact()
      this.title = 'New contact'
    }
  },
}
</script>
