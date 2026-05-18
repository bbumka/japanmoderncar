import styles from './GenOverlay.module.css'

export default function GenOverlay({ text = 'Зураг үүсгэж байна...' }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.spinner} />
      <div className={styles.text}>{text}</div>
      <div className={styles.sub}>Gemini AI</div>
    </div>
  )
}
