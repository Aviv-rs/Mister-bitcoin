<template>
  <RouterLink :to="`/contact/${contact._id}`">
    <article className="contact-preview flex align-center">
      <img className="avatar" src="../assets/imgs/contact-default.png" alt="" />
      <h4 class="contact-name">{{ contact.name }}</h4>
    </article>
  </RouterLink>
</template>

<script>
export default {
  props: {
    contact: {
      required: true,
      type: Object,
    },
  },
  emits: ['contactSelected'],
}
</script>
