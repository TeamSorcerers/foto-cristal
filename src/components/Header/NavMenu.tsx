"use client";
import { usePathname, useRouter } from "next/navigation";

export type NavMenuButton = {
    content: string;
    route: string;
}

export type NavMenuProps = {
    buttons: NavMenuButton[];
}

export default function NavMenu({ buttons }: NavMenuProps) {
    const router = useRouter();
    const pathname = usePathname();

    const changeRoute = (route: string) => {
        router.push(route);
    }

    return (
        <div className="flex gap-2 flex-col md:gap-8 md:flex-row">
            {
                buttons.map(
                    (buttonData, key) => (
                        <button
                            key={key}
                            onClick={() => changeRoute(buttonData.route)}
                            className={
                                `
                                font-roboto-thin
                                text-2xl
                                cursor-pointer
                                uppercase
                                hover:text-[#af886c]
                                hover:opacity-100
                                ${
                                    pathname === buttonData.route
                                    ? "text-[#a67b5b]"
                                    : "text-[#b8958d] opacity-80"
                                }`
                            }
                            disabled={pathname === buttonData.route}
                        >
                            {buttonData.content}
                        </button>
                    )
                )
            }
        </div>
    );
}