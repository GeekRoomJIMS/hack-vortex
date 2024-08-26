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
    <div className="card z-[200]">
      <div className="content">
        <div className="back">
          <div className="back-content">
            <Image
              src="/sponsors/sponsor-img.webp"
              width={100}
              height={100}
              alt="Sponsors"
            />
            <strong className={`${color}`}>{title}</strong>
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
            {/* <div className="description">
              <div className="title">
                <p className="title">
                  <strong>Spaguetti Bolognese</strong>
                </p>
                <svg
                  fillRule="nonzero"
                  height="15px"
                  width="15px"
                  viewBox="0,0,256,256"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    style={{ mixBlendMode: "normal" }}
                    textAnchor="none"
                    fontSize="none"
                    fontWeight="none"
                    fontFamily="none"
                    strokeDashoffset="0"
                    strokeDasharray=""
                    strokeMiterlimit="10"
                    strokeLinejoin="miter"
                    strokeLinecap="butt"
                    strokeWidth="1"
                    stroke="none"
                    fillRule="nonzero"
                    fill="#20c997"
                  >
                    <g transform="scale(8,8)">
                      <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
            </div> */}
            {sponsors.length === 0 ? (
              <div className="flex h-[80%] justify-center items-center italic tracking-wider">
                Coming Soon..
              </div>
            ) : (
              <ul>
                {sponsors?.map((sponsor, idx) => (
                  <li className="flex gap-x-1 py-1" key={idx}>
                    <Image
                      src={sponsor.image}
                      width={20}
                      height={10}
                      alt={sponsor.name}
                    />
                    <p className="text-sm">{sponsor.name}</p>
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
