import React from "react";

export default function About() {
  return (
    <div className="col" id="about">
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32 text-center lg:text-left">
            <div className="grid lg:grid-cols-2  items-center">
              <div className="mb-12 lg:mb-0">
                <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 mys">
                  <h2 className="text-3xl font-bold mb-4 display-5">Abot Us</h2>
                  <p className="text-gray-500 mb-12">
                    Discover the latest fashion trends with Shine. Shop the new
                    collection of clothing, footwear, accessories, beauty
                    products and more. Order today from Shine.
                  </p>

                  <div className="grid md:grid-cols-3 gap-x-6">
                    <div className="mb-12 md:mb-0">
                      <h5 className="text-3xl font-bold text-orange-500 mb-0">
                        Woman
                      </h5>
                    </div>

                    <div className="mb-12 md:mb-0">
                      <h5 className="text-3xl font-bold text-orange-500 mb-0">
                        Man
                      </h5>
                    </div>

                    <div className="">
                      <h5 className="text-3xl font-bold text-orange-500 mb-0">
                        Accessories
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  className="w-full shadow-lg fancy-border-radius rotate-lg-6"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
