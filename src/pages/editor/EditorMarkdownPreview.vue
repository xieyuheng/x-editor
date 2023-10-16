<script setup lang="ts">
import { Document, parseDocument } from '@xieyuheng/x-markdown'
import { computed, ref, watch } from 'vue'
import MarkdownPreview from '../../components/markdown-preview/MarkdownPreview.vue'
import { State } from './State'
import { Tab } from './Tab'
import { stateDocumentInlineImages } from './stateDocumentInlineImages'

const props = defineProps<{
  state: State
  tab: Tab
}>()

const document = computed(() => parseDocument(props.tab.text))
const documentEnriched = ref<Document | undefined>()

watch(
  document,
  async () => {
    documentEnriched.value = undefined
    documentEnriched.value = await stateDocumentInlineImages(
      props.state,
      document.value,
    )
  },
  { immediate: true },
)
</script>

<template>
  <MarkdownPreview
    class="h-full w-full p-3"
    :document="documentEnriched || document"
  />
</template>
