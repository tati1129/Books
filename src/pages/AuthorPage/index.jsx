import React from 'react'
import s from './style.module.css'
import authorImage from '../../image/img4.png'
import QRcode from '../../image/QRcode.png'
import Books from '../../components/Books/Books'
import AboutAuthor from '../../components/AboutAuthor/AboutAuthor'
export default function AuthorPage() {
  return (

    <div>
      <Books />
      <AboutAuthor />
    </div>
  )
}
