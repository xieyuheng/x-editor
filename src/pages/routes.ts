import { RouteRecordRaw } from 'vue-router'
import Editor from './editor/Editor.vue'
import PageNotFound from './errors/PageNotFound.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/editor' },
  { path: '/editor', component: Editor },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
