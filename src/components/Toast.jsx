import { useEffect } from 'react'
import styles from './Toast.module.css'

export default function Toast({ msg, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div className={styles.toast}>
      ⚠️ {msg}
      <span className={styles.close} onClick={onClose}>✕</span>
    </div>
  )
}
