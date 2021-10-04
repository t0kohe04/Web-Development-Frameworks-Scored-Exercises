import React from "react";
import styles from './NavBar.module.css';

export default function NavBar(){
    return(
        <div className={styles.navbarBackground}>
            <div className={styles.container}>
            <div className={styles.brand}>HELSINGIN SANOMAT</div>
            <div className={styles.containerItem}>Etusivu</div>
            <div className={styles.containerItem}>Uutiset</div>
            <div className={styles.containerItem}>Lehdet</div>
            <div className={styles.containerItem}>Asiakaspalvelu</div>
            <div className={styles.containerItem}>Tilaa</div>
        </div>
        </div>
    )
}