import { Tab } from './Tab'

export async function tabFromFileHandle(
  handle: FileSystemFileHandle,
): Promise<Tab> {
  const file = await handle.getFile()
  const text = await file.text()
  const arrayBuffer = await file.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)
  return {
    handle,
    file,
    originalBytes: bytes,
    originalText: text,
    text,
    isProcessing: false,
    scrollTop: 0,
  }
}
