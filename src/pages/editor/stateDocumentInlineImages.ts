import { Document, traverseDocument } from '@xieyuheng/x-markdown'

import { Base64 } from 'js-base64'
import { State } from './State'
import { workspaceFindFile } from './workspaceFindFile'

export async function stateDocumentInlineImages(
  state: State,
  document: Document,
): Promise<Document> {
  for (const node of traverseDocument(document)) {
    if (node.kind === 'Image') {
      if (state.currentWorkspace) {
        const file = await workspaceFindFile(state.currentWorkspace, node.src)

        if (file) {
          const text = await file.text()
          node.src = `data:image/*;base64,${Base64.encode(text)}`
        }
      }
    }
  }

  return document
}
