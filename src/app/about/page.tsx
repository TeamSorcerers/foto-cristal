import Header from "@/components/Header/Header";

import HistoryPhoto1 from "@/assets/images/history/photo-1.webp";
import HistoryPhoto2 from "@/assets/images/history/photo-2.webp";
import Image from "next/image";

export default function About(){
    return (
        <div className="w-full h-full overflow-x-hidden">
            <Header />
            <div className="px-4 py-6 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    <Image
                        src={HistoryPhoto1}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-r-sm rounded-l-sm"
                    />
                    <p
                        className="font-urbanist md:px-4 text-xl md:text-justify text-[#b8958d]"
                    >
                        A Foto Cristal atua no ramo da fotografia desde 1989, sempre com o compromisso de registrar momentos especiais com qualidade, dedicação e carinho. Com mais de 35 anos de história, somos referência em revelação de fotos, ensaios fotográficos e serviços personalizados, atendendo gerações de clientes que confiam em nosso trabalho.
                        Fundada pelo Sr. Sérgio Hokama, apaixonado pela arte de fotografar, a loja cresceu com base em valores sólidos e na transmissão de conhecimento. Foi ele quem passou adiante sua experiência e amor pela fotografia, ensinando e inspirando aqueles que hoje continuam esse legado — inclusive seu genro, que desde então está à frente da loja.
                        Hoje, a Foto Cristal une tradição e inovação: utilizamos equipamentos modernos, papel fotográfico Kodak de alta qualidade, servidores próprios e uma equipe treinada para oferecer serviços como revelações digitais, criação de álbuns personalizados, fotopresentes e muito mais.
                        Nossa missão continua a mesma desde o início: transformar seus momentos mais importantes em lembranças eternas, com a atenção e o cuidado que cada cliente merece — seja presencialmente em nossa loja, ou através de nossos canais digitais.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row py-2 text-[#b8958d]">
                    <p
                        className="font-urbanist md:pr-4 text-xl md:text-justify"
                    >
                        Hoje, a Foto Cristal une tradição e inovação: utilizamos equipamentos modernos, papel fotográfico Kodak de alta qualidade, servidores próprios e uma equipe treinada para oferecer serviços como revelações digitais, criação de álbuns personalizados, fotopresentes e muito mais.
                        Nossa missão continua a mesma desde o início: transformar seus momentos mais importantes em lembranças eternas, com a atenção e o cuidado que cada cliente merece — seja presencialmente em nossa loja, ou através de nossos canais digitais.
                    </p>
                    <Image
                        src={HistoryPhoto2}
                        alt=""
                        width={400}
                        height={400}
                        className="rounded-r-sm rounded-l-sm hidden md:block"
                    />
                </div>
            </div>
        </div>
    );
}