
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import './App.css'

import { useState } from 'react';
import auth from './firease/firebase.init';

function App() {
  
  const googleProvider = new GoogleAuthProvider();
const [user,setUser]=useState(null)

  const handleGoogleSignIn =()=>{
signInWithPopup(auth,googleProvider)
.then((result)=>{
  console.log(result.user)
setUser(result.user)
})
.catch((error)=> console.log(error))
setUser(null)
  }

  const handleGoogleSignOut=()=>{
  signOut(auth)
  .then(()=>{
    console.log("sign out done")
    setUser(null)
  })
  .catch((error)=> console.log(error))
  }
  return (
    <>
     
      <h1>Google sign in</h1>
   <button onClick={handleGoogleSignIn}> Google sign in</button>
   <button onClick={handleGoogleSignOut}> Google sign Out</button>
   {
    user && <div>
      <h2>{user.displayName}</h2>
      <h2>{user.email}</h2>
    <img src={user.photoURL
} alt="" />
    </div>
   }
    </>
  )
}

export default App
