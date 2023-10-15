<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  text?: string
}>()

const iframeElement = ref<HTMLIFrameElement | undefined>(undefined)

watchEffect(() => {
  if (!iframeElement.value) return

  const contentWindow = iframeElement.value.contentWindow
  if (!contentWindow) return

  contentWindow.postMessage(
    {
      text: props.text,
    },
    '*',
  )
})
</script>

<template>
  <div>
    <iframe
      ref="iframeElement"
      frameborder="0"
      src="https://readonly.link/embedded-article"
    >
    </iframe>
  </div>
</template>
