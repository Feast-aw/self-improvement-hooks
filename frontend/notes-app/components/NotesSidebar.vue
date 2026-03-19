<template>
  <div class="sidebar">
    <button @click="$emit('new')">New</button>
    <ul>
      <li v-for="note in notes" :key="note.id" @click="$emit('select', note.id)">{{ note.title }}</li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({ notes: { type: Array, default: () => [] } })
</script>
