import React from 'react'
import './cards.css'
import laptop from '../../assets/laptop.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';



export default function Card() {
  return (
    <div className='Container-card'>
      <div className="imgWrapper">
      <img src={laptop} alt="" />
       <FontAwesomeIcon className='icon-img' icon={faHeart} />
      </div>
      <div className="description">
        <ul>
        <li><h3>$55,000</h3></li>
        <li><p >2019-2020</p></li>
        <li><p className='brand'>HP</p></li>
        <li className='Loc'><p className='location'>Kannur,Chrupuza</p> <p className='location'>March 25</p></li>
        </ul>
      </div>
    </div>
  )
}
