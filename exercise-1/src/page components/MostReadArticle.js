import React from "react"
import styles from "./MostReadArticles.module.css"

export default function MostReadArticles(props){
    return(
        <div className={styles.container}>
            <div className={styles.articleNumber}>
                {props.articleNumber}
            </div>
            <div className={styles.articleText}>
                <span className={styles.articleTopic}>{props.topic + ' | '}</span>
                <span className={styles.articleHeader}>{props.header}</span>
            </div>

        </div>
    )
}