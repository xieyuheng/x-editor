<script setup lang="ts">
import { State } from './State'
import { Tab } from './Tab'
import { tabIsModified } from './tabIsModified'
import { tabMediaType } from './tabMediaType'

defineProps<{
  state: State
  tab: Tab
}>()
</script>

<template>
  <div
    class="flex items-baseline space-x-2 overflow-x-auto overflow-y-clip whitespace-pre bg-stone-200 px-3 dark:bg-stone-600"
  >
    <div class="font-bold">{{ tab.node?.relativePath || tab.file.name }}</div>

    <span class="font-bold">({{ tabMediaType(tab) }})</span>

    <div>
      <span>{ </span>

      <template v-if="tabMediaType(tab).startsWith('text/')">
        <span>line: </span>
        <span class="font-bold">{{ tab.text.split('\n').length }}</span>
        <span>, </span>
      </template>

      <template v-if="tabIsModified(tab)">
        <span>isModified: </span>
        <span class="font-bold">true</span>
        <span>, </span>
      </template>

      <span>length: </span>
      <span class="font-bold">{{ tab.text.length }}</span>

      <span> }</span>
    </div>
  </div>
</template>
