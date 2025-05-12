import ColumnField from "./ColumnField";
import TextField from "./TextField";
import TextLabel from "./TextLabel";

export default function LoginCard() {
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
                        `}>
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}