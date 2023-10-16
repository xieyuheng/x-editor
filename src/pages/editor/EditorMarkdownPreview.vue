<script setup lang="ts">
import { parseDocument } from '@xieyuheng/x-markdown'
import { computed } from 'vue'
import MarkdownPreview from '../../components/markdown-preview/MarkdownPreview.vue'
import { State } from './State'
import { Tab } from './Tab'

const props = defineProps<{
  state: State
  tab: Tab
}>()

const document = computed(() => parseDocument(props.tab.text))

// The following is an async function.
// stateDocumentInlineImages(props.state, document)
</script>

<template>
  <MarkdownPreview class="h-full w-full p-3" :document="document" />
</template>
