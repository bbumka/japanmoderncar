import { cars } from '../data/cars'
import CarCard from './CarCard'
import styles from './ModelsSection.module.css'

export default function ModelsSection({ onError }) {
  return (
    <section className={styles.section} id="models">
      <div className={styles.header}>
        <div>
          <div className={styles.label}>Манай Цуглуулга</div>
          <h2 className={styles.title}>Одоо <span>Зарагдаж</span> Байгаа<br />Загварууд</h2>
        </div>
        <button className={styles.allBtn}>Бүх загвар үзэх →</button>
      </div>

      <div className={styles.hint}>
        ✨ товчийг дарж Gemini AI-аар шинэ бодит зураг үүсгэнэ
      </div>

      <div className={styles.grid}>
        {cars.map(car => <CarCard key={car.id} car={car} onError={onError} />)}
      </div>
    </section>
  )
}
