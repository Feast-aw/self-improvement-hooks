<template>
  <n-layout>
    <n-layout-sider>
      <NotesSidebar :notes="notes" @select="select" @new="create" />
    </n-layout-sider>
    <n-layout-content>
      <NoteEditor :noteId="currentId" @saved="loadNotes" />
    </n-layout-content>
  </n-layout>
</template>
<script setup>
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui'
import NotesSidebar from '~/components/NotesSidebar.vue'
import NoteEditor from '~/components/NoteEditor.vue'
import { ref, onMounted } from 'vue'
const notes = ref([])
const currentId = ref(null)
const loadNotes = async () => { notes.value = await $fetch('/api/notes') }
const select = (id) => { currentId.value = id }
const create = async () => { currentId.value = Date.now().toString() }
onMounted(loadNotes)
</script>
