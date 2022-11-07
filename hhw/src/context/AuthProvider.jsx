import React, { createContext, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth, db } from '../Firebase';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
//import { GoogleSignin } fro 'community/google-signin
//import { LoginManager, AccessToken } from 'react-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState([]);
  
  

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
      if(e === 'FirebaseError: Firebase: Error (auth/email-already-in-use).'){
        alert('이메일이 이미 사용 중입니다.')  
      }
    }
  }

  //로그인
  const signin = async ( email, password ) => {
      try{
         await signInWithEmailAndPassword(auth, email, password); 
      }catch(e){
         console.log(e);
      }
  }

  /** 회원정보 */
  const userimpl = async() => {
    onAuthStateChanged(auth, (authuser)=>{
      setUser(authuser)
    })
  }

  //로그아웃
  const signout = async() => {
    try{
        await signOut(auth);
        setUser(null)
        setUserInfo([])
    }catch(e){
        console.log(e)
    }
  }

  /** 사용자 데이터 */
  const userinfo = async()=>{
    const querys = await getDoc(doc(db, 'Users', auth.currentUser.uid))
    const data = querys.data()
    setUserInfo(data)
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
    <AuthContext.Provider value={{ user, setUser, signin, signup, signout, userimpl, userinfo, userInfo }}>
        { children }
    </AuthContext.Provider>
  )
}