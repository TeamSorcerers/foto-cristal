import Header from "@/components/Header/Header";
import RegisterCard from "@/components/Login/RegisterCard";

export default function Register(){
    return (
        <>
      <div className="w-full h-full">
        <Header />
        <div className="px-4 py-6 max-w-screen-xl mx-auto flex flex-col gap-8 items-center">
          <h1 className="text-3xl text-[#b8958d] uppercase text-center">
            Cadastrar-se em Foto Cristal
          </h1>
          <RegisterCard />
        </div>
      </div>
        </>
    );
}