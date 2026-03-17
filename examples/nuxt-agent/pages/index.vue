<template>
  <div style="max-width:800px;margin:2rem auto;font-family:system-ui">
    <h1>Nuxt3 Agent Example</h1>
    <textarea v-model="q" rows="4" style="width:100%"></textarea>
    <button @click="ask" :disabled="loading">Ask</button>
    <div v-if="answer" style="white-space:pre-wrap;margin-top:1rem">{{ answer }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const q = ref('')
const answer = ref('')
const loading = ref(false)
async function ask() {
  loading.value = true
  answer.value = ''
  const res = await fetch('/api/agent', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ question: q.value }) })
  const json = await res.json()
  if (json.answer) answer.value = json.answer
  else answer.value = JSON.stringify(json)
  loading.value = false
}
</script>
