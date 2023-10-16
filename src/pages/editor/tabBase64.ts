import { Base64 } from 'js-base64'
import { Tab } from './Tab'

export function tabBase64(tab: Tab): string {
  return Base64.fromUint8Array(tab.originalBytes)
}
