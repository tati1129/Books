import React from 'react'
import s from './style.module.css'

export default function ArticlesItem({title, descr}) {
  return (
    <div className={s.contain}>
        <p className={s.title}>{title}</p>
        <p className={s.descr}>{descr}</p>
    </div>
  )
}
