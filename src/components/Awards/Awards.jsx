import React from 'react'
import s from './style.module.css'
import logo1 from '../../image/logo1.png'
import logo2 from '../../image/logo2.png'
import logo3 from '../../image/logo3.png'
import logo4 from '../../image/logo4.png'

import AwardItem from '../AwardItem/AwardItem'


export default function Awards() {
    const awards = [
        {id: 1, image: logo1, title: 'Amazen Corp.', descr: 'They has been helping readers, music lovers, and videophiles find quality material.'},
        {id: 2, image: logo2, title: 'Megan Books', descr: 'We help physical bookstores manage their overstock to the book inventory.'},
        {id: 3, image: logo3, title: 'Megank', descr: 'Bookstore serving up the full spectrum of Black literature and wine black books.'},
        {id: 4, image: logo4, title: 'Urban Store', descr: 'We also carry the latest records, issues of all of your favorite comic books.'}
    ]
  return (
    <div className={s.container}>
        <div className={s.title}> 
            <h1>Trusted By The Best</h1>
        <p className={s.underline}></p>
        </div>
        <div className={s.awards}>
            {
                awards.map(award => <AwardItem key={award.id} {...award} />)
            }
        </div>
        
    </div>
  )
}
