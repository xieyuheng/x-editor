import { RouteRecordRaw } from 'vue-router'
import Editor from './editor/Editor.vue'
import PageNotFound from './errors/PageNotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Editor },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
