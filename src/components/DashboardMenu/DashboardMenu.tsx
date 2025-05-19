'use client';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LogoImage from "@/assets/images/logo.png";
import Image from "next/image";
import { useAuth } from "@/context/AuthUserContext";

export default function DashboardMenu() {
    const { signOut, loading, authUser } = useAuth();
    
    const handleLogout = () => {
        signOut()
            .then(() => {
                console.log("Logout successful");
                window.location.href = "/login";
            })
            .catch((error: Error) => {
                console.error("Error during logout:", error);
            });
    }

    if (loading || !authUser) {
        return <></>;
    }
    
    return (
        <>
            {/* Menu lateral desktop */}
            <div
                className="h-full bg-[#e8eac7] transition-all duration-100 ease-in-out hidden md:block"
            >
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                    <Image src={LogoImage} alt="Logo" className="w-36 h-12 md:w-20 md:h-8" />
                    <h1
                        className={`
                        font-roboto-extra-light
                        text-[#daa520]
                        text-3xl
                        md:text-4xl
                        uppercase
                        transform
                        scale-y-75
                        origin-left
                        text-center    
                        `}
                    >
                        Foto Cristal
                    </h1>
                    <nav className="w-full h-full flex flex-col items-left gap-4 py-10 px-4">
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a href="#" className="text-lg text-[#b8958d]">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg text-[#b8958d]">Sobre</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg text-[#b8958d]">Serviços</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg text-[#b8958d]">Contato</a>
                            </li>
                            <li>
                                <a href="#" className="text-lg text-[#b8958d]" onClick={handleLogout}>Sair</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* Menu de hamburger mobile */}
            <div
                className="absolute top-1.5 left-1.5 w-16 h-16 flex items-center justify-center cursor-pointer md:hidden"
            >
                <button>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </>
    );
}