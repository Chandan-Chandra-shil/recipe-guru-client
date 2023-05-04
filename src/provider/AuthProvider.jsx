import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.Config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user,setUser] = useState(null)
  
  const createUser = (email, password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  const logIn = (email, password) => {
   return signInWithEmailAndPassword(auth,email,password)
  }

  /* useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
   })
    return () => {
      return unsubscribe()
    }
  },[]) */

  const authInfo = {
    user,
    createUser,
    logIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;