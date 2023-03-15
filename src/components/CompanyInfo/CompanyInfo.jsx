import React from 'react'
import img5 from '../../image/img5.png'
import s from './style.module.css'

export default function CompanyInfo() {
  return (
    <div className={s.wrapper}>
        
        <div className={s.info}>
            <p className={s.title}>Get Book Copy Today!</p>
            <p className={s.underline}></p>
            <p className={s.info_descr}>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
        </div>
        <div className={s.image}>
            <img src={img5} alt="" />
        </div>
    </div>
  )
}
