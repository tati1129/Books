import React from 'react'
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram  }  from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

import s from './style.module.css'



export default function Footer() {
  return (
    <div className={s.wrapper}>
        <div  >
        <div className={s.logo}>
          <FontAwesomeIcon icon={faBookBookmark} />
          <h4> Pages </h4>
        </div>
            <div className={s.btns}>
                <button><FontAwesomeIcon icon={faFacebookF} /></button>
                <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
                <button><FontAwesomeIcon icon={faTwitter} /></button>
                <button><FontAwesomeIcon icon={faInstagram} /></button>
            </div>
        </div>
        <div className={s.block}>
           <div className={s.block_title}> Explore </div>
           <div className={s.block_item}>
                <p className={s.p1}> ... </p>
                <p className={s.p2}> Home </p>
           </div>
           <div className={s.block_item}>
                <p className={s.p1}> ... </p>
                <p className={s.p2}> About</p>
           </div>
           <div className={s.block_item}>
                <p className={s.p1}> ... </p>
                <p className={s.p2}> Articles </p>
           </div>
           <div className={s.block_item}>
                <p className={s.p1}> ... </p>
                <p className={s.p2}> OurStore </p>
           </div>
           <div className={s.block_item}>
                <p className={s.p1}> ... </p>
                <p className={s.p2}>Contact us </p>
           </div>
        </div>
        <div className={s.block}> 
           <div className={s.block_title}>Utility Pages</div> 
           <div className={s.block_item} >
                <p className={s.p1}> ...  </p>
                <p className={s.p2}>Style Guide</p>
            </div>
            <div className={s.block_item} >
                <p className={s.p1}> ... </p>
                <p className={s.p2}>404 Not Foud  </p>
            </div>
            <div className={s.block_item} >
                <p className={s.p1}> ... </p>
                <p className={s.p2}>Password Protected </p> 
            </div>
            <div className={s.block_item} >
                <p className={s.p1}> ... </p>
                <p className={s.p2}>Licenses </p>
            </div>
            <div className={s.block_item} > 
                <p className={s.p1}> ... </p>   
                <p className={s.p2}>Changelog </p>
           </div>
            
        </div>
        <div className={s.block}> 
            <div className={s.block_title}> Keep in Touch</div>
            <div className={s.block_item3}>
                <div className={s.span_1}>Адресс: </div>
                <div className={s.span_2}>24A Kingston St, Las Vegas
                        NC 28202, USA. 
                </div>
            </div>
            <div className={s.block_item3}>
                <div className={s.span_1}>Mail: </div>
                <div className={s.span_2}>support@pages.com </div>
            </div>
            <div className={s.block_item3}>
                <div span className={s.span_1}>Phone: </div>
                <div className={s.span_2}>(+22) 123 - 456 - 900 </div> 
            </div>
        
        </div>
    </div>
  )
}
