import { useState } from 'react'
import { useAIImage } from '../hooks/useAIImage'
import AIGenBtn from './AIGenBtn'
import GenOverlay from './GenOverlay'
import styles from './Hero.module.css'

const HERO_PROMPT = 'Epic cinematic professional photo: stunning Mongolian miss model in elegant red evening gown, standing confidently beside a red Toyota GR Supra sports car, night city background with neon lights and bokeh, dramatic red lighting, luxury automotive advertisement, ultra realistic 8K, gorgeous, cinematic'

export default function Hero({ onError }) {
  const { url, loading, error, generate } = useAIImage()
  if (error) onError(error)

  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.badge}>Шинэ 2025 загварууд ирлээ</div>
        <h1 className={styles.title}>
          Японы
          <span className={styles.accent}>Шилдэг</span>
          Машинууд
        </h1>
        <p className={styles.sub}>
          Toyota, Nissan, Honda, Mazda, Subaru, Lexus —<br />
          дэлхийд нэрд гарсан Японы брэндүүдийн шилдэг загваруудыг<br />
          шууд Улаанбаатарт хүргэнэ.
        </p>
        <div className={styles.cta}>
          <button className={styles.btnPrimary}>Загваруудыг үзэх</button>
          <button className={styles.btnOutline}>Туршилт жолооллт</button>
        </div>
        <div className={styles.stats}>
          <div><div className={styles.statNum}>200+</div><div className={styles.statLabel}>Загвар</div></div>
          <div><div className={styles.statNum}>1,500+</div><div className={styles.statLabel}>Борлуулалт</div></div>
          <div><div className={styles.statNum}>98%</div><div className={styles.statLabel}>Сэтгэл Ханамж</div></div>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.imgWrap}>
          {url
            ? <><img src={url} alt="Hero" className={styles.img} /><div className={styles.imgOverlay} /></>
            : <img src="/images/hero_scene.png" alt="Hero" className={styles.img} />
          }
          {loading && <GenOverlay text="Hero зураг үүсгэж байна..." />}
          <div className={styles.regenBtn}>
            <AIGenBtn loading={loading} hasImg={!!url} onGenerate={() => generate(HERO_PROMPT)} label="AI Шинэчлэх" />
          </div>
        </div>
      </div>
    </section>
  )
}
