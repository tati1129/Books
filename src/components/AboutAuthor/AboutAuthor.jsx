import React from 'react'
import authorImage from '../../image/img4.png'
import QRcode from '../../image/QRcode.png'
import s from './style.module.css'

export default function AboutAuthor() {
  return (
    <div className={s.author}>
       <div className={s.author_img}><img src={authorImage}  alt="" /></div>
        <div className={s.book_info}>
            <div className={s.title}>
                <p className={s.title_p}>About The Author Book</p>
                <p className={s.underline}></p>
            </div>
            <div className={s.p_info}> We believe that bookstores are essential to a healthy culture. <br/> They’re where authors can connect with readers, where we <br/> discover new writers, where children get hooked on the thrill <br/> of reading that can last a lifetime. </div>
            <div className={s.points}>
                <div className={s.points_item}>
                    <h2> 02 </h2>
                    <p className={s.points_info}>Books Published</p>
                </div>
                <p className={s.line}> </p>
                <div className={s.points_item}>
                    <h2> 4.5 </h2>
                    <p className={s.points_info}>User Reviews</p>
                </div>
                <p className={s.line}> </p>
                <div className={s.points_item}>
                    <h2> 04</h2>
                    <p className={s.points_info}>Best Seller Awards</p>
                </div>
            </div>
            <div className={s.contacts}> 
                <div> <img src={QRcode} className={s.code_img} alt="" /></div>
                <div className={s.contacts_info}>
                    <p className={s.info_name}> John Abraham , Ph.d </p>
                    <p className={s.info_contacts}> Mail: johnabraham@gmail.com</p>
                    <p className={s.info_contacts}> Phone: (+2) 123 545 9000 </p>
                </div>
            </div>
        </div>
    </div>
  )
}
