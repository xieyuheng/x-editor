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
    // To confirm if user really want to leave the page.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
    event.preventDefault()
    event.returnValue = 'string'
  }
})
</script>

<template>
  <EditorLayout :state="state" />
</template>
