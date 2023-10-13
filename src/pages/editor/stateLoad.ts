import * as Kv from 'idb-keyval'
import { State } from './State'
import { stateCreate } from './stateCreate'

export async function stateLoad(): Promise<State> {
  const state = stateCreate()
  state.recentlyOpened.fileHandles =
    (await Kv.get('x-editor/Editor/state.recentlyOpened.fileHandles')) || {}

  state.recentlyOpened.directoryHandles =
    (await Kv.get('x-editor/Editor/state.recentlyOpened.directoryHandles')) ||
    {}

  return state
}
