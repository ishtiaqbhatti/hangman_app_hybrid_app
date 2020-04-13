import { useState } from 'react'

export const useQueue = <T>(initialValue: T[] = []) => {
  const [queue, setQueue] = useState(initialValue)

  const enqueue = (...items: T[]) => {
    setQueue(prev => prev.concat(items))
  }

  const dequeue = (): T => {
    const oldItems = [...queue]
    const item = oldItems.shift()
    setQueue(oldItems)
    return item
  }

  const clear = () => {
    setQueue([])
  }

  return {
    // first element of queue
    first: queue.length ? queue[0] : null,
    queue,
    enqueue,
    dequeue,
    clear,
  }
}
