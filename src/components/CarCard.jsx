import { useAIImage } from '../hooks/useAIImage'
import AIGenBtn from './AIGenBtn'
import GenOverlay from './GenOverlay'
import styles from './CarCard.module.css'

export default function CarCard({ car, onError }) {
  const { url, loading, error, generate } = useAIImage()
  if (error) onError(error)

  const imgSrc = url || `/images/car_${car.key}.png`

  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <span className={styles.badge}>{car.badge}</span>
        <img src={imgSrc} alt={car.name} className={styles.img} />
        {loading && <GenOverlay />}
        <div className={styles.aiBtn}>
          <AIGenBtn loading={loading} hasImg={!!url} onGenerate={() => generate(car.prompt)} />
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.brand}>{car.brand}</div>
        <div className={styles.name}>{car.name}</div>
        <div className={styles.desc}>{car.desc}</div>
        <div className={styles.specs}>
          <div className={styles.spec}><div className={styles.specVal}>{car.hp}</div><div className={styles.specKey}>Хүч</div></div>
          <div className={styles.spec}><div className={styles.specVal}>{car.sec}</div><div className={styles.specKey}>0-100</div></div>
          <div className={styles.spec}><div className={styles.specVal}>{car.top}</div><div className={styles.specKey}>Хурд</div></div>
        </div>
        <div className={styles.footer}>
          <div className={styles.price}>{car.price}<br /><small>эхлэх үнэ</small></div>
          <button className={styles.detailBtn}>Дэлгэрэнгүй</button>
        </div>
      </div>
    </div>
  )
}
