import React from "react";
import SponsorCard from "../sub/SponsorCard";
import { bronze_sponsors, gold_sponsors, silver_sponsors } from "@/constants";

const Sponsors = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-20"
      id="sponsors"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Sponsors
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-10 px-10 place-items-center">
        <SponsorCard
          title="Silver Tier"
          color="text-gray-500"
          sponsors={silver_sponsors}
        />
        <SponsorCard
          title="Gold Tier"
          color="text-yellow-300"
          sponsors={gold_sponsors}
        />
        <SponsorCard
          title="Bronze Tier"
          color="text-red-800"
          sponsors={bronze_sponsors}
        />
      </div>
    </section>
  );
};

export default Sponsors;
