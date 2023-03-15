import React from 'react'
import s from './style.module.css'
import bookImage from '../../image/img1.png'
import { NavLink } from 'react-router-dom'


export default function Home() {
  return (
    <div className={s.container}>
        <div className={s.info}>
          <div className={s.info_about}>
            <div className={s.info_about_p}>
                <p className={s.info_about_p1}></p>
                <p className={s.info_about_p2}> Welcome To Pages!!!</p>
            </div>
            <p className={s.title}>Your Books From <br/>
                The Best Writer. </p>
            <p className={s.text}>We believe that reading books are essential to a healthy culture.<br/>
            They where authors can connect with readers. </p>
          </div>
          <div className={s.action}>
            <div className={s.order}><NavLink className={s.order_item} to='/order'> Order Today </NavLink></div>
            <div ><a href="" className={s.link}>Read Free Demo</a></div>
          </div>
          <div className={s.about}>
            <div className={s.contain}>
                <div className={s.contain_includs}>
                    <p className={s.p1}></p>
                    <p className={s.p2}>Pages:</p>
                </div>
                    <p className={s.p3}>250pages</p>
            </div>
            
            <div className={s.contain}>
                <div className={s.contain_includs}>
                    <p className={s.p1}></p>
                    <p className={s.p2}>Length:</p>
                </div>
                    <p className={s.p3}>10 Hours</p>
                </div>
            <div className={s.contain}>
                <div className={s.contain_includs}>
                    <p className={s.p1}></p>
                    <p className={s.p2}>Rating:</p>
                </div>
                    <p className={s.p3}>4,5/5 (305 ratings)</p>
                </div>
          </div>
          
        </div>
        <div className={s.block_image}>
          <img src={bookImage} className={s.bookImage} />
        </div>
    </div>
  )
}
