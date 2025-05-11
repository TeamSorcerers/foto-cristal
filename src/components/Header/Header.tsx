import Image from "next/image";
import NavMenu, { NavMenuButton } from "./NavMenu";

import LogoImage from "@/assets/images/logo.png";

const navButtons: NavMenuButton[] = [
    {
        content: "Home",
        route: "/"
    },
    {
        content: "História",
        route: "/about"
    },
    {
        content: "Serviços",
        route: "/services"
    },
    {
        content: "Área de envio",
        route: "/submit"
    },
    {
        content: "Contato",
        route: "/contact"
    }
]

export default function Header() {
    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex flex-col pt-6 gap-1 items-center">
                <Image src={LogoImage} alt="Logo" className="w-40 h-16" />
                <h1
                    className={`
                        font-roboto-extra-light
                        text-[#daa520]
                        text-5xl
                        md:text-6xl
                        uppercase
                        transform
                        scale-y-75
                        origin-left
                    `}
                >
                    Foto Cristal
                </h1>
            </div>
            <div className="w-full py-2 flex justify-center">
                <NavMenu buttons={navButtons} />
            </div>
        </div>
    )
}