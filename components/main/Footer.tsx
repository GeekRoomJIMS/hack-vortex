import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-2xl shadow-white p-[15px] border-t-2 border-t-white/30">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 z-[500]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div>
              <div className="font-bold text-[16px]">Community</div>
              <a
                href="https://www.instagram.com/geekroom_jims/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <FaInstagram />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/geekroom-jims"
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-row items-center my-[15px] cursor-pointer"
              >
                <FaLinkedin />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </a>
              {/* <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p> */}
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center">
            <div className="font-bold text-[16px]">Past Hackathons</div>
            <a
              href="https://codekshetra.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Code Kshetra</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Explore More</div>
            <a
              href="https://chat.whatsapp.com/KGvAnrHbwyz1rhJ7hXzvLm"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">Join Us</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=geekroomjimsrohini@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px] text-blue-200">
                geekroomjimsrohini@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Geek Room JIMS, Rohini 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
