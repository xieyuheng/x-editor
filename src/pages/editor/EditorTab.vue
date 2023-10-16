<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { Pane, Splitpanes } from 'splitpanes'
import EditorLinenumber from './EditorLinenumber.vue'
import EditorMarkdownPreview from './EditorMarkdownPreview.vue'
import EditorModeline from './EditorModeline.vue'
import EditorTextarea from './EditorTextarea.vue'
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
      <EditorLinenumber :state="state" :tab="tab" />

      <img
        v-if="tabMediaType(tab).startsWith('image/')"
        :src="`data:${tabMediaType(tab)};base64,${tabBase64(tab)}`"
        alt=""
      />

      <EditorTextarea
        v-else-if="!tab.file.name.endsWith('.md')"
        :state="state"
        :tab="tab"
      />

      <Splitpanes
        v-if="tab.file.name.endsWith('.md')"
        class="splitter-6 sm:splitter-3 flex h-full w-full overflow-auto"
        @resized="splitpanesSize = $event[0].size"
      >
        <Pane class="flex h-full w-full flex-col overflow-auto">
          <EditorTextarea :state="state" :tab="tab" />
        </Pane>

        <Pane class="flex h-full w-full flex-col overflow-auto">
          <EditorMarkdownPreview
            class="min-w-[30rem] border-l border-black dark:border-white"
            :state="state"
            :tab="tab"
          />
        </Pane>
      </Splitpanes>
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
