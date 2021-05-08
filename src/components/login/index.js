import React from 'react'
import firebase from '../../firebase/firebase'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Login from '../login/Login'
// import './App.css'

export default () => {
  const [user, setUser] = React.useState(null)
  // const [displayName, setDisplayName] = React.useState(null)
  // const [email, setEmail] = React.useState(null)
  // const [emailVerified, setEmailVerified] = React.useState(null)
  const [photoURL, setPhotoURL] = React.useState('')
  // const [isAnonymous, setIsAnonymous] = React.useState(null)
  // const [uid, setUid] = React.useState(null)
  // const [providerData, setProviderData] = React.useState(null)

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        // console.log('user:', user)
        // setUid(user.uid)
        // setDisplayName(user.displayName)
        // setEmail(user.email)
        // setEmailVerified(user.emailVerified)
        setPhotoURL(user.photoURL)
        // setIsAnonymous(user.isAnonymous)
        // setProviderData(user.providerData)
        console.log('user true', user)
      } else {
        console.log('user false')
      }
    })
  }
  )

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
    console.log('login')
  }

  const logout = () => {
    firebase.auth().signOut()
    console.log('logout')
  }

  return (
    <>
      <center style={{margin: `10rem auto`}}>
      {user ? (
        <>
          <p className="App-intro">UID: {user && user.uid}</p>
          <Avatar type="url" src={user && user.photoURL} alt=""></Avatar>
        </>
        ) : (
          <></>    
      )}
      
        {user ? (
          <center><Button onClick={logout}>Logout</Button></center>
        ) : (
          <Button onClick={login}>Login</Button>
          )}
      </center>
    </>
    )
}
