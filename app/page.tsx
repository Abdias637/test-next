import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Home() {
  return (
      <div className={styles.container}>
       
        {/*Navabar*/}
        <nav className={styles.navbar}>
        <a href="#" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navItem}>
           <Link href="/page/ayuda">Ayuda</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/page/sesion">Sesion</Link>
      
          </li>
        </ul>
        </nav>
        <div className={styles.content}>
          <h1>Hola mundo Pambazo </h1>
<img src="https://thesweetmolcajete.com/wp-content/uploads/2016/05/pambazos.jpg"/>
        </div>
        <Footer/>
      </div>  


  )
}