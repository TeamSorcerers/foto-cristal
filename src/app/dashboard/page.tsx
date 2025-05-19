'use client';

import DashboardMenu from "@/components/DashboardMenu/DashboardMenu";
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
        <div className="w-full h-full flex md:flex-row items-center gap-2">
            <DashboardMenu />
            <main className="w-full h-full flex flex-col items-center">

            </main>
        </div>
      </div>
    );
}