<script setup lang="ts">
import * as musicMetadata from 'music-metadata-browser'
import { ref, watchEffect } from 'vue'
import Lang from '../../components/lang/Lang.vue'
import EditorModeline from './EditorModeline.vue'
import { State } from './State'
import { Tab } from './Tab'
import { tabBase64 } from './tabBase64'
import { tabMediaType } from './tabMediaType'

const props = defineProps<{
  state: State
  tab: Tab
}>()

const metadata = ref<musicMetadata.IAudioMetadata | undefined>()

watchEffect(async () => {
  metadata.value = await musicMetadata.parseBlob(props.tab.file)
})
</script>

<template>
  <div class="flex h-full flex-col overflow-auto">
    <div
      class="flex h-full w-full flex-col items-start justify-center overflow-auto pb-20 pl-10"
    >
      <div v-if="metadata" class="flex flex-col items-start p-6">
        <Lang v-if="metadata.common.title" class="py-6 text-3xl">
          <template #zh>{{ metadata.common.title }}</template>
          <template #en>{{ metadata.common.title }}</template>
        </Lang>

        <Lang v-if="metadata.common.year">
          <template #zh>年份：{{ metadata.common.year }}</template>
          <template #en>year: {{ metadata.common.year }}</template>
        </Lang>

        <Lang v-if="metadata.common.date">
          <template #zh>日期：{{ metadata.common.date }}</template>
          <template #en>date: {{ metadata.common.date }}</template>
        </Lang>

        <Lang v-if="metadata.common.genre">
          <template #zh>类型：{{ metadata.common.genre }}</template>
          <template #en>genre: {{ metadata.common.genre }}</template>
        </Lang>

        <Lang v-if="metadata.common.album">
          <template #zh>专辑：{{ metadata.common.album }}</template>
          <template #en>album: {{ metadata.common.album }}</template>
        </Lang>

        <Lang v-if="metadata.common.artists">
          <template #zh
            >艺术家：{{ metadata.common.artists.join('，') }}</template
          >
          <template #en
            >artists: {{ metadata.common.artists.join(', ') }}</template
          >
        </Lang>
        <Lang v-else-if="metadata.common.artist">
          <template #zh>艺术家：{{ metadata.common.artist }}</template>
          <template #en>artist: {{ metadata.common.artist }}</template>
        </Lang>

        <Lang v-if="metadata.common.comment">
          <template #zh>注释：{{ metadata.common.comment }}</template>
          <template #en>comment: {{ metadata.common.comment }}</template>
        </Lang>
      </div>

      <div class="p-6">
        <audio
          controls
          :src="`data:${tabMediaType(tab)};base64,${tabBase64(tab)}`"
        ></audio>
      </div>
    </div>

    <EditorModeline :state="state" :tab="tab" />
  </div>
</template>
