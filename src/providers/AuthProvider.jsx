import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
// -------------
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)

    function createUser(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function loginUser(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
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
        });
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        setUser,
        authLoading,
        setAuthLoading,
        createUser,
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