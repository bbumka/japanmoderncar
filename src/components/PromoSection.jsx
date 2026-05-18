import { useAIImage } from '../hooks/useAIImage'
import AIGenBtn from './AIGenBtn'
import GenOverlay from './GenOverlay'
import { ambassadors } from '../data/cars'
import styles from './PromoSection.module.css'

function AmbCard({ amb, onError }) {
  const { url, loading, error, generate } = useAIImage()
  if (error) onError(error)
  const imgSrc = url || `/images/${amb.imgKey}.png`

  return (
    <div className={styles.ambCard}>
      <div className={styles.ambHeader}>
        <div className={styles.ambAvatar}>
          <img src={imgSrc} alt={amb.name} className={styles.ambAvatarImg} />
          {loading && <div className={styles.avatarLoading}><div className={styles.smallSpinner} /></div>}
        </div>
        <div className={styles.ambInfo}>
          <div className={styles.ambName}>{amb.name}</div>
          <div className={styles.ambRole}>{amb.role}</div>
          <div className={styles.stars}>{'★'.repeat(amb.stars)}</div>
        </div>
        <AIGenBtn loading={loading} hasImg={!!url} onGenerate={() => generate(amb.prompt)} label="AI" />
      </div>
      <div className={styles.ambQuote}>"{amb.quote}"</div>
    </div>
  )
}

function ModelRow({ amb, onError }) {
  const { url, loading, error, generate } = useAIImage()
  if (error) onError(error)
  const imgSrc = url || `/images/${amb.imgKey}.png`

  return (
    <div className={styles.modelRow} onClick={() => !loading && generate(amb.prompt)}>
      <div className={styles.rowAvatar}>
        {loading
          ? <div className={styles.smallSpinner} />
          : <img src={imgSrc} alt={amb.name} className={styles.rowAvatarImg} />
        }
      </div>
      <div className={styles.rowInfo}>
        <div className={styles.rowName}>{amb.name}</div>
        <div className={styles.rowCar}>{amb.car}</div>
        <div className={styles.rowRole}>{amb.role}</div>
        <div className={styles.stars}>{'★'.repeat(amb.stars)}</div>
      </div>
      {!loading && <div className={styles.rowHint}>✨ дарж шинэчлэх</div>}
    </div>
  )
}

export default function PromoSection({ onError }) {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.label}>Манай Элчид</div>
          <h2 className={styles.title}>Брэндийн <span>Элч</span><br />Монгол Бүсгүйчүүд</h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            JapanModernCar-ын брэнд элч бүсгүйчүүд Монголын шилдэг загварчид юм.
            Тэд манай машинуудтай хамт зарлалд гардаг — ✨ дарж AI-аар үүсгэсэн зургийг шинэчлэнэ.
          </p>
          <AmbCard amb={ambassadors[0]} onError={onError} />
        </div>
        <div>
          <div className={styles.rowsLabel}>БУСАД ЭЛЧИД</div>
          <div className={styles.rows}>
            {ambassadors.map((a, i) => <ModelRow key={i} amb={a} onError={onError} />)}
            <div className={styles.joinCard}>
              <div>➕</div>
              <div className={styles.joinTitle}>БРЭНД ЭЛЧ БОЛОХ</div>
              <div className={styles.joinSub}>Манай командтай нэгдэх</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
