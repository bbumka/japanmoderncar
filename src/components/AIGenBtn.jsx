import styles from './AIGenBtn.module.css'

export default function AIGenBtn({ loading, hasImg, onGenerate, label = 'AI Зураг' }) {
  return (
    <button className={styles.btn} onClick={onGenerate} disabled={loading}>
      {loading
        ? <span className={styles.spinner} />
        : <span>✨</span>
      }
      {loading ? 'Үүсгэж байна...' : hasImg ? 'Дахин үүсгэх' : label}
    </button>
  )
}
