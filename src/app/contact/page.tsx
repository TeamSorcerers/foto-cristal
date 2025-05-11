import Header from "@/components/Header/Header";

import HistoryPhoto1 from "@/assets/images/history/photo-1.webp";
import Image from "next/image";
import SocialButton from "@/components/SocialButton/SocialButton";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact(){
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
                    <div className="w-full p-4 flex flex-col gap-2">
                      <SocialButton
                        icon={faInstagram}
                        text="@fotocristalcentro"
                        redirect="https://www.instagram.com/fotocristalcentro/#"
                      />
                      <SocialButton
                        icon={faWhatsapp}
                        text="(67) 9 9665-1328"
                        redirect="https://wa.me/67996651328"
                      />
                      <SocialButton
                        icon={faEnvelope}
                        text="fotocristal123@gmail.com"
                        redirect="mailto:fotocristal123@gmail.com"
                      />
                    </div>
                </div>
                <div className="py-2">
                  <div className="flex flex-row gap-2 items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="text-4xl text-[#b8958d] w-6 h-6" />
                    <p className="text-2xl text-[#b8958d]">
                      Situado em:
                    </p>
                  </div>
                  <div className="flex px-4">
                    <p className="text-xl text-[#b8958d]">
                      R. Treze de Maio, 3258 - Centro, Campo Grande - MS, 79004-421
                    </p>
                  </div>
                </div>
            </div>
        </div>
    );
}