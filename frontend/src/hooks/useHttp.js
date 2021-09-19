import { useState } from 'react'

export const useHttp = (callback) => {
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const fetching = async (...args) => {
    try {
      setLoading(true)

      await callback(...args)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetching, loading, error]
}
