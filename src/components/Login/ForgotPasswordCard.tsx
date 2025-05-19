'use client';
import ColumnField from "./ColumnField";
import TextField from "./TextField";
import TextLabel from "./TextLabel";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { forgotPasswordSchema, ForgotPasswordSchema } from "@/common/ForgotPasswordSchema";

export default function ForgotPasswordCard() {
    const router = useRouter();
    const{ sendPasswordResetEmail } = useAuth();

    const [requestError, setRequestError] = useState<string | null>(null);
    const [requestSent, setRequestSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ForgotPasswordSchema>({
        resolver: zodResolver(forgotPasswordSchema),
    });

    const handleLogin = () => {
        router.push("/login");
    }

    const onSubmit = async (data: ForgotPasswordSchema) => {
        try {
            await sendPasswordResetEmail(data.email);
            setRequestSent(true);
        } catch {
            setRequestError("Erro ao enviar e-mail de recuperação.");
        }

        reset();
    }

    if (requestSent) {
        return (
            <div className="w-full md:w-2/4 bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md text-center">
                <p className="text-[#789970] font-urbanist text-lg p-4">
                    E-mail de recuperação enviado com sucesso!
                </p>
            </div>
        );
    }

    return (
        <div className="w-full md:w-2/4 bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col py-4">
                <ColumnField>
                    <TextLabel targetId="email" text="Endereço de e-mail" />
                    <TextField
                        type="text"
                        id="email"
                        name="email"
                        inputProps={{
                            ...register("email")
                        }}
                        isError={!!errors.email}
                    />
                    {errors.email && (
                        <p className="text-[#997070] font-urbanist text-lg">{`${errors.email.message}`}</p>
                    )}
                </ColumnField>
                <ColumnField>
                    {
                        requestError && (
                            <p className="text-[#997070] font-urbanist text-lg">{`${requestError}`}</p>
                        )
                    }
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
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Recuperar senha
                    </button>
                </div>
                <div className="w-full px-8 p-2 flex flex-col gap-1 items-center">
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
                        Voltar para o login
                    </button>
                </div>
            </form>
        </div>
    )
}