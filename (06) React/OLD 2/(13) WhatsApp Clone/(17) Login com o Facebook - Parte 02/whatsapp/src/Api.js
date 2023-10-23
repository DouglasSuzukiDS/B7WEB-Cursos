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
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore'
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import { firebaseConfig } from './firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const provider = new FacebookAuthProvider()

const db = getFirestore(firebaseApp)

export default {
   fbPopUp: async() => {
      let result = await signInWithPopup(auth, provider)
      console.log(result)
      return result
   },

   addUser: async(u) => {
      /*await db.collection('users').doc(u.id).set({
         name: u.name,
         avatar: u.avatar
      }, { merge: true }) // Se ele achar ele atualiza, se não ele cria*/

      await setDoc(doc(db, 'users', u.id), {
         name: u.name,
         avatar: u.avatar
      })
   },

   getContactList: async(userId) => {
      let list = []

      // let results = await db.collection('users').get()
      let results = await getDocs(collection(db, 'users'))

      results.forEach(result => {
         let data = result.data()

         if(result.id !== userId) {
            list.push({
               id: result.id,
               name: data.name,
               avatar: data.avatar
            })
         }
      })

      return list
   }
}

// https://www.youtube.com/watch?v=2TxirN6aI_s