import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.Config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  
  
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
   return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut = () => {
   return signOut(auth)
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      setUser(loggedUser)
   })
    return () => {
      return unsubscribe()
    }
  },[])

  const authInfo = {
    user,
    createUser,
    logIn,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;