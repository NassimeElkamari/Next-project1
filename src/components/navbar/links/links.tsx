'use client'

import styles from './links.module.css'
import NavLink from './navLink/navLink';


const links = [
  {
      title: "Home",
      path: "/",
  },
  {
      title: "Login",
      path: "/login",
  },
  {
      title: "SignUp",
      path: "/signup",
  },
];


const Links = () => {


  return (
    <div className={styles.container}>
      <div className={styles.links}>
      {links.map(link =>(
        <NavLink item={link} key={link.title}/>
      ))}
      </div>
    </div>
  )
}

export default Links
