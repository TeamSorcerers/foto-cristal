'use client';
import { useState } from "react";
import type { HTMLInputTypeAttribute } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export type TextFieldProps = {
    type: HTMLInputTypeAttribute;
    id: string;
    name: string;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    isError?: boolean;
};

export default function TextField({ type, id, name, inputProps, isError }: TextFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    return (
        <div className="relative w-full">
            <input
                type={isPassword && showPassword ? "text" : type}
                id={id}
                name={name}
                className={`h-8 text-xl border border-[#C0C0B0] rounded-md outline-[#C0C0B0] text-[#888877] p-4 pr-10 w-full ${
                    isError ? "border-[#caaca9] outline-[#bea4a4]" : ""
                }`}
                {...inputProps}
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#888877] cursor-pointer"
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} size="lg" />
                </button>
            )}
        </div>
    );
}
