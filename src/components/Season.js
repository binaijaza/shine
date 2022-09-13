import React from "react";

import { Link } from "react-router-dom";

export default function Season() {
  return (
    <div className="ses" id="ses">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        integrity="sha512-wnea99uKIC3TJF7v4eKk4Y+lMz2Mklv18+r4na2Gn1abDRPPOeef95xTzdwGD9e6zXJBteMIhZ1+68QC5byJZw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <section className="section-one flex flex-col-reverse md:flex-row-reverse">
        <div className="basis-0 grow remove-this-p-6 text-center md:text-left md:flex md:flex-col md:justify-center md:items-center bg-orange-500">
          <div className="p-6">
            <h2 className="font-fraunces text-6xl mb-4 md:text-left md:max-w-md text-white">
              New Arrivals
            </h2>
            <p className="font-barlow text-gray-200 text-xl p-4 mb-6 md:max-w-md md:p-0" style={{textAlign:"left" ,marginLeft:-15}}>
              Using soft and different fabrics , designed by talented designers
              , is a suitable fabric for this season Wear it ....
            </p>
            <div className="flex flex-col">
              <a
                href="/#"
                className="font-fraunces uppercase z-1 font-bold text-gray-800 "
              >
                <Link to="/accessories">Learn More</Link>
              </a>
              <span className="bg-white w-32 mx-auto h-4 rounded-full md:m-0" ></span>
            </div>
          </div>
        </div>
        <div className="basis-0 grow">
          <img
            src={
              "https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            alt=""
            className="w-full"
          />
        </div>
      </section>

      <section className="section-one flex flex-col-reverse md:flex-row-reverse ">
        <div className="basis-0 grow">
          <img
            src={
              "https://images.unsplash.com/photo-1552783858-1e47edf7898b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            }
            alt=" test"
            className="w-full"
          />
        </div>
        <div className="basis-0 grow remove-this-p-6 text-center md:text-left md:flex md:flex-col md:justify-center md:items-center bg-orange-500">
          <div className="p-6">
            <h2 className="font-fraunces text-6xl mb-4 md:text-left md:max-w-md text-white">
              New Arrivals
            </h2>
            <p className="font-barlow text-gray-200 text-xl p-4 mb-6 md:max-w-md md:p-0 " style={{textAlign:"left" ,marginLeft:-15}}>
              Using soft and different fabrics , designed by talented designers
              , is a suitable fabric for this season Wear it ....
            </p>
            <div className="flex flex-col">
              <a
                href="/#"
                className="font-fraunces uppercase z-1 text-gray-800 font-bold"
              >
                <Link to="/accessories">Learn More</Link>
              </a>
              <span className="bg-white w-32 mx-auto h-4 rounded-full md:m-0"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
