import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ad from '../../assets/ad.jpg'
import './home.css'
import Card from  '../../components/cards/cards'
import { MyContext } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/logo.svg'


function Home (){

    const {showLogin,setShow} = useContext(MyContext)
    const [Loginstates,SetLoginStates] = useState('Sign Up')

    return(
        <div  className={showLogin?"Container-div":"Container-div"}>

            <Navbar />
            <div className="Banner">
                <img src={ad} alt="" />
            </div>
            <div className="cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            {showLogin &&  <div className="login">
            <div className="loginbox">
            <FontAwesomeIcon className="Cross-Icon" onClick={()=>setShow((prev)=> !prev)} icon={faXmark}/>
                <div className="imageContainer-form">
                <img src={logo} alt="" />
                </div>
                <div className="form-Container-login">
                    <form action="">
                        {Loginstates == 'Sign Up' ?<input type="text" placeholder="Username" /> :<></>}
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="password" />
                        <button >{Loginstates}</button>
                    </form>
                    <div className="info">
                    {Loginstates == 'Sign Up' ?<p  onClick={()=>SetLoginStates(('Sign In'))}> Alredy Have An Account? <span>Sign Up</span></p>:<p onClick={()=>SetLoginStates(('Sign Up'))}>Dont Have An Account? <span>Sign In</span></p>
                }
                    </div>
                </div>
              </div>
            </div>}
        </div>
    )
}

export default Home