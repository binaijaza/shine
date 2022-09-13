import React from "react";
import AnyDi from "../Media/ANYDI.png";

export default function Brand() {
  const Icons = [
    {
      id: 1,
      uri: "https://download.logo.wine/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.png",
    },
    {
      id: 2,
      uri: "https://i.pinimg.com/736x/c4/6a/bc/c46abcf81b48d73f67a371033f2a8699.jpg",
    },
    {
      id: 3,
      uri: "https://thumbs.dreamstime.com/b/gucci-logo-popular-clothing-brand-famous-emblem-vector-icon-zaporizhzhia-ukraine-may-222305622.jpg",
    },
    {
      id: 4,
      uri: "https://i.pinimg.com/originals/f4/36/9e/f4369e12ca53ed5a729a05513fa621ac.jpg",
    },
    {
      id: 5,
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpP43-WPwAFleTSvdZ1SOWcqQ6sVVWaTEoG3WUyGpWaArUBR259LlPlnx-3-QJUe4YFRc&usqp=CAU",
    },
    {
      id: 6,
      uri: AnyDi,
    },
    {
      id: 7,
      uri: "https://i.pinimg.com/originals/ca/67/8f/ca678ff1255c62bbe9906d94870fb60f.jpg",
    },
    {
      id: 8,
      uri: "https://hyperpix.net/wp-content/uploads/2020/05/calvin-klein-logo-font-free-download-1200x679.jpg",
    },
  ];
  return (
    <div className="antialiased text-gray-900 font-sans p-6" id="brand">
      <div className="container mx-auto ">
        <div className="flex flex-wrap -mx-4">
          {Icons.map((person) => {
            return (
              <div
                className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
                key={person.id}
              >
                <span
                  href=""
                  className="c-card block bg-white  rounded-lg overflow-hidden"
                >
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-cover"
                      src={person.uri}
                      alt=""
                    />
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
