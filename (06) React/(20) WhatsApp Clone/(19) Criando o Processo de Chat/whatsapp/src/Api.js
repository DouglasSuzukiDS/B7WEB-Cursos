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
import { getFirestore, doc, setDoc, getDocs, collection, addDoc, updateDoc, arrayUnion, onSnapshot, getDoc } from 'firebase/firestore'
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
   },

   addNewChat: async(user, user2) => {
      /*let newChat = await db.collection('chats').add({
         messages: [],
         users: [user.id, user2.id]
      })

      db.collection('users').doc(user.id).update({
         chats: firebase.firestore.FieldValue.arrayUnion({
            chatId: newChat.id,
            title: user2.name,
            image: user2.avatar,
            with: user2.id
         })
      })

      db.collection('users').doc(user2.id).update({
         chats: firebase.firestore.FieldValue.arrayUnion({
            chatId: newChat.id,
            title: user.name,
            image: user.avatar,
            with: user.id
         })
      })*/

      let newChat = await addDoc(collection(db, 'chats'), {
         messages: [],
         users: [user.id, user2.id]
      })

      await updateDoc(doc(db, 'users', user.id), {
         chats: arrayUnion({
            chatId: newChat.id,
            title: user.name,
            image: user.avatar,
            with: user.id
         })
      })

      await updateDoc(doc(db, 'users', user2.id), {
         chats: arrayUnion({
            chatId: newChat.id,
            title: user.name,
            image: user.avatar,
            with: user.id
         })
      })
   },

   onChatList: (userId, setChatList) => {
      /*return db.collection('users').doc(userId).onSnapshot(doc => {
         if(doc.exists) {
            let data = doc.data()

            if(data.chats) {
               setChatList(data.chats)
            }
         }
      })*/

      return onSnapshot(doc(db, 'users', userId), doc => {
         if(doc.exists) {
            let data = doc.data()

            if(data.chats) {
               setChatList(data.chats)
            }
         }
      })
   },

   onChatContent: (chatId, setList, setUsers) => {
     /* return db.collection('chats').doc(chatId).onSnapshot(doc => {
         if(doc.exists) {
            let data = doc.data()

            if(data.chats) {
               setList(data.messages)
            }
         }
      })*/

      return onSnapshot(doc(db, 'chats', chatId), doc => {
         if(doc.exists) {
            let data = doc.data()

            if(data.chats) {
               setList(data.messages)
               setUsers(data.users)
            }
         }
      })
   },
   
   sendMessage: async(chatData, userId, type, body, users) => {
      console.log(chatData)
      console.log(userId)
      console.log(type)
      console.log(body)
      console.log(`Author ID: ${userId}`)
      let now = new Date()

      /*db.collection('chats').doc(chatData.chatId).update({
         messages: firebase.firestore.FieldValue.arrayUnion({
            type,
            author: userId,
            body,
            date: now
         })
      })
      
      for(let i in users) {
         let u = await db.collection('users').doc(users[i]).get()
         let uData = u.data()

         if(uData.chats) {
            let chats = [...uData.chats]

            for(let e in chats) {
               if(chats[e].chatId === chatData.chatId) {
                  chats[e].lastMessage = body
                  chats[e].lastMessageDate = now
               }
            }


            await db.collection('users').doc(users[i]).update({
               chats
            })
         }
      }*/

      await updateDoc(doc(db, 'chats', chatData.chatId), {
         messages: arrayUnion({
            type,
            author: userId,
            body,
            date: now
         })
      })

      for(let i in users) {
         let u = await getDoc(doc(db, 'users', users[i]))
         let uData = u.data()

         if(uData.chats) {
            let chats = [...uData.chats]

            for(let e in chats) {
               if(chats[e].chatId === chatData.chatId) {
                  chats[e].lastMessage = body
                  chats[e].lastMessageDate = now
               }
            }


            await updateDoc(doc(db, 'users', users[i]), {
               chats
            })
         }
      }
   }
}

// https://www.youtube.com/watch?v=2TxirN6aI_s
// https://github.com/BlenoVale/WhtasAppClone/