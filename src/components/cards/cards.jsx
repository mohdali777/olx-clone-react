import React from 'react'
import './cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



export default function Card({price,title,state,District,images,category,time}) {
  return (
    <div className='Container-card'>
      <div className="imgWrapper">
      <img src={images} alt="" />
       <FontAwesomeIcon className='icon-img' icon={faHeart} />
      </div>
      <div className="description">
        <ul>
        <li><h3>₹{price}</h3></li>
        <li><p >{title}</p></li>
        <li><p className='brand'>{category}</p></li>
        <li className='Loc'><p className='location'>{state},{District}</p> <p className='location'> {time}</p></li>
        </ul>
      </div>
    </div>
  )
}
