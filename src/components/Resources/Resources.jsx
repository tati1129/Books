import React from 'react'
import photo1 from '../../image/photo1.png';
import photo2 from '../../image/photo2.png';
import photo3 from '../../image/photo3.png';
import ResourcesItem from '../ResourcesItem/ResourcesItem';
import s from './style.module.css'

export default function Resources() {
    const resources = [
        {id: 1, image: photo1, title: 'Significant reading has more info number', descr: 'Override the digital divide with additional clickthroughs from DevOps for real-time.', date: 'October 6, 2021'},
        {id: 2, image: photo2, title: 'Many variations of pass majority have suffered', descr: 'Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.', date: 'October 6, 2021'},
        {id: 3,  image: photo3, title: 'Words which don’t look even slightly believable', descr: 'Podcasting operational change management of workflows to establish a framework.', date: 'October 6, 2021'}
    ]
  return (
    <div className={s.container}>
        <p className={s.title}>Articles & Resources</p>
        <p className={s.underline}></p>
        <div className={s.container_item}>
           {
                resources.map(item => <ResourcesItem key={item.id} {...item} />)
            } 
        </div>
        
    </div>
  )
}
