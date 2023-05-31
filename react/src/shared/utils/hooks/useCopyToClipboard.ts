import { useCallback, useState } from 'react'

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false)

  const copy = useCallback((text: unknown) => {
    if (typeof text !== 'string') return false
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true)
      })
      .catch(err => {
        console.error(`Unable copy to clipboard: ${ err }`)
      })
  }, [])

  return { copied, copy }
}
