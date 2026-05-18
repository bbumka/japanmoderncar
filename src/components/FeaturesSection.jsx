import styles from './FeaturesSection.module.css'

const features = [
  { icon: '🇯🇵', title: '100% Японоос', desc: 'Бүх машинууд шууд Японоос импортлогдсон, жинхэнэ эх хувилбар.' },
  { icon: '🛡️', title: 'Баталгаа & Даатгал', desc: '3 жилийн үйлдвэрийн баталгаа болон бүрэн даатгалын багцтай.' },
  { icon: '🚗', title: 'Туршилт Жолооллт', desc: 'Аль ч загвараар туршилт жолооллт хийх боломжтой, захиалгаар.' },
  { icon: '💳', title: 'Зээлийн Боломж', desc: '0% хүүтэй 36 сар хүртэл хугацааны зээлийн нөхцөл боломжтой.' },
]

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Яагаад Бид</div>
        <h2 className={styles.title}>Манай <span>Давуу</span> Тал</h2>
      </div>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{f.icon}</div>
            <div className={styles.cardTitle}>{f.title}</div>
            <div className={styles.cardDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
