import React from 'react'
import s from './style.module.css'

export default function AwardItem({image, title, descr}) {
  return (
    <div className={s.container}>
        <div className={s.image}>
            <img src={image} alt={title} />
        </div>
        {/* <div className=''></div> */}
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{descr}</p>

    </div>
  )
}
