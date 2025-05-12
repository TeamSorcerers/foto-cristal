export type TextLabelProps = {
    targetId: string;
    text: string;
}

export default function TextLabel({ targetId, text }: TextLabelProps) {
    return (
        <label
            htmlFor={targetId}
            className="font-roboto-extra-light text-xl text-[#888877] uppercase"
        >
            { text }
        </label>
    )
}