<script setup lang="ts">
import { parseDocument } from '@xieyuheng/x-markdown'
import { ref, watchEffect } from 'vue'
import Lang from '../../components/lang/Lang.vue'

const props = defineProps<{
  text?: string
}>()

const iframeLoaded = ref(false)
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
  <div class="relative flex h-full w-full">
    <div
      v-if="!iframeLoaded"
      class="absolute left-0 top-0 h-full w-full bg-white p-3 text-stone-500 dark:bg-black dark:text-stone-400"
    >
      <Lang>
        <template #zh>iframe 加载中。。。</template>
        <template #en>Loading iframe...</template>
      </Lang>
    </div>
    <iframe
      class="h-full w-full"
      ref="iframeElement"
      src="https://readonly.link/embedded-article"
      @load="iframeLoaded = true"
    ></iframe>
  </div>
</template>
