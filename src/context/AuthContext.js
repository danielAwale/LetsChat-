import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => { //children will represent our components
  const [currentUser, setCurrentUser] = useState({}) // this user will be used in every component in the app! To avoid props drilling


  useEffect(() => { //this will check if we have a user or not, if we do will set current user to the user
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user)
    })
  }, [])

}