import { useEffect, useState } from 'react'
import { GET_RANDOM_WORDS } from '../apollo/queries'
import { useImperativeQuery } from './useImperativeQuery'
import { useQueue } from './useQueue'
import get from 'lodash.get'
import { Word } from '../interfaces/Word'

type WordManagerParams = {
  categoryId?: string
  minItemsToFetch?: number
}

export const useWordManager = ({
  categoryId: commingCategoryId,
  minItemsToFetch = 4,
}: WordManagerParams) => {
  const [categoryId, setCategoryId] = useState(commingCategoryId)
  const [loading, setLoading] = useState(false)

  const { first: currentWord, enqueue, dequeue, clear, queue } = useQueue<Word>()

  const [getRandomWords] = useImperativeQuery(GET_RANDOM_WORDS, {
    variables: {
      ...(categoryId && categoryId !== 'undefined' ? { categoryId } : {}),
    },
  })

  // If category changes, reset words and load again
  useEffect(() => {
    clear()
    setCategoryId(commingCategoryId)
  }, [commingCategoryId])

  useEffect(() => {
    const fetchMoreWords = async () => {
      try {
        setLoading(true)
        const res = await getRandomWords()
        const newWords = get(res, 'data.randomWords', [])
        enqueue(...newWords)
      } catch (error) {
        console.error('Dante: fetchMoreWords -> error', error)
      } finally {
        setLoading(false)
      }
    }
    if (queue.length < minItemsToFetch) {
      fetchMoreWords()
    }
  }, [queue.length])

  const nextWord = () => dequeue()

  return {
    word: currentWord,
    nextWord,
    // Only if array is lte 2 and words are loading
    loading: queue.length < 2 && loading,
  }
}
