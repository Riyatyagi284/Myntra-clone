import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./redux/Slices/AuthSlice";
import { auth, onAuthStateChanged } from "./Firebase"
import Login from "./Pages/Login";
import MainComponent from './MainComponent';

const AuthStateChange = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <>
      {/* {
        !user ? (
          <Login />
        ) : (
          <MainComponent />
        )
      } */}

      <MainComponent />
      
    </>
  )
}

export default AuthStateChange