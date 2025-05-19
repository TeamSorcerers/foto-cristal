'use client';
import Header from "@/components/Header/Header";
import LoginCard from "@/components/Login/LoginCard";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login(){
  const { authUser, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authUser && !loading) {
      router.push('/dashboard');
    }
  }, [authUser, loading, router]);

  if (loading || authUser) {
    return (
      <div className="w-full h-full">
        <Header />
        <div className="px-4 py-6 max-w-screen-xl mx-auto flex flex-col gap-8 items-center">
          <div className="w-16 h-16 border-4 border-t-4 border-[#C0C0B0] rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full">
      <Header />
      <div className="px-4 py-6 max-w-screen-xl mx-auto flex flex-col gap-8 items-center">
        <h1 className="text-3xl text-[#b8958d] uppercase text-center">
          Entrar em Foto Cristal
        </h1>
        <LoginCard />
      </div>
    </div>
  );
}