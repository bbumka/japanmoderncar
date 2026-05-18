import styles from './Navbar.module.css'

const links = ['Нүүр', 'Загварууд', 'Зарагдаж байна', 'Тухай', 'Холбоо барих']

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>Japan<span>Modern</span>Car</a>
      <ul className={styles.links}>
        {links.map(l => <li key={l}><a href="#">{l}</a></li>)}
      </ul>
      <button className={styles.btn}>Үнийн санал авах</button>
    </nav>
  )
}
