import { join } from 'path-browserify'
import { State } from './State'

export async function stateFindFile(
  state: State,
  path: string,
): Promise<File | undefined> {
  if (!state.currentWorkspace) return
  if (!state.currentTab) return
  if (!state.currentTab.node?.parent?.relativePath) return

  const relativePath = join(state.currentTab.node.parent.relativePath, path)
  const parts = relativePath.split('/')

  let directoryHandle = state.currentWorkspace.root.handle
  for (const [index, part] of parts.entries()) {
    if (index === parts.length - 1) {
      const fileHandle = await directoryHandle.getFileHandle(part)
      return await fileHandle.getFile()
    } else {
      directoryHandle = await directoryHandle.getDirectoryHandle(part)
    }
  }
}
