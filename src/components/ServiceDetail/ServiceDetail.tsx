import Image, { StaticImageData } from "next/image";

export type ServiceDetailProps = {
    title: string;
    photo: StaticImageData;
    services: string[];
}

export default function ServiceDetail({ title, photo, services }: ServiceDetailProps) {
    return (
        <div className="flex flex-col p-4 items-center bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md">
            <div className="p-4">
                <Image
                    src={photo}
                    alt="Imagem de serviço"
                    className="w-64 h-80"
                />
            </div>
            <div className="p-2">
                <h3 className="text-3xl text-[#ae867d] font-urbanist text-center">
                    { title }
                </h3>
            </div>
            <div className="flex flex-col items-center p-2 text-[#ae867d]">
                {
                    services.map(
                        (text, key) => (
                            <h4 className="text-2xl" key={key}>
                                { text }
                            </h4>
                        )
                    )
                }
            </div>
        </div>
    )
}