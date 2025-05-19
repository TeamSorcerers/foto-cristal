"use client";
import { useState, useEffect } from 'react'
import { auth } from './client';

import {
  onAuthStateChanged as _onAuthStateChanged,
  createUserWithEmailAndPassword as _createUserWithEmailAndPassword,
  signInWithEmailAndPassword as _signInWithEmailAndPassword,
  sendPasswordResetEmail as _sendPasswordResetEmail,
  confirmPasswordReset as _confirmPasswordReset,
  signOut as _signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const authStateChanged = async (user: User | null) => {
    if (!user) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setAuthUser(user);

    setLoading(false);
  };

  const signInWithEmailAndPassword = (email: string, password: string) =>
    _signInWithEmailAndPassword(auth, email, password);

  const createUserWithEmailAndPassword = (email: string, password: string) =>
    _createUserWithEmailAndPassword(auth, email, password);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setAuthUser(result.user);
      setLoading(false);
      return result.user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }

  const signOut = () =>
    _signOut(auth).then(clear);

  const sendPasswordResetEmail = (email: string) =>
    _sendPasswordResetEmail(auth, email);

  const confirmPasswordReset = (code: string, newPassword: string) =>
    _confirmPasswordReset(auth, code, newPassword);

  const onAuthStateChanged = (cb: (user: User | null) => void) => {
     return _onAuthStateChanged(auth, cb);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGoogle,
    signOut,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}