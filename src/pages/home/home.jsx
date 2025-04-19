import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import ad from '../../assets/ad.jpg'
import './home.css'
import Card from  '../../components/cards/cards'
import { MyContext } from "../../context/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from '../../assets/logo.svg'
import { db, login, signup } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Footer from "../../components/footer/footer";




function Home (){
    const [products,setProducts] = useState([])

    const {showLogin,setShow,counter,SetCounter} = useContext(MyContext)
    const {setLogin} = useContext(MyContext)
    const [Loginstates,SetLoginStates] = useState('Sign Up')
    const [username,setname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "products"));
            const productList = querySnapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setProducts(productList);
          } catch (error) {
            console.error("Error fetching products:", error);
          }
        };
    
        fetchProducts();
      }, []);
    



    const handleSubmit =  async(e)=>{
        e.preventDefault();
        if(Loginstates == 'Sign Up'){
           let user = await signup(username,email,password)
           if(user){
            setLogin(true)
            setShow(false)
            setname('')
            setEmail('')
            setPassword('')
           }
        }else{
            let user = await login(email,password)
            if(user){
                setLogin(true)
                setShow(false)
                setname('')
                setEmail('')
                setPassword('')
            }else{
                alert("error")
            }
        }
    }
 
    

    return(
        <div  className={showLogin?"Container-div":"Container-div"}>
            <div className="navDIv"> <Navbar />
            </div>
            <div className="Banner">
                <img src={ad} alt="" />
            </div>
            <h1>{counter}</h1>
            <button onClick={()=> SetCounter((prev)=>prev+=1)}>Click</button>
            <div className="cards">
                {products.map((product)=>(
                <Card key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                District={product.District}
                state={product.state}
                images={product.images[0]} 
                category={product.category}
                 time={product.createdAt} />
                ))}
            </div>
            {showLogin &&  <div className="login">
            <div className="loginbox">
            <FontAwesomeIcon className="Cross-Icon" onClick={()=>setShow((prev)=> !prev)} icon={faXmark}/>
                <div className="imageContainer-form">
                <img src={logo} alt="" />
                </div>
                <div className="form-Container-login">
                    <form action="">
                        {Loginstates == 'Sign Up' ?<input value={username} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Username" /> :<></>}
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                        <button onClick={handleSubmit}>{Loginstates}</button>
                    </form>
                    <div className="info">
                    {Loginstates == 'Sign Up' ?<p  onClick={()=>SetLoginStates(('Sign In'))}> Alredy Have An Account?<span>Sign In</span></p>:<p onClick={()=>SetLoginStates(('Sign Up'))}>Dont Have An Account? <span>Sign Up</span></p>
                }
                    </div>
                </div>
              </div>
            </div>}
            <Footer/>
        </div>
    
    )
}

export default Home