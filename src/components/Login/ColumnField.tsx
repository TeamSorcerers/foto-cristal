export type ColumnFieldProps = {
    children: React.ReactNode[];
}

export default function ColumnField({ children }: ColumnFieldProps) {
    return (
        <div className="w-full px-8 p-2 flex flex-col gap-1">
            { children }
        </div>
    )
}