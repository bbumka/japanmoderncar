import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h3>Japan<span>Modern</span>Car</h3>
          <p>Японы хамгийн шилдэг брэндүүдийн автомашинуудыг шууд таны гарт хүргэдэг Монголын тэргүүлэх автомашины дилер.</p>
          <div className={styles.socials}>
            {['FB', 'IG', 'YT', 'TG'].map(s => <div key={s} className={styles.social}>{s}</div>)}
          </div>
        </div>
        <div className={styles.col}>
          <h4>Загварууд</h4>
          <ul>{['Toyota', 'Nissan', 'Honda', 'Mazda', 'Subaru', 'Lexus'].map(b => <li key={b}><a href="#">{b}</a></li>)}</ul>
        </div>
        <div className={styles.col}>
          <h4>Үйлчилгэа</h4>
          <ul>{['Машин Худалдаа', 'Зээл & Даатгал', 'Туршилт Жолооллт', 'Засвар Үйлчилгэа', 'Нэмэлт Хэрэгсэл'].map(s => <li key={s}><a href="#">{s}</a></li>)}</ul>
        </div>
        <div className={styles.col}>
          <h4>Холбоо барих</h4>
          <ul>
            <li><a href="#">📍 Улаанбаатар, СБД 1-р хороо</a></li>
            <li><a href="#">📞 +976 7700-0000</a></li>
            <li><a href="#">✉️ info@japanmoderncar.mn</a></li>
            <li><a href="#">🕐 Дав-Баш 9:00-18:00</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.copy}>© 2025 JapanModernCar. Бүх эрх хуулиар хамгаалагдсан.</div>
        <div className={styles.jp}>日本のカーライフを</div>
      </div>
    </footer>
  )
}
