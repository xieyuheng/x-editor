<script setup lang="ts">
import Lang from '../../components/lang/Lang.vue'
import { State } from './State'

defineProps<{ state: State }>()
</script>

<template>
  <div class="flex h-full flex-col justify-between space-y-4">
    <div class="flex flex-col space-y-4">
      <Lang class="text-2xl font-bold ">
        <template #zh>关于</template>
        <template #en>About</template>
      </Lang>

      <div
        class="flex max-w-lg flex-col items-start space-y-2 text-xl "
      >
        <Lang class="flex flex-col space-y-2.5">
          <template #zh>
            <p><b>X 编辑器</b>是嵌入在浏览器中的文本编辑器。</p>

            <p>它可以访问用户的本地文件系统，并且预览 Markdown 文件。</p>

            <p>目前支持 Chrome、Edge 和 Opera 等基于 Chromium 的浏览器。</p>
          </template>
          <template #en>
            <p><b>X Editor</b> is a text editor embedded in the browser.</p>

            <p>
              It can access user's local file system, and preview Markdown
              files.
            </p>

            <p>
              Currently we support Chromium-based browsers (such as Chrome, Edge
              and Opera).
            </p>
          </template>
        </Lang>
      </div>
    </div>

    <div class="flex flex-col items-start space-y-2">
      <Lang class="text-base text-stone-500 dark:text-stone-400 sm:text-lg">
        <template #zh>
          <p>
            源代码：<a
              href="https://github.com/xieyuheng/x-editor"
              target="_blank"
              >github.com/xieyuheng/x-editor</a
            >
          </p>
        </template>
        <template #en>
          <p>
            Source code:
            <a href="https://github.com/xieyuheng/x-editor" target="_blank"
              >github.com/xieyuheng/x-editor</a
            >
          </p>
        </template>
      </Lang>

      <Lang class="text-base text-stone-500 dark:text-stone-400 sm:text-lg">
        <template #zh>
          <a href="https://xieyuheng.com" target="_blank"> 谢宇恒软件工作室 </a>
        </template>
        <template #en>
          <a href="https://xieyuheng.com" target="_blank">
            Xie Yuheng Software Studio
          </a>
        </template>
      </Lang>
    </div>
  </div>
</template>
