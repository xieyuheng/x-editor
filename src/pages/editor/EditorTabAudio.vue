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
    <div class="mx-auto my-auto flex overflow-auto">
      <audio
        controls
        :src="`data:${tabMediaType(tab)};base64,${tabBase64(tab)}`"
      ></audio>
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
