import React from 'react'
import { NavLink } from 'react-router-dom'
import { faTwitter, faFacebookF, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import s from './style.module.css'

export default function Header() {

  const isActive = ({isActive}) => isActive ? s.active : ' ';
 
  const links = [
    {id:1, title: 'Home', to: '/'},
    {id:2, title: 'Author', to: '/author'},
    {id:3, title: 'Companies', to: '/companies'},
    {id:4, title: 'Articles', to: '/articles'}
    ]
  return (
    <header>

   
    <div className={s.container}>
      
      
        <div className={s.logo}>
          <FontAwesomeIcon icon={faBookBookmark} />
          <h4> Pages </h4>
        </div>
        <div className={s.btns}>
          
          <button><FontAwesomeIcon  icon={faFacebookF} /></button>
          <button><FontAwesomeIcon icon={faLinkedinIn} /></button>
          <button><FontAwesomeIcon icon={faTwitter} /></button> 
        </div>
      
      
       <div className={s.nav_link}>
          {
            links.map(({id, title,to}) =><NavLink className={isActive} key={id} to={to}> {title}</NavLink>)
          }
       </div>
        
        
           <NavLink className={s.order} to='/order'> Order Today </NavLink>
        
        
        
      
    </div>
    </header>
  )
}
