import React from 'react'
import s from './style.module.css'

export default function Book({id, img, title, price, descr,print}) {
  return (
    <div className={s.container}>
        <div className={s.block_img}>
            <img className={s.img} src={img} alt={title} />
        </div>
        <div className={s.about}>
            <p className={s.about_title}>{title}</p>
            <p className={s.about_price}>$ {price} USD</p>
            <p className={s.about_descr}>{descr}</p>
            <div className={s.printed}>
                <p className={s.printed_circle}></p>
                <p className={s.printed_print}>{print}</p>
            </div>
        </div>
    </div>
  )
}
