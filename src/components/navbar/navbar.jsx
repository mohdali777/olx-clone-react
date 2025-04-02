import React, { useContext, useState } from "react";
import logo from '../../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch ,faClipboardList,faGear, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faFileAlt, faBell,faHeart,faComment,faCreditCard, faCircleQuestion ,faCircle} from '@fortawesome/free-regular-svg-icons';
import './navbar.css'
import { MyContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function Navbar (){
const [dropStatus,setStatus] = useState(false)
const {loginStatus,setLogin} = useContext(MyContext)
const {showLogin,setShow} = useContext(MyContext)
const navigate = useNavigate()

    return(
      <nav>
        <div className="Navbar" >
            <img src={logo} alt="" />
             <div className="inputFeild">

                <div className="SearchLoc">
                <input type="text" name="" id="" placeholder="india"/>
                <FontAwesomeIcon icon={faSearch} className="iconsNav"  /> 
                </div>

                <div className="searchProducts">
                <input type="text" name="" id=""  placeholder="Find Cars,Mobile Phones and more.."/>
                <FontAwesomeIcon icon={faSearch} className="iconsNav search" /> 
                </div>
                <select name="" id="" >
                    <option value="">ENGLISH</option>
                    <option value="">Hindi</option>
                </select>
             </div>
             <div className="buttons">
                <div className="iconsButtons">
                <FontAwesomeIcon icon={faHeart} onClick={   ()=>navigate('/add-product')} className="iconB"/>
                    {
                        loginStatus? <><FontAwesomeIcon icon={faBell} className="iconB"/>
               <FontAwesomeIcon icon={faComment} className="iconB"/></>:<></>
                    }
                </div>
                {loginStatus?<div className="profileIcon">
                <FontAwesomeIcon onClick={() => setStatus(prev => !prev)} icon={faCircle} className="iconB"/>
                {dropStatus? <div className="DropDownP">
                    <div className="profilDropDown">
                        <ul>
                            <li>
                            <FontAwesomeIcon icon={faCircle} className="icon-Profile"/>
                            <h1>Mohd Ali</h1>
                            </li>
                        </ul>                  
                    <button>View And Edit Profle</button>
                    </div>
                    <div className="profileDown2">
                        <ul>
                        <hr />

                        <li> <FontAwesomeIcon icon={faFileAlt} className="iconBb"/>
                        <h1>My ADS</h1>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faClipboardList} className="iconBb"/>
                        <h1>Buy Business And Package</h1>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCreditCard} className="iconBb"/>
                        <h1>Bought Package & Billing</h1>
                        </li>
                        <hr />
                        </ul>
                    </div>
                    <div className="profileDown3">
                    <ul>
                        <li> <FontAwesomeIcon icon={faCircleQuestion} className="iconBb"/>
                        <h1>Help</h1>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faGear} className="iconBb"/>
                        <h1>Setting</h1>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faArrowLeft} className="iconBb"/>
                        <h1>Logout</h1></li>
                        </ul>
                    </div>
                </div>:<></>}
                
                </div>: <><div className="Loginst">
                <h1 onClick={()=>setShow((showLogin)=> !showLogin)}>Login</h1>
                </div></>}
                
            <div className="button-container">
                <button className="sell-button" onClick={()=> setLogin((prev)=>!prev)}>
                 <span className="plus">+</span>
                  <span>SELL</span>
                    </button>
               </div>
             </div>
        </div>
      </nav>
      
    )
}

export default Navbar