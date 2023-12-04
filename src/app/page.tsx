export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main content area with video background */}
      <div className="flex-grow relative overflow-hidden">
        {/* Background with lowered opacity */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#454545] opacity-20 z-0"></div>

        {/* Centered content over video */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="max-w-[250px] sm:max-w-[500px] p-8 bg-white rounded-md shadow-2xl flex flex-col items-center justify-center">
            <figure className="max-w-xs my-2">
              <img src="./Logo.png" className="w-full" alt="Logo" />
            </figure>
            <h1 className="text-xl font-medium sm:text-3xl">
              Cole Consulting
            </h1>
            <p className="">Let's Begin Our Journey.</p>
            <div className="flex space-x-4">
              <button
                type="button"
                className="bg-[#757d85]  sm:px-5 sm:py-2.5 text-white font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2"
              >
                About
              </button>
              <button
                type="button"
                className="bg-[#757d85]  sm:px-5 sm:py-2.5 text-white font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-2 mb-2"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#85757d] shadow-2xl border-t-2 border-[#454545] p-1 text-center">
        <span className="text-sm text-white">
          1300 Eureka St, Lansing, MI 48912 
          <span className="text-white font-bold">
            <a href="mailto:coleconsulting@coleconsulting.io"> Email Us!</a>
          </span>
        </span>
      </footer>
    </div>
  );
}