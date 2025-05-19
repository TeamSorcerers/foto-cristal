import { faDownload, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export interface StudioPhoto {
  id: number;
  name: string;
  date: string;
  url: string;
}

const studioPhotoMock: StudioPhoto[] = [
  {
    id: 1,
    name: "Ensaio Família",
    date: "15/05/2025",
    url: "/mock/ensaio-familia.zip",
  },
  {
    id: 2,
    name: "Foto 3x4",
    date: "10/05/2025",
    url: "/mock/foto-3x4.zip",
  },
];


export default function ClientArea() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [photos, setPhotos] = useState<File[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setPhotos(Array.from(e.target.files));
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setPhotos([]);
            if (inputRef.current) {
                inputRef.current.value = "";
            }
            setSuccess("Fotos enviadas com sucesso!");
        }, 1500);
    }

    return (
        <>
            <h1 className="text-3xl text-[#b8958d] uppercase text-center">
                Área do Cliente
            </h1>
            <div className="w-full md:w-2/4 bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md">
                <div className="w-full flex flex-col gap-4 items-center pt-4 pb-0.5">
                    <h2 className="text-xl text-[#b8958d] mb-4 font-semibold flex items-center gap-2">
                        <FontAwesomeIcon icon={faUpload} /> Enviar fotos para revelação
                    </h2>
                </div>
                <div className="flex-1 p-6 border-t border-[#E5E5D5]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            ref={inputRef}
                            onChange={handleFileChange}
                            className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#b8958d] file:text-white cursor-pointer file:transition file:duration-200 file:ease-in-out hover:file:bg-[#a07c6c] file:cursor-pointer"
                        />
                        <button
                            type="submit"
                            disabled={photos.length === 0 || submitting}
                            className={`
                                bg-[#b8958d] text-white px-4 py-2 rounded hover:bg-[#a07c6c] transition disabled:opacity-50 flex items-center gap-2 justify-center
                                ${(photos.length === 0 || submitting) ? "cursor-not-allowed" : "cursor-pointer"}
                            `}
                        >
                            <FontAwesomeIcon icon={faUpload} />
                            {submitting ? "Enviando..." : "Enviar Fotos"}
                        </button>
                        {/** mensagem de envio */}
                        <p className="text-[#b8958d] text-base text-center">
                            {success && <span>{success}</span>}
                        </p>
                        {photos.length > 0 && (
                        <ul className="text-[#b8958d] text-sm mt-2">
                            {photos.map((file, idx) => (
                                <li key={idx}>{file.name}</li>
                            ))}
                        </ul>
                        )}
                    </form>
                </div>
                <div className="flex-1 p-6 border-t border-[#E5E5D5]">
                    <div className="w-full flex flex-col gap-4 items-center">
                        <h2 className="text-xl text-[#b8958d] mb-4 font-semibold flex items-center gap-2">
                            <FontAwesomeIcon icon={faDownload} /> Suas fotos do estúdio
                        </h2>
                    </div>
                    {studioPhotoMock.length === 0 ? (
                        <p className="text-[#b8958d]">Nenhuma foto disponível ainda.</p>
                    ) : (
                        <table className="min-w-full">
                        <thead>
                            <tr>
                            <th className="px-2 py-1 text-left text-[#b8958d]">Nome</th>
                            <th className="px-2 py-1 text-left text-[#b8958d]">Data</th>
                            <th className="px-2 py-1 text-center text-[#b8958d]">Baixar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studioPhotoMock.map((photo) => (
                            <tr key={photo.id}>
                                <td className="px-2 py-1">{photo.name}</td>
                                <td className="px-2 py-1">{photo.date}</td>
                                <td className="px-2 py-1 text-center">
                                <a
                                    href={photo.url}
                                    download
                                    className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center"
                                    title="Baixar Foto"
                                >
                                    <FontAwesomeIcon icon={faDownload} size="sm" />
                                </a>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    )}
                </div>
            </div>
        </>
    );
}