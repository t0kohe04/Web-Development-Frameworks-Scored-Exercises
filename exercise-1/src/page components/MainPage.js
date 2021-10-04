import React from "react"
import styles from "./MainPage.module.css"
import NewsArticle from "./NewsArticle"

export default function MainPage(){
    return(
        <div className={styles.container}>
            <NewsArticle topicAndTime='Mielipide 10:32' topic='Mielipide' header='Anne 69 mielestä elämä on paskaa' image="sad-old-woman.jpg"/>
            <NewsArticle topicAndTime='Maailma 18:40' topic='Ympäristö' header='Ilmastonmuutos lähestyy, mutta ketään ei kiinosta' image='glacier-breaking.jpg'/>
            <NewsArticle topicAndTime='Perhe 13:05' topic='Perhe' header='Tällä vinkillä saat lapsesi hiljenemään hetkessä!' image='man-with-silenced-gun.jpg'/>
        </div>
    )
}