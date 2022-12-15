import React from 'react'
import Img from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
  const storageRef = ref(storage, displayName);

  const uploadTask = uploadBytesResumable(storageRef, file);

  // Register three observers:
  uploadTask.on(
    (error) => {
      setErr(true)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL
        })
        await setDoc(doc(db, "users", res.user.uid), {
          displayName,
          email, 
          photoURL: downloadURL,
        })
      });
    }
);

    } catch {
      setErr(true);
    }
    
  }


  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Letz Chat!</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor="file">
            <img src={Img} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already Signed up? Login </p>
      </div>
    </div>
  )
}

export default Register
