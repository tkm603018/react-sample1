import React from 'react'
import firebase from '../../firebase/firebase'
import { createContainer } from 'unstated-next';

export default () => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
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
        {user ? (
          <span style={{color: '#000'}}>Logout</span>
        ) : (
          <span style={{color: '#000'}}>Login</span>
        )}
      </>
    )
}
