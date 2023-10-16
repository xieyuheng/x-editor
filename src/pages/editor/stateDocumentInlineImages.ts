import { Document, traverseDocument } from '@xieyuheng/x-markdown'
import { Base64 } from 'js-base64'
import { State } from './State'
import { stateFindFile } from './stateFindFile'

export async function stateDocumentInlineImages(
  state: State,
  document: Document,
): Promise<Document> {
  for (const node of traverseDocument(document)) {
    if (node.kind === 'Image') {
      if (state.currentWorkspace) {
        const file = await stateFindFile(state, node.src)

        if (file) {
          const bytes = new Uint8Array(await file.arrayBuffer())
          const base64 = Base64.fromUint8Array(bytes)
          node.src = `data:image/*;base64,${base64}`
        }
      }
    }
  }

  return document
}
