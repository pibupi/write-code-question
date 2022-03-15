export let isBatchingEventUpdates = false

export function batchedEventUpdates(fn, a, b) {
  isBatchingEventUpdates = true
  try {
    return fn(a, b)
  } finally {
    isBatchingEventUpdates = false
  }
}

// 16之前是用isBatchingEventUpdates标识批量更新
// 16之后使用lane模型(赛道)