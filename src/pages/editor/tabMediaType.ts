import { extname } from 'path-browserify'
import { contentTypeRecord } from '../../utils/contentTypeRecord'
import { Tab } from './Tab'

export function tabMediaType(tab: Tab): string {
  return contentTypeRecord[extname(tab.file.name)] || 'application/octet-stream'
}
