<template>
  <div class="editor">
    <input v-model="title" placeholder="Title" />
    <div class="editor-main">
      <textarea v-model="content" rows="20"></textarea>
      <NotePreview :content="content" />
    </div>
    <div>
      <input type="file" @change="onFile" />
      <button @click="save">Save</button>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import NotePreview from './NotePreview.vue'
const props = defineProps({ noteId: String })
const emit = defineEmits(['saved'])
const title = ref('')
const content = ref('')
const onFile = async (e) => {
  const file = e.target.files[0]
  if (!file) return
  const form = new FormData()
  form.append('image', file)
  const res = await $fetch('/api/upload', { method: 'POST', body: form })
  const url = res.url
  content.value += `\n![](${url})\n`
}
const save = async () => {
  await $fetch('/api/notes', { method: 'POST', body: { id: props.noteId || Date.now().toString(), title: title.value, content: content.value } })
  emit('saved')
}
</script>
<style>
.editor-main{display:flex;gap:16px}
textarea{width:50%}
.preview{width:50%;border-left:1px solid #ddd;padding-left:12px}
</style>
