import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function NotFoundPage() {
  return (
    <div className={s.wrapper} >
      <div className={s.block}>
        <p className={s.title}>Страница не найдена</p>
        <Link className={s.link} to='/'> на главную</Link>
      </div>
    </div>
  )
}
