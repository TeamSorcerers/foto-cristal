"use client";
import { useRef, useState } from "react";
import { FaUpload, FaDownload } from "react-icons/fa";

interface FotoEstudio {
  id: number;
  nome: string;
  data: string;
  url: string;
}

const fotosEstudioMock: FotoEstudio[] = [
  {
    id: 1,
    nome: "Ensaio Família",
    data: "15/05/2025",
    url: "/mock/ensaio-familia.zip",
  },
  {
    id: 2,
    nome: "Foto 3x4",
    data: "10/05/2025",
    url: "/mock/foto-3x4.zip",
  },
];

export default function DashboardCliente() {
  const [fotos, setFotos] = useState<File[]>([]);
  const [enviando, setEnviando] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFotos(Array.from(e.target.files));
    }
  }

  async function handleEnviarFotos(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setTimeout(() => {
      setEnviando(false);
      setFotos([]);
      alert("Fotos enviadas com sucesso!");
    }, 1500);
  }

  return (
    <div className="w-full h-full p-8">
      <h1 className="text-3xl text-[#b8958d] mb-6">Área do Cliente</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {}
        <div className="flex-1 bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-xl text-[#b8958d] mb-4 font-semibold flex items-center gap-2">
            <FaUpload /> Enviar fotos para revelação
          </h2>
          <form onSubmit={handleEnviarFotos} className="flex flex-col gap-4">
            <input
              type="file"
              multiple
              accept="image/*"
              ref={inputRef}
              onChange={handleFileChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-[#b8958d] file:text-white"
            />
            <button
              type="submit"
              disabled={fotos.length === 0 || enviando}
              className="bg-[#b8958d] text-white px-4 py-2 rounded hover:bg-[#a07c6c] transition disabled:opacity-50 flex items-center gap-2 justify-center"
            >
              <FaUpload />
              {enviando ? "Enviando..." : "Enviar Fotos"}
            </button>
            {fotos.length > 0 && (
              <ul className="text-[#b8958d] text-sm mt-2">
                {fotos.map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
            )}
          </form>
        </div>
        {}
        <div className="flex-1 bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-xl text-[#b8958d] mb-4 font-semibold flex items-center gap-2">
            <FaDownload /> Suas fotos do estúdio
          </h2>
          {fotosEstudioMock.length === 0 ? (
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
                {fotosEstudioMock.map((foto) => (
                  <tr key={foto.id}>
                    <td className="px-2 py-1">{foto.nome}</td>
                    <td className="px-2 py-1">{foto.data}</td>
                    <td className="px-2 py-1 text-center">
                      <a
                        href={foto.url}
                        download
                        className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center"
                        title="Baixar Foto"
                      >
                        <FaDownload size={16} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}