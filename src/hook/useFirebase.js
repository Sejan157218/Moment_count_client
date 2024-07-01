import { useEffect, useState } from 'react';

// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingAdmin, setIsLoadingAdmin] = useState(true);
    const [authError, setAuthError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminToken, setAdminToken] = useState('');



    
    return {
        user,
        isLoadingAdmin,
        adminToken,
        isAdmin,
        authError,
        isLoading,
    }
};

export default useFirebase;