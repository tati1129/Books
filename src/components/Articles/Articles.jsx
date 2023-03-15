import React from 'react'
import ArticlesItem from '../ArticlesItem/ArticlesItem'
import art from '../../image/art.png'
import s from './style.module.css'

export default function Articles() {
    const articles = [
        {id: 1, title: '01', descr: 'Use HDFS & Map Reduce for storing & analyzing data at scale.'},
        {id: 2, title: '02', descr: 'Consume streaming data using Spark Streaming, Flink, and Storm.'},{id: 3, title: '03', descr: 'Choose an appropriate data storage technology for your application'},
        {id: 4, title: '04', descr: 'Analyze non-relational data using HBase, Cassandra, and MongoDB.'}
    ]
  return (
    <div className={s.wrapper}>
        <div className={s.title}>
            <p className={s.title_text}>What Will You Learn?</p>
            <p className={s.underline}></p>
        </div>
        <div className={s.main}>
            <div className={s.container_item}>
                {
                    articles.map(elem => <ArticlesItem key={elem.id} {...elem} />)
                }
            </div>
            <div className={s.image}>
                <img src={art} alt="" />
            </div>
        </div>
        
    </div>
  )
}
