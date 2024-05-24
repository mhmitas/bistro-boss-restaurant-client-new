import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import useAxiosPublic from '../components/hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app)
// -------------
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function popUpSignIn(provider) {
        setAuthLoading(true)
        return signInWithPopup(auth, provider)
    }
    function logOutUser() {
        return signOut(auth)
    }
    function updateUserProfile(name, photo) {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setAuthLoading(false)
            console.log('currentUser =>', currentUser);
            if (currentUser) {
                // get token and store:
                const userInfo = { email: currentUser?.email, uid: currentUser?.uid }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                    })
            } else {
                // todo: remove token
                localStorage.removeItem('access-token')
            }
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        setUser,
        authLoading,
        setAuthLoading,
        createUser,
        popUpSignIn,
        loginUser,
        logOutUser,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;