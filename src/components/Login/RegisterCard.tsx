'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnField from "./ColumnField";
import TextField from "./TextField";
import TextLabel from "./TextLabel";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";

export default function RegisterCard() {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/login");
    }

    return (
        <div className="w-full md:w-2/4 bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md">
            <form action="#" method="post" className="w-full flex flex-col py-4">
                <ColumnField>
                    <TextLabel targetId="email" text="Endereço de e-mail" />
                    <TextField type="text" id="email" name="email" />
                </ColumnField>
                <ColumnField>
                    <TextLabel targetId="password" text="Senha" />
                    <TextField type="password" id="password" name="password" />
                </ColumnField>
                <ColumnField>
                    <TextLabel targetId="confirm-password" text="Confirme sua senha" />
                    <TextField type="password" id="confirm-password" name="confirm-password" />
                </ColumnField>
                <div className="w-full px-8 p-2 flex flex-col gap-1 items-center">
                    <button
                        className={`
                        w-3/4
                        h-8
                        uppercase
                        bg-[#C0C0B0]
                        hover:bg-[#B0B0A0]
                        rounded-l-md
                        rounded-r-md
                        cursor-pointer
                        text-xl
                        text-[#7A7A6A]
                        hover:text-[#656555]
                        transition
                        duration-200
                        ease-in-out
                        `}
                    >
                        Cadastrar
                    </button>
                </div>
                <div className="w-full px-8 p-1 flex flex-col gap-1 items-center">
                    <button
                        className={`
                        w-3/4
                        h-8
                        uppercase
                        rounded-l-md
                        rounded-r-md
                        cursor-pointer
                        text-sm
                        text-[#7A7A6A]
                        hover:text-[#656555]
                        transition
                        duration-200
                        ease-in-out
                        `}
                        onClick={handleLogin}
                        type="button"
                    >
                        Já tem uma conta? Entre aqui!
                    </button>
                </div>
                <div className="flex items-center w-full px-8 my-1.5">
                    <hr className="flex-grow border-t border-[#E5E5D5]" />
                    <span className="mx-4 text-[#7A7A6A] text-base">Ou cadastrar com</span>
                    <hr className="flex-grow border-t border-[#E5E5D5]" />
                </div>
                <div className="w-full px-8 p-2 flex flex-col gap-1 items-center">
                    <button
                        className={`
                        w-1/3
                        h-12
                        uppercase
                        border-1
                        border-[#C0C0B0]
                        rounded-md
                        cursor-pointer
                        text-2xl
                        text-[#7A7A6A]
                        hover:text-[#656555]
                        transition
                        duration-200
                        ease-in-out
                    `}>
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                </div>
            </form>
        </div>
    )
}