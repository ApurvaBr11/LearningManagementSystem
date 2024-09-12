import React from "react";

const TodoHome = () => {
  return (
    <div className="grainy min-h-screen flex flex-col overflow-hidden">
      <div className="h-[50vh] justify-center items-center flex flex-col">
        <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-purple-100 via-transparent to-transparent">
          <div className="text-center px-4 md:px-8 lg:px-16">
            <h2 className="text-6xl md:text-7xl font-extrabold mb-4 text-gray-800">LearnGo</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-700 md:mx-20 mx-2">
              Unlock your full potential with LearnGo. Our platform offers an engaging and interactive learning experience, tailored to your needs. Explore and advance your knowledge with ease.
            </p>
            <a href="#explore" className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition">Lets Explore</a>
          </div>
        </main>

        <footer className="bg-transparent py-6">
          <div className="container mx-auto text-center">
            <p className="text-gray-600">&copy {new Date().getFullYear()} LearnGo. All rights reserved.</p>
          </div>
        </footer>
      </div>
      

      <div className="relative isolate mt-[-10rem] sm:mt-[-20rem]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoHome;
