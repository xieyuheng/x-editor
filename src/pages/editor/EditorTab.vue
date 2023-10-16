<script setup lang="ts">
import EditorTabAudio from './EditorTabAudio.vue'
import EditorTabVideo from './EditorTabVideo.vue'
import EditorTabImage from './EditorTabImage.vue'
import EditorTabMarkdown from './EditorTabMarkdown.vue'
import EditorTabPlaintext from './EditorTabPlaintext.vue'
import { State } from './State'
import { Tab } from './Tab'
import { tabMediaType } from './tabMediaType'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <EditorTabImage
    v-if="tabMediaType(tab).startsWith('image/')"
    :state="state"
    :tab="tab"
  />

  <EditorTabAudio
    v-else-if="tabMediaType(tab).startsWith('audio/')"
    :state="state"
    :tab="tab"
  />

  <EditorTabVideo
    v-else-if="tabMediaType(tab).startsWith('video/')"
    :state="state"
    :tab="tab"
  />

  

  <EditorTabMarkdown
    v-else-if="tabMediaType(tab) === 'text/markdown'"
    :state="state"
    :tab="tab"
  />

  <EditorTabPlaintext
    v-else-if="tabMediaType(tab).startsWith('text/')"
    :state="state"
    :tab="tab"
  />
</template>
