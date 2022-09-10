import React from "react";

import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="  bg-orange-100 w-screen h-screen flex justify-center items-center">
      <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div class="  overflow-hidden sm:rounded-lg pb-8">
          <div class="border-t border-gray-200 text-center pt-8 ">
            <h1 class="text-9xl font-bold text-orange-400">404</h1>
            <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
            <p class="text-2xl pb-8 px-12 font-medium">
              Oops! The page you are looking for does not exist. It might have
              been moved or deleted.
            </p>
            <Link to="/">
              <button class="bg-gradient-to-r from-orange-500 to-gray-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                HOME
              </button>
            </Link>
            <Link to="/#contact">
              {" "}
              <button class="bg-gradient-to-r from-orange-500 to-gray-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
