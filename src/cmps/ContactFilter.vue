<template>
  <div class="contact-filter">
    <input
      placeholder="Search"
      @input="filter"
      v-model="filterBy.term"
      type="text"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterBy: { term: '' },
    }
  },
  methods: {
    filter() {
      this.$emit('filter', this.filterBy)
    },
  },
}
</script>

<style></style>
