const Description = () => {
  return (
    <section
      id="about-event"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden mb-64 my-20 px-1"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        About the Event
      </h1>
      <div className="w-full h-full md:w-2/3 lg:w-1/2 z-[500] px-1 bg-slate-700/70 flex min-h-[24rem] rounded-lg">
        <div className="w-1/2 p-1 flex flex-col font-bold">
          <div>
            <h2 className="text-white text-center py-2 md:py-3 lg:py-4">
              Description
            </h2>
            <p className="text-gray-500 text-xs md:text-sm py-1">
              <span className="font-bold underline underline-offset-2 md:underline-offset-[3px] decoration-1 md:decoration-2 text-gray-400 italic">
                Hack Vortex
              </span>{" "}
              is a large hybrid hackathon being conducted by GeekRoom JIMS,
              Rohini, Sector 5. The first round would be conducted through an
              online meeting, where participants would have to present their
              projects to their appointed mentors.
              <br />
              This would then be followed by the main & final judgement round,
              which would be conducted offline in{" "}
              <span className="text-gray-400 underline underline-offset-2">
                JIMS Rohini, Sector 5, New Delhi.
              </span>
            </p>
          </div>

          <div className="flex-grow flex items-end">
            <p className="text-gray-400 text-xs md:text-sm py-1">
              For any queries, feel free to{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=geekroomjimsrohini@gmail.com"
                rel="noreferrer noopener"
                target="_blank"
                className="text-blue-400"
              >
                contact us
              </a>{" "}
              anytime.
            </p>
          </div>
        </div>

        <div className="w-1/2 p-1 flex flex-col">
          <div>
            <h2 className="text-white text-center py-2 md:py-3 lg:py-4 font-bold">
              Hackathon Dates
            </h2>
          </div>
          <div className="flex-grow grid grid-cols-1 grid-rows-[1fr_auto_1fr] lg:grid-rows-1 lg:grid-cols-[1fr_auto_1fr] place-items-center">
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-gray-300 tracking-wider font-semibold text-sm">
                Online Round
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                September 22, 2024
              </p>
            </div>

            <div className="w-[2px] h-16 rotate-90 md:rotate-0 bg-gradient-to-b from-gray-300/20 via-gray-300 to-gray-400/20"></div>

            <div className="flex flex-col items-center gap-1">
              <h3 className="text-gray-300 tracking-wider font-semibold text-sm">
                Online Round
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                September 22, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
