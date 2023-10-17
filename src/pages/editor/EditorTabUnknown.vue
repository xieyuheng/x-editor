<script setup lang="ts">
import { extname } from 'path-browserify'
import { onUnmounted, ref, watchEffect } from 'vue'
import Lang from '../../components/lang/Lang.vue'
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
    <div class="flex h-full flex-col items-start justify-center p-6">
      <Lang>
        <template #zh>
          未处理的文件类型：{{ extname(tab.file.name) }}
        </template>
        <template #en>
          Unhandled type type: {{ extname(tab.file.name) }}
        </template>
      </Lang>
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
