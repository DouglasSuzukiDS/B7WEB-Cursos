/*import firebase from 'firebase/compat/app'
import "firebase/auth";
//import { FacebookAuthProvider } from "firebase/auth";
import 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

import { firebaseConfig } from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export default {
   fbPopUp: async() => {
      const provider = new firebase.auth.FacebookAuthProvider()
      console.log(provider)
      let result = await firebaseApp.auth().signInWithPopup(provider)

      return result
   }
}*/

import { initializeApp } from 'firebase/app'
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new FacebookAuthProvider()

export default {
   fbPopUp: async() => {
      let result = await signInWithPopup(auth, provider)
      console.log(result)
      return result
   }
}

// https://www.youtube.com/watch?v=2TxirN6aI_s