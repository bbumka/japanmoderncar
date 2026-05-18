import styles from './BrandsSection.module.css'

const brands = ['Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru', 'Lexus', 'Mitsubishi', 'Suzuki']

export default function BrandsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.title}>Манай Брэндүүд</div>
      <div className={styles.grid}>
        {brands.map(b => <div key={b} className={styles.item}>{b}</div>)}
      </div>
    </section>
  )
}
