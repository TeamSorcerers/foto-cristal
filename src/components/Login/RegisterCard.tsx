'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnField from "./ColumnField";
import TextField from "./TextField";
import TextLabel from "./TextLabel";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/context/AuthUserContext";
import { registerSchema, RegisterSchema } from "@/common/RegisterSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";

export default function RegisterCard() {
    const router = useRouter();
    const{ signInWithGoogle, createUserWithEmailAndPassword } = useAuth();

    const [loginError, setLoginError] = useState<string | null>(null);
    const [googleLoginError, setGoogleLoginError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
    });

    const handleLogin = () => {
        router.push("/login");
    }

    const handleRegisterWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                if (error.code === "auth/popup-closed-by-user") {
                    setGoogleLoginError("A janela de login foi fechada.");
                } else if (error.code === "auth/popup-blocked") {
                    setGoogleLoginError("A janela de login foi bloqueada.");
                } else {
                    setGoogleLoginError("Erro ao fazer login com o Google.");
                }
            });
    }

    const onSubmit = async (data: RegisterSchema) => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                reset();
                router.push("/dashboard");
            })
            .catch((error: FirebaseError) => {
                if (error.code === "auth/email-already-in-use") {
                    setLoginError("E-mail já cadastrado.");
                } else if (error.code === "auth/weak-password") {
                    setLoginError("A senha deve ter pelo menos 6 caracteres.");
                } else {
                    setLoginError("Erro ao cadastrar usuário.");
                }
            });
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
                    <TextLabel targetId="password" text="Senha" />
                    <TextField
                        type="password"
                        id="password"
                        name="password"
                        inputProps={{
                            ...register("password")
                        }}
                        isError={!!errors.password}
                    />
                    {errors.password && (
                        <p className="text-[#997070] font-urbanist text-lg">{`${errors.password.message}`}</p>
                    )}
                </ColumnField>
                <ColumnField>
                    <TextLabel targetId="confirm-password" text="Confirme sua senha" />
                    <TextField
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        inputProps={{
                            ...register("confirmPassword")
                        }}
                        isError={!!errors.confirmPassword}
                    />
                    {errors.confirmPassword && (
                        <p className="text-[#997070] font-urbanist text-lg">{`${errors.confirmPassword.message}`}</p>
                    )}
                </ColumnField>
                <ColumnField>
                    {
                        loginError && (
                            <p className="text-[#997070] font-urbanist text-lg">{`${loginError}`}</p>
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
                        disabled={isSubmitting}
                        type="submit"
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
                        `}
                        onClick={handleRegisterWithGoogle}
                        type="button"
                    >
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    {googleLoginError && (
                        <p className="text-[#997070] font-urbanist text-lg">{`${googleLoginError}`}</p>
                    )}
                </div>
            </form>
        </div>
    )
}