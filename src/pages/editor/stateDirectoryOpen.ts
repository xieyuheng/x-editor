import { State } from './State'
import { ensurePermission } from './ensurePermission'
import { stateWorkspaceNodeFileOpen } from './stateWorkspaceNodeFileOpen'
import { workspaceLoad } from './workspaceLoad'

export async function stateDirectoryOpen(state: State): Promise<void> {
  const directoryHandle = await window.showDirectoryPicker({
    mode: 'readwrite',
  })
  await stateOpenDirectoryHandle(state, directoryHandle)
}

export async function stateOpenDirectoryHandle(
  state: State,
  directoryHandle: FileSystemDirectoryHandle,
): Promise<void> {
  await ensurePermission(directoryHandle)

  state.currentWorkspace = await workspaceLoad(directoryHandle)
  state.recentlyOpened.directoryHandles[directoryHandle.name] = directoryHandle

  for (const node of state.currentWorkspace.root.children) {
    if (
      node.kind === 'WorkspaceNodeFile' &&
      node.relativePath === 'README.md'
    ) {
      stateWorkspaceNodeFileOpen(state, node)
    }
  }
}
