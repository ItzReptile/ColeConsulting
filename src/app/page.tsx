export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main content area with video background */}
      <div className="flex-grow relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="./Tech1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Centered content over video */}
        <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <div className="max-w-[250px] min-[410px]:max-w-[500px]   p-8 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-md shadow-lg flex flex-col items-center justify-center">
            <figure className="max-w-xs my-2">
              <img src="./Logo.png" className="w-full" alt="Logo" />
            </figure>
            <h1 className="text-white text-xl font-medium min-[410px]:text-3xl">
              Cole Consulting
            </h1>
            <p className="text-white">Let's Begin Our Journey.</p>
            <div className="flex space-x-4">
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                About
              </button>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className=" bg-gray-800 shadow p-2 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          1300 Eureka St, Lansing, MI 48912
          <span className="text-white">
            {" "}
            <a href="mailto:coleconsulting@coleconsulting.io">Email Us!</a>{" "}
          </span>
        </span>
      </footer>
    </div>
  );
}
