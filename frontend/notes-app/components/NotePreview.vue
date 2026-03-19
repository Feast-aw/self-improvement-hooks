<template>
  <div class="preview">
    <v-md-editor :model-value="content" preview-only></v-md-editor>
  </div>
</template>
<script setup>
import VMdEditor from '@kangc/v-md-editor/lib/preview'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/style/preview.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

const props = defineProps({ content: { type: String, default: '' } })
</script>
