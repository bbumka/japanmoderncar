import { useState, useCallback } from 'react'
import { generateImage } from '../api/gemini'

export function useAIImage() {
  const [url, setUrl] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const generate = useCallback(async (prompt) => {
    setLoading(true)
    setError(null)
    try {
      const imgUrl = await generateImage(prompt)
      setUrl(imgUrl)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { url, loading, error, generate }
}
