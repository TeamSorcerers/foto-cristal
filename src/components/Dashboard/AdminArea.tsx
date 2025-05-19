import { faCamera, faDownload, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Status = "Resolvido" | "Aguardando" | "Cancelado";

interface Order {
  id: number;
  name: string;
  date: string;
  status: Status;
  photoURL: string;
}

const ordersMock: Order[] = [
  {
    id: 1,
    name: "João Silva",
    date: "17/05/2025",
    status: "Aguardando",
    photoURL: "/mock/foto1.zip",
  },
  {
    id: 2,
    name: "Maria Souza",
    date: "16/05/2025",
    status: "Resolvido",
    photoURL: "/mock/foto2.zip",
  },
  {
    id: 3,
    name: "Carlos Lima",
    date: "16/05/2025",
    status: "Cancelado",
    photoURL: "/mock/foto3.zip",
  },
];

const statusOptions: Status[] = ["Resolvido", "Aguardando", "Cancelado"];

export default function AdminArea() {
    const [orders, setOrders] = useState<Order[]>(ordersMock);

    function alterarStatus(id: number) {
        setOrders((prev) =>
            prev.map((order) =>
                order.id === id
                ? {
                    ...order,
                    status:
                        statusOptions[
                        (statusOptions.indexOf(order.status) + 1) %
                            statusOptions.length
                        ],
                    }
                : order
            )
        );
    }

    return (
        <>
            <h1 className="text-3xl text-[#b8958d] uppercase text-center">
                Área do Administrador
            </h1>
            <div className="w-full md:w-2/4 bg-[#F7F7ED] border-1 border-[#E5E5D5] rounded-r-md rounded-l-md">
                <div className="w-full flex flex-col gap-4 items-center pt-4 pb-0.5">
                    <h2 className="text-xl text-[#b8958d] mb-4 font-semibold flex items-center gap-2">
                        <FontAwesomeIcon icon={faCamera} /> Painel de pedidos
                    </h2>
                </div>
                <div className="flex-1 p-6 border-t border-[#E5E5D5] overflow-y-auto">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-[#F7F7ED] border border-[#E5E5D5] rounded shadow">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b text-center text-[#888877] font-roboto-thin whitespace-nowrap">Cliente</th>
                                    <th className="px-4 py-2 border-b text-center text-[#888877] font-roboto-thin whitespace-nowrap">Data de Envio</th>
                                    <th className="px-4 py-2 border-b text-center text-[#888877] font-roboto-thin whitespace-nowrap">Situação</th>
                                    <th className="px-4 py-2 border-b text-center text-[#888877] font-roboto-thin whitespace-nowrap">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id} className="text-[#b8958d]">
                                        <td className="px-4 py-2 border-b text-center whitespace-nowrap">{order.name}</td>
                                        <td className="px-4 py-2 border-b text-center whitespace-nowrap">{order.date}</td>
                                        <td className="px-4 py-2 border-b text-center whitespace-nowrap">{order.status}</td>
                                        <td className="px-4 py-2 border-b flex justify-center gap-2">
                                            <button
                                                className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center cursor-pointer"
                                                onClick={() => alterarStatus(order.id)}
                                                title="Alterar Situação"
                                            >
                                                <FontAwesomeIcon icon={faSyncAlt} size="sm" />
                                            </button>
                                            <a
                                                href={order.photoURL}
                                                download
                                                className="bg-[#b8958d] text-white p-2 rounded hover:bg-[#a07c6c] transition flex items-center justify-center"
                                                title="Baixar Fotos"
                                            >
                                                <FontAwesomeIcon icon={faDownload} size="sm" />
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}