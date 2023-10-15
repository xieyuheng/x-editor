<script setup lang="ts">
import MarkdownPreview from '../../components/markdown-preview/MarkdownPreview.vue'
import { State } from './State'
import { Tab } from './Tab'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <MarkdownPreview class="h-full w-full p-3" :text="tab.text" />
</template>
