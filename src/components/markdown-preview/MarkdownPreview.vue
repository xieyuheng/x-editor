<script setup lang="ts">
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

  const contentWindow = iframeElement.value.contentWindow
  if (!contentWindow) return

  contentWindow.postMessage(
    {
      text: props.text,
    },
    '*',
  )
}
</script>

<template>
  <iframe ref="iframeElement" src="https://readonly.link/embedded-article">
  </iframe>
</template>
