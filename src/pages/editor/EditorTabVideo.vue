<script setup lang="ts">
import EditorModeline from './EditorModeline.vue'
import { State } from './State'
import { Tab } from './Tab'
import { tabBase64 } from './tabBase64'
import { tabMediaType } from './tabMediaType'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div class="flex h-full flex-col overflow-auto">
    <div
      class="flex h-full w-full flex-col items-start justify-center overflow-auto pb-20 pl-10"
    >
      <div class="p-6">
        <video
          controls
          :src="`data:${tabMediaType(tab)};base64,${tabBase64(tab)}`"
        ></video>
      </div>
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
