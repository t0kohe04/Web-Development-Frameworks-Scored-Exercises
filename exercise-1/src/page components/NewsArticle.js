import React from "react"
import styles from "./NewsArticle.module.css"

export default function NewsArticle(props){
    return(
        <div className={styles.container}>
            <img className={styles.image} src={'/news-article-images/' + props.image}/>
            <div className={styles.articleText}>
                <span className={styles.topic}>{props.topic + ' | '}</span>
                <span className={styles.articleHeader}>{props.header}</span>
                <div className={styles.topicAndTime}>{props.topicAndTime}</div>
            </div>
            
        </div>
    )
}