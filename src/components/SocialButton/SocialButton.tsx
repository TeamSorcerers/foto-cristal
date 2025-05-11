import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export type SocialButtonProps = {
    redirect: string;
    text: string;
    icon: IconDefinition;
}

export default function SocialButton({ redirect, text, icon }: SocialButtonProps) {
    return (
        <Link
            className="flex flex-row gap-2 items-center"
            target="_blank"
            href={redirect}
        >
            <FontAwesomeIcon icon={icon} className="text-4xl text-[#b8958d] w-10 h-10" />
            <h3 className="font-urbanist text-[#b8958d] text-xl">
                { text }
            </h3>
        </Link>
    )
}