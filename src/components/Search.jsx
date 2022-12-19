import React, {useState, useContext} from 'react'
import { collection, query, where, getDocs, setDoc, doc } from "firebase/firestore";
import {db} from '../firebase'
import {AuthContext} from "../context/AuthContext "

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"), where("displayName", "==", username))

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data()) 
      })
    } catch(err) {
      setErr(true)
    }
  };


  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }


  const handleSelect = async() => {
    //check whether the group (chats in firestore) exists, if not create a new one   
    const combinedId = currentUser.uid > user.uid ?  currentUser.uid + user.uid : user.uid + currentUser.uid 
    
    try{
    const res = await getDocs(db,"chats", combinedId)
    //create user chats 
    if(!res.exists()) {
      await setDoc(doc, (db, "chats", combinedId), {messages: []});

      //create user chats
      
    }
    } catch (err) {
      setErr(true)
    }

  }
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      {err && <span>User Not Found!</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search