import React from 'react'
import './footer.css'
import cartrade from '../../assets/cartrade.svg'
import bikewale from '../../assets/bikewale.svg'
import olx from '../../assets/olx.svg'
import carwale from '../../assets/carwale.svg'
import mobility from '../../assets/mobility.svg'


export default function Footer() {
  return (
    <div className='footerConatiner'>
      <div className="top">
        <ul>
            <li><h1>Popular Locations</h1></li>
            <li><p>Kolkata</p></li>
            <li><p>Chennai</p></li>
            <li><p>Mumbai</p></li>
            <li><p>Kochi</p></li>
        </ul>
        <ul>
            <li><h1>Trending Locations</h1></li>
            <li><p>Bengaluru</p></li>
            <li><p>Hyderabad</p></li>
            <li><p>Delhi</p></li>
        </ul>
        <ul>
            <li><h1>About Us</h1></li>
            <li><p>Tech@Olx</p></li>
        </ul>
        <ul>
        <li><h1>Olx</h1></li>
        <li><p>Blog</p></li>
        <li><p>Help</p></li>
        <li><p>Siteman</p></li>
        <li><p>Legal & Privacy information</p></li>
        <li> <p> Vulnerability Disclosure Program</p></li>
        </ul>
      </div>
      <div className="sub-footer">
     <div className="div-footer-image">
        <img src={cartrade} alt="" />
        <img src={olx} alt="" />
        <img src={carwale} alt="" />
        <img src={bikewale} alt="" />
        <img src={mobility} alt="" />
     </div>
      </div>
    </div>
  )
}
