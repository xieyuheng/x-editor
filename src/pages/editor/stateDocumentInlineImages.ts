import { Document, traverseDocument } from '@xieyuheng/x-markdown'
import { State } from './State'

export async function stateDocumentInlineImages(
  state: State,
  document: Document,
): Promise<void> {
  for (const node of traverseDocument(document)) {
    if (node.kind === 'Image') {
      console.log(node.src)
    }
  }
}
