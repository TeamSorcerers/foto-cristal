'use client';
import useFirebaseAuth from '@/lib/firebase/useFirebaseAuth';
import { User, UserCredential } from 'firebase/auth';
import { createContext, useContext} from 'react';

export interface AuthUserContextProps {
    authUser: User | null;
    loading: boolean;
    signInWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
    createUserWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<User | null>;
}

const authUserContext = createContext<AuthUserContextProps>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async () => {
    throw new Error('signInWithEmailAndPassword not implemented');
  },
  createUserWithEmailAndPassword: async () => {
    throw new Error('createUserWithEmailAndPassword not implemented');
  },
  signOut: async () => {
    throw new Error('signOut not implemented');
  },
  signInWithGoogle: async () => {
    throw new Error('signInWithGoogle not implemented');
  },
});

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);