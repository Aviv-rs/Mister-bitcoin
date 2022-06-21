<template>
  <ul class="move-list clean-list">
    <li v-for="(move, idx) in moves" class="move" :key="idx">
      <span v-for="(value, field) in move" class="move-info" :key="field">
        <template v-if="field !== 'toId'">
          {{
            `${field}: ${
              field === 'at' ? getFormattedTransferTime(value) : value
            }`
          }}
          <br />
        </template>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    moves: {
      type: Array,
      default: [],
    },
  },
  methods: {
    getFormattedTransferTime(time) {
      return Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
      }).format(new Date(time))
    },
  },
}
</script>
