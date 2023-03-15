import React from 'react'
import s from './style.module.css'

export default function ResourcesItem({image, title, descr, date}) {
  return (
    <div className={s.wrapper}>
        <div className={s.image}>
            <img src={image} alt="" />
        </div>
        <div className={s.info}>
            <p className={s.title}>{title}</p>
            <p className={s.descr}>{descr}</p>
            <p className={s.date}>{date}</p>
        </div>
        
    </div>
  )
}
