"use client";
import { useState } from "react";
import { FaSyncAlt, FaDownload } from "react-icons/fa";

type Status = "Resolvido" | "Aguardando" | "Cancelado";

interface Pedido {
  id: number;
  nome: string;
  dataEnvio: string;
  status: Status;
  fotosUrl: string;
}

const pedidosMock: Pedido[] = [
  {
    id: 1,
    nome: "João Silva",
    dataEnvio: "17/05/2025",
    status: "Aguardando",
    fotosUrl: "/mock/foto1.zip",
  },
  {
    id: 2,
    nome: "Maria Souza",
    dataEnvio: "16/05/2025",
    status: "Resolvido",
    fotosUrl: "/mock/foto2.zip",
  },
  {
    id: 3,
    nome: "Carlos Lima",
    dataEnvio: "16/05/2025",
    status: "Cancelado",
    fotosUrl: "/mock/foto3.zip",
  },
];

const statusOptions: Status[] = ["Resolvido", "Aguardando", "Cancelado"];

export default function AdminDashboard() {
  const [pedidos, setPedidos] = useState<Pedido[]>(pedidosMock);

  function alterarStatus(id: number) {
    setPedidos((prev) =>
      prev.map((pedido) =>
        pedido.id === id
          ? {
              ...pedido,
              status:
                statusOptions[
                  (statusOptions.indexOf(pedido.status) + 1) %
                    statusOptions.length
                ],
            }
          : pedido
      )
    );
  }

  return (
    <div className="w-full h-full p-8">
      <h1 className="text-3xl text-[#b8958d] mb-6">Painel de Pedidos</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-center">Cliente</th>
              <th className="px-4 py-2 border-b text-center">Data de Envio</th>
              <th className="px-4 py-2 border-b text-center">Situação</th>
              <th className="px-4 py-2 border-b text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id} className="text-[#b8958d]">
                <td className="px-4 py-2 border-b text-center">{pedido.nome}</td>
                <td className="px-4 py-2 border-b text-center">{pedido.dataEnvio}</td>
                <td className="px-4 py-2 border-b text-center">{pedido.status}</td>
                <td className="px-4 py-2 border-b flex justify-center gap-2">
                  <button
                    className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center"
                    onClick={() => alterarStatus(pedido.id)}
                    title="Alterar Situação"
                  >
                    <FaSyncAlt size={16} />
                  </button>
                  <a
                    href={pedido.fotosUrl}
                    download
                    className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center"
                    title="Baixar Fotos"
                  >
                    <FaDownload size={16} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}