<script setup lang="ts">
import { parseDocument } from '@xieyuheng/x-markdown'
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  text?: string
}>()

const iframeElement = ref<HTMLIFrameElement | undefined>(undefined)

window.addEventListener('message', (event) => {
  if (event.data.message === 'mounted') {
    sendDocument()
  }
})

watchEffect(() => {
  sendDocument()
})

function sendDocument() {
  if (!iframeElement.value) return

  if (!props.text) return

  const contentWindow = iframeElement.value.contentWindow
  if (!contentWindow) return

  const document = parseDocument(props.text)
  contentWindow.postMessage({ document }, '*')
}
</script>

<template>
  <iframe ref="iframeElement" src="https://readonly.link/embedded-article">
  </iframe>
</template>
