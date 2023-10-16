import { Tab } from './Tab'

export async function tabFromFileHandle(
  handle: FileSystemFileHandle,
): Promise<Tab> {
  const file = await handle.getFile()
  const text = await file.text()
  const arrayBuffer = await file.arrayBuffer()
  return {
    handle,
    file,
    text,
    arrayBuffer,
    originalText: text,
    isProcessing: false,
    scrollTop: 0,
  }
}
