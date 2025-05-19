'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ColumnField from "./ColumnField";
import TextField from "./TextField";
import TextLabel from "./TextLabel";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthUserContext";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/common/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

export default function LoginCard() {
    const router = useRouter();
    const{ signInWithGoogle, signInWithEmailAndPassword } = useAuth();

    const [loginError, setLoginError] = useState<string | null>(null);
    const [googleLoginError, setGoogleLoginError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const handleRegister = () => {
        router.push("/register");
    }

    const handleForgotPassword = () => {
        router.push("/forgot-password");
    }

    const handleLoginWithLogin = () => {
        signInWithGoogle()
        .then(() => {
            router.push("/dashboard");
        })
        .catch((error: FirebaseError) => {
            if (error.code === "auth/popup-closed-by-user") {
                setGoogleLoginError("A janela de login foi fechada.");
            } else if (error.code === "auth/popup-blocked") {
                setGoogleLoginError("A janela de login foi bloqueada.");
            } else {
                setGoogleLoginError("Erro ao fazer login com o Google.");
            }
        });
    }

    const onSubmit = async (data: LoginSchema) => {
        signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                reset();
                router.push("/dashboard");
            })
            .catch((error: FirebaseError) => {
                if (error.code === "auth/user-not-found") {
                    setLoginError("Usuário não encontrado.");
                } else if (error.code === "auth/wrong-password") {
                    setLoginError("Senha incorreta.");
                } else if (error.code === "auth/too-many-requests") {
                    setLoginError("Muitas tentativas de login. Tente novamente mais tarde.");
                } else {
                    setLoginError("Erro ao fazer login.");
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
                    {
                        loginError && (
                            <p className="text-[#997070] font-urbanist text-lg">{`${loginError}`}</p>
                        )
                    }
                </ColumnField>
                <div className="w-full px-8 pb-2 flex flex-col gap-1 items-center">
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
                        onClick={handleForgotPassword}
                        type="button"
                    >
                        Esqueci minha senha
                    </button>
                </div>
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
                        Entrar
                    </button>
                </div>
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
                        onClick={handleRegister}
                        type="button"
                    >
                        Cadastrar
                    </button>
                </div>
                <div className="flex items-center w-full px-8 my-4">
                    <hr className="flex-grow border-t border-[#E5E5D5]" />
                    <span className="mx-4 text-[#7A7A6A] text-base">Ou entrar com</span>
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
                        type="button"
                        onClick={() => handleLoginWithLogin()}
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