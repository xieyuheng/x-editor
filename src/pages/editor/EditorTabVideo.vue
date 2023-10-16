<script setup lang="ts">
import { onUnmounted, ref, watchEffect } from 'vue'
import EditorModeline from './EditorModeline.vue'
import { State } from './State'
import { Tab } from './Tab'

const props = defineProps<{
  state: State
  tab: Tab
}>()

const src = ref<string>()

watchEffect(() => {
  src.value = URL.createObjectURL(props.tab.file)
})

onUnmounted(() => {
  if (src.value) {
    URL.revokeObjectURL(src.value)
  }
})
</script>

<template>
  <div class="flex h-full flex-col overflow-auto">
    <video
      class="flex h-full w-full flex-col items-start justify-center overflow-auto"
      controls
      :src="src"
    ></video>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
