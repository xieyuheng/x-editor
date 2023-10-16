<script setup lang="ts">
import { parseDocument } from '@xieyuheng/x-markdown'
import { ref, watchEffect } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import { useGlobalTheme } from '../../models/theme'

const props = defineProps<{
  text?: string
}>()

const theme = useGlobalTheme()
const iframeLoaded = ref(false)
const iframeElement = ref<HTMLIFrameElement | undefined>(undefined)

window.addEventListener('message', (event) => {
  if (event.data.message === 'mounted') {
    sendDocument()
    send({ theme: theme.name })
  }
})

watchEffect(() => sendDocument())
watchEffect(() => send({ theme: theme.name }))

function sendDocument() {
  if (!props.text) return

  send({ document: parseDocument(props.text) })
}

function send(data: any) {
  if (!iframeElement.value) return

  const contentWindow = iframeElement.value.contentWindow
  if (!contentWindow) return

  contentWindow.postMessage(data, '*')
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
