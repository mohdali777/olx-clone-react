import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const MyContext = createContext();

function Context({ children }) {
  const [isLogin, changeLogin] = useState(false);
  const [loginStatus, setLogin] = useState(false);
  const [showLogin, setShow] = useState(false);
  const [user, setUser] = useState(null);
  const [counter,SetCounter] = useState(0)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, changeLogin, loginStatus, setLogin, showLogin, setShow, user, setUser,counter,SetCounter }}>
      {children}
    </MyContext.Provider>
  );
}

export { MyContext, Context };
