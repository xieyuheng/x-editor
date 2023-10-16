<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import EditorModeline from './EditorModeline.vue'
import { State } from './State'
import { Tab } from './Tab'
import { tabBase64 } from './tabBase64'
import { tabMediaType } from './tabMediaType'

defineProps<{
  state: State
  tab: Tab
}>()

const splitpanesSize = useLocalStorage('EditorTab.splitpanesSize', 36)
</script>

<template>
  <div class="flex h-full flex-col overflow-auto">
    <div class="flex h-full w-full overflow-auto">
      <img :src="`data:${tabMediaType(tab)};base64,${tabBase64(tab)}`" alt="" />
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
