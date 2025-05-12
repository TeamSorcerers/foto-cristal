import Header from "@/components/Header/Header";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";

import ServiceImage1 from "@/assets/images/photos/photo-1.webp";
import ServiceImage2 from "@/assets/images/photos/photo-2.webp";

export default function Services(){
    return (
     <div className="w-full h-full">
      <Header />
      <div className="px-4 py-6 max-w-screen-xl mx-auto flex flex-col gap-8">
        <div className="w-full flex flex-col items-center gap-2">
          <h1 className="text-3xl text-[#b8958d] uppercase text-center">Serviços e Preços</h1>
          <h2 className="text-2xl text-[#b8958d] uppercase text-center">Todos os tamanhos e I.D (Imagem Digital)</h2>
        </div>
        <div className="flex flex-col gap-4 items-center md:flex-row md:gap-16 md:justify-center">
          <ServiceDetail
            photo={ServiceImage1}
            title="Fotos para documentos 3 x 4"
            services={[
              "4 — R$ 25,00",
              "6 — R$ 35,00",
              "8 — R$ 40,00",
              "I.D — R$ 40,00",
            ]}
          />
          <ServiceDetail
            photo={ServiceImage2}
            title="Fotos para visto e passaporte"
            services={[
              "3 (5 x 5) — R$ 50,00",
              "3 (5 x 7) — R$ 50,00",
              "3 (3 x 5) — R$ 50,00",
              "4 (3,5 x 4,5) — R$ 50,00",
            ]}
          />
        </div>
      </div>
    </div>
    );
}