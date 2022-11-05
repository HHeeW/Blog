import React, { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth, db } from '../Firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
//import { GoogleSignin } fro 'community/google-signin
//import { LoginManager, AccessToken } from 'react-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  //로그인
  const signin = async ( email, password ) => {
      try{
         await signInWithEmailAndPassword(auth, email, password); 
      }catch(e){
         console.log(e);
      }
  }

  //로그아웃
  const signout = async() => {
    try{
        await signOut(auth);
    }catch(e){
        console.log(e)
    }
  }

  //회원가입
  const signup = async(email, password, name) => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      .then(()=>{
        setDoc(doc(db, 'Users', auth.currentUser.uid),{
          name: name,
          gender: '',
          age: '',
          address: '',
          tel: '',
          email: email,
          userImg: '',
          createAt: Timestamp.fromDate(new Date())
        })
      .catch(error=> console.log('데이터저장중 에러발생', error))  
      })
    }catch(e){
      console.log('회원가입에러',e)
      if(e == 'FirebaseError: Firebase: Error (auth/email-already-in-use).'){
        alert('이메일이 이미 사용 중입니다.')  
      }
    }
  }

  //게시물 업로드
  // const postupload = async (post) => {
  //   try{
  //       await createUserWithEmailAndPassword(email, password)
  //       .then(()=>{
  //          firestore().collection('members').doc(auth().currentUser.uid)
  //          .set({
  //              fname: '',
  //              gender: '',
  //              age: 20,
  //              average: 99,
  //              email: email,
  //              tel: '',
  //              createAt: firestore.Timestamp.fromDate(new Date()),
  //              userImg: null
  //          })
  //        .catch(error=> console.log('데이터저장중 에러발생', error))  
  //       })

  //   }catch(e){
  //      console.log(e)
  //   }
  // }

  return (
    <AuthContext.Provider value={{ user, setUser, signin, signup, signout }}>
        { children }
    </AuthContext.Provider>
  )
}