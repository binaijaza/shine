import React from "react";


export default function Hero() {
 
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-center bg-cover bg-center hero">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-100 opacity-25"></div>
      <main className="px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight leading-10 font-medium sm:text-5xl text-white sm:leading-none md:text-6xl text-center">
            <span className="text-orange-500 font-bold">Shine . </span> Here it
            is!
          </h2>
          <p className="mt-3 text-white sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
            Curators of ethical fashion and Iraq designed. Shine is a
            destination for style seekers. Located in Iraq's boutique Kuripuni.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex justify-center">
            <div className="rounded-md shadow">
              <a
                href="/#ses"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-regular  text-white bg-orange-500 hover:bg-orange-400 focus:outline-none focus:border-orange-600 focus:shadow-outline-indigo "
              >
                New arrivals
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/#about"
                className="w-full flex items-center justify-center px-8 py-3 border  text-base leading-6 font-regular  text-white hover:text-orange-500 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-orange-200 "
              style={{marginTop:-15}}
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
