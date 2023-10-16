<script setup lang="ts">
import MarkdownPreview from '../../components/markdown-preview/MarkdownPreview.vue'
import { parseDocument } from '@xieyuheng/x-markdown'
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <MarkdownPreview class="h-full w-full p-3" :document="parseDocument(tab.text)" />
</template>
