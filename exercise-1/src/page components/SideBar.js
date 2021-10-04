import React from "react"
import MostReadArticles from "./MostReadArticle"
import styles from "./SideBar.module.css"

export default function SideBar(){
    return(
        <div className={styles.container}>
            <div className={styles.mostReadArticles}>
                <h2 className={styles.mostReadHeader}>Luetuimmat</h2>
                
                <MostReadArticles articleNumber='1' topic='Sää' header='Talvi yllätti autoilijat' />
                <MostReadArticles articleNumber='2' topic='Rikokset' header='Muusikko R. Kelly oli ”kaikkein pahin saalistaja”, joka sai jatkaa hirvittäviä rikoksiaan vuosikymmenten ajan – Tästä maailmaa kuohuttavassa tapauksessa on kyse' />
                <MostReadArticles articleNumber='3' topic='Kolumni' header='Olen kuskannut lastani autolla kouluun ajattelematta, että se voi kostautua vuosien viiveellä' />
                <MostReadArticles articleNumber='4' topic='Britannia' header='Britannia määräsi sotilaat rattien taakse auttamaan poltto­aine­kuljetuksissa' />

            </div>
        </div>
    )
}