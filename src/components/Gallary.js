import React from "react";
import { Link } from "react-router-dom";

export default function Gallery() {
  const New = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1641044167595-4d9059794743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",

      catalog: "Woman",
      link: "/accessories",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1617140610409-753b80274362?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=559&q=80",
      catalog: "Man",
      link: "/accessories",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1508296695146-257a814070b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      catalog: "Accessories",
      link: "/accessories",
    },
  ];
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <h2 className="text-7xl font-bold mb-12 text-center text-orange-500  ">
          Latest{" "}
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {New.map((cloth) => {
            return (
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                key={cloth.id}
              >
                <img src={cloth.src} className="w-full h-full" alt="test"/>
                <Link to={cloth.link}>
                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-black op ">
                      <div className="flex justify-center items-center  h-full ">
                        <div className="text-white ">
                          <h5 className="font-bold text-6xl mb-3 anim text-">
                            {cloth.catalog}
                          </h5>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
