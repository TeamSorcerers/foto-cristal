'use client';

import ClientArea from "@/components/Dashboard/ClientArea";
import Header from "@/components/Header/Header";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard(){
    const { authUser, loading } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!authUser && !loading) {
        router.push('/login');
      }
    }, [authUser, loading, router]);

    if (loading || !authUser) {
        return (
          <div className="w-full h-full">
            <div className="w-full h-full flex md:flex-row items-center justify-center gap-2">
              <div className="w-16 h-16 border-4 border-t-4 border-[#C0C0B0] rounded-full animate-spin"></div>
            </div>
          </div>
        );
    }

    return (
      <div className="w-full h-full">
        <Header />
        <div className="md:px-4 md:py-6 md:max-w-screen-xl mx-auto flex flex-col gap-8 items-center">
          <ClientArea />
        </div>
      </div>
    );
}