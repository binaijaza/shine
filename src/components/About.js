import React from "react";

export default function About() {
  return (
    <div className="col" id="about">
      <div class="container my-24 px-6 mx-auto">
        <section class="mb-32 text-gray-800 text-center lg:text-left">
          <div class="container mx-auto xl:px-32 text-center lg:text-left">
            <div class="grid lg:grid-cols-2  items-center">
              <div class="mb-12 lg:mb-0">
                <div class="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 mys">
                  <h2 class="text-3xl font-bold mb-4 display-5">Abot Us</h2>
                  <p class="text-gray-500 mb-12">
                    Discover the latest fashion trends with Shine. Shop the new
                    collection of clothing, footwear, accessories, beauty
                    products and more. Order today from Shine.
                  </p>

                  <div class="grid md:grid-cols-3 gap-x-6">
                    <div class="mb-12 md:mb-0">
                      <h5 class="text-3xl font-bold text-orange-500 mb-0">
                        Woman
                      </h5>
                    </div>

                    <div class="mb-12 md:mb-0">
                      <h5 class="text-3xl font-bold text-orange-500 mb-0">
                        Man
                      </h5>
                    </div>

                    <div class="">
                      <h5 class="text-3xl font-bold text-orange-500 mb-0">
                        Accessories
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                  class="w-full shadow-lg fancy-border-radius rotate-lg-6"
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
