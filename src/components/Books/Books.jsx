import React from 'react'
import bookImage1 from '../../image/img2.png'
import bookImage2 from '../../image/img3.png'
import Book from '../Book/Book'
import s from './style.module.css'


export default function Books() {
    const books = [
        {id: 1, img: bookImage1, title: 'Atomic One’s', price: 13.84, descr: 'As the book contains theoretical content as well as solved questions.', print: 'Printed Book'},
        {id: 2, img: bookImage2, title: 'The Dark Light', price: 86.11, descr: 'As the book contains theoretical content as well as solved questions.', print: 'Printed Book'}
    ]
  return (
    
    <div className={s.container}>
        <div className={s.title}> 
            <h1>The Author’s Book</h1>
        <p className={s.underline}></p>
        </div>
        
        <div className={s.books}>
            {
                books.map((book) => <Book key={book.id} {...book} />)
            }
        </div>
    </div>
  )
}
