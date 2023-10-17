<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <Lang class="text-2xl ">
    <template #zh>
      <span>欢迎使用</span>
      <br class="block sm:hidden" />
      <span><b>X 编辑器</b></span>
    </template>
    <template #en>
      <span> Welcome to use </span>
      <br class="block sm:hidden" />
      <span><b> X Editor </b></span>
    </template>
  </Lang>
</template>
