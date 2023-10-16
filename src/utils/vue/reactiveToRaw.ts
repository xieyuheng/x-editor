import { isProxy, isReactive, isRef, toRaw } from 'vue'

// Taken from:
// https://github.com/vuejs/core/issues/5303#issuecomment-1543596383

export function reactiveToRaw<T extends Record<string, any>>(sourceObj: T): T {
  const objectIterator = (input: any): any => {
    if (Array.isArray(input)) {
      return input.map((item) => objectIterator(item))
    }

    if (isRef(input) || isReactive(input) || isProxy(input)) {
      return objectIterator(toRaw(input))
    }

    // API might be not supported.

    if (
      typeof FileSystemFileHandle !== 'undefined' &&
      input instanceof FileSystemFileHandle
    ) {
      return input
    }

    if (
      typeof FileSystemDirectoryHandle !== 'undefined' &&
      input instanceof FileSystemDirectoryHandle
    ) {
      return input
    }

    if (input && typeof input === 'object') {
      return Object.keys(input).reduce((acc, key) => {
        acc[key as keyof typeof acc] = objectIterator(input[key])
        return acc
      }, {} as T)
    }

    return input
  }

  return objectIterator(sourceObj)
}
