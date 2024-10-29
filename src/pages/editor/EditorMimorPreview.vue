<script setup lang="ts">
import { Base64 } from 'js-base64'
import { State } from './State'
import { Tab } from './Tab'
import { useGlobalLang } from '../../components/lang/useGlobalLang'
import { useGlobalTheme } from '../../models/theme'


defineProps<{
  state: State
  tab: Tab
}>()

const lang = useGlobalLang()
const theme = useGlobalTheme()
</script>

<template>
  <x-mimor
    class="h-full"
    :reduced-motion="true"
    :src="`data:text/plain;base64,${Base64.encode(tab.text)}`"
    :text="tab.text"
    :lang-tag="lang.tag"
    :theme-name="theme.name"
  />
</template>
