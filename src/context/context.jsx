import React, { createContext, useState } from 'react';
const MyContext = createContext();
function Context({ children }) {
  const [isLogin, changeLogin] = useState(false);
const [loginStatus,setLogin] = useState(false)
const [showLogin,setShow] = useState(false)


  return (
    <MyContext.Provider value={{ isLogin, changeLogin,loginStatus,setLogin ,showLogin,setShow}}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, Context };  
