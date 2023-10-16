import { WorkspaceNodeFile } from './WorkspaceNode'

export type Tab = {
  handle: FileSystemFileHandle
  file: File
  originalText: string
  originalBytes: Uint8Array
  text: string
  isProcessing: boolean
  scrollTop: number
  isHeightOverflow?: boolean
  node?: WorkspaceNodeFile
}
