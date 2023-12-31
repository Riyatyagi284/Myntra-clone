import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, } from '../Firebase';
import { login } from "../redux/Slices/AuthSlice"
import "./PageStyleCompo/Login.css"
import MyntraLoginImage from "../Images/Myntra-Login-Image.avif"
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const loginToApp = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                })
            );
            if (location.state?.from) {
                navigate(location.state.from)
            }
            // else {
            //     navigate("/")
            // }
        }).catch((err) => {
            alert(err);
        });
    };

    const register = () => {
        if (!name) {
            return alert('Please Enter Your Full Name');
        }

        console.log("register the user");

        createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
            updateProfile(userAuth.user, {
                displayName: name,
                photoURL: profilePic,
            })
                .then(
                    dispatch(
                        login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic,
                        })
                    )
                )
                .catch((error) => {
                    console.log('Error updating user profile:', error);
                    alert('Error updating user profile. Please try again.');
                })
        })
            .catch((error) => {
                console.log('Error registering user:', error);
                alert('Error registering user. Please try again.', error);
            })


    };

    return (
        <div className="myntra-auth-page">
            <div className="myntra-auth-page-content">
                <img src={MyntraLoginImage} alt="myntra-auth-pic" />
                <div className="login-data-container">
                    <div className="login">
                        <h2>Login <span>or</span> Signup</h2>
                        <form >
                            <input value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full Name"
                                type="text" />

                            <input value={profilePic}
                                onChange={(e) => setProfilePic(e.target.value)}
                                placeholder="Profile Picture URL"
                                type="text" />

                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                type="email" />

                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password" />


                            <button type="submit" onClick={loginToApp}>Sign In</button>
                        </form>

                        <p>
                            Not a member?{''}
                            <span className='login__register' onClick={register}>Register Now</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;