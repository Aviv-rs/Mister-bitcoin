<template>
  <section class="contact-app flex column">
    <h2>Contacts</h2>
    <div class="add-contact-container">
      <button @click="$router.push('/contact/edit')" class="btn-add-contact">
        New contact
      </button>
    </div>
    <ContactFilter @filter="onFilter" />
    <ContactList v-if="contacts" :contacts="contacts" />
  </section>
</template>

<script>
import contactService from '../services/contactService'
import ContactList from '../cmps/ContactList.vue'
import ContactFilter from '../cmps/ContactFilter.vue'
export default {
  data() {
    return {
      contacts: null,
    }
  },
  components: {
    ContactList,
    ContactFilter,
  },
  methods: {
    async onFilter(filterBy) {
      this.contacts = await contactService.getContacts(filterBy)
    },
  },
  async created() {
    this.contacts = await contactService.getContacts()
  },
}
</script>
