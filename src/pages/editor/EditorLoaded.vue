<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
import EditorLayout from './EditorLayout.vue'
import { State } from './State'
import { stateIsModified } from './stateIsModified'
import { stateWatch } from './stateWatch'

const props = defineProps<{ state: State }>()

stateWatch(props.state)

useEventListener(window, 'beforeunload', (event) => {
  if (stateIsModified(props.state)) {
    event.preventDefault()
  }
})
</script>

<template>
  <EditorLayout :state="state" />
</template>
