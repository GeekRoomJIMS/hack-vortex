import { gold_sponsors } from "@/constants";
import Image from "next/image";

const SponsorCard = ({
  title,
  color,
  sponsors,
}: {
  title: string;
  color: string;
  sponsors: { name: string; image: string }[];
}) => {
  return (
    <div className="card w-[16rem] h-[16rem] max-w-[20rem] max-h-[20rem] lg:max-w-none lg:max-h-none lg:w-[30rem] lg:h-[30rem] z-[200]">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <Image
              src="/sponsors/sponsor-img.webp"
              width={160}
              height={160}
              alt="Sponsors"
            />
            <strong className={`${color} text-xl`}>{title}</strong>
          </div>
        </div>
        <div className="front">
          <div className="img">
            <div className="circle"></div>
            <div className="circle" id="right"></div>
            <div className="circle" id="bottom"></div>
          </div>

          <div className="front-content">
            <small className="badge">{title}</small>
            {sponsors.length === 0 ? (
              <div className="flex h-[80%] justify-center items-center italic tracking-wider">
                Coming Soon..
              </div>
            ) : (
              <ul className="grid grid-cols-2 place-items-center">
                {sponsors?.map((sponsor, idx) => (
                  <li className="flex gap-x-1 py-1" key={idx}>
                    <Image
                      src={sponsor.image}
                      width={80}
                      height={80}
                      alt={sponsor.name}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorCard;
