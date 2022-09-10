import React from "react";
import logo from "../Media/Media1.gif";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function () {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(event.target.value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a5wtep9",
        "template_oxv9ato",
        form.current,
        "qtK4v20V01bEpoinA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("you have subscribed shine");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <footer className="border-t border-gray-200">
        <div
          className="
          container
          flex flex-col flex-wrap
          px-0
          py-16
          mx-auto
          md:items-center
          lg:items-start
          md:flex-row md:flex-nowrap
        "
        >
        

          <div className="justify-between w-full mt-4 text-left lg:flex px-12 ml-16 ">
          <div className="flex-shrink-0 w-64  md:mx-0 md:text-left " style={{marginLeft:-80}}>
            <a
              className="
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-blue-700
              md:justify-start
            "
            >
              <Link to="/">
                <img src={logo} className="h-16 w-auto"></img>
              </Link>
            </a>
            <p className="mt-2 text-sm text-justify text-gray-500">
              We will let you know when we have new arrivals, events and promo's
              don't worry we send them infrequently, just a friendly hi now and
              again!
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <div className="flex mt-4">
                <input
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                  className="
                h-auto
                p-2
                text-sm
                border border-grey-light
                round
                text-grey-dark
                pl-9

              "
                  placeholder="Your email address"
                  type="email"
                />

                <button
                  className="h-auto p-3 text-xs text-white bg-orange-500 inline"
                  type="submit"
                  value="Send"
                >
                  Subscribe
                </button>
              </div>{" "}
            </form>
            {error && <h2 style={{ color: "red" }}>{error}</h2>}
            <div className="flex justify-start mt-4 lg:mt-2">
              <a href="https://www.facebook.com/" target="_blank">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className="ml-3"
                href="https://twitter.com/i/flow/login"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className="ml-3"
                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2F%3F__coig_login%3D1"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                className="ml-3"
                href="https://www.linkedin.com/"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-6 h-6 text-orange-500"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </div>
          </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2" style={{marginRight:-400}}>
              <h2 className="mb-2 font-bold tracking-widest text-orange-500">
                MENU
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <Link to="/">
                    <a className="text-gray-600 hover:text-gray-900" href="#">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/women">
                    {" "}
                    <a className="text-gray-600 hover:text-gray-900" href="">
                      Product
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/men">
                    <a className="text-gray-600 hover:text-gray-900" href="">
                      Mens
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/accessories">
                    {" "}
                    <a className="text-gray-600 hover:text-gray-900" href="">
                      Accessories
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 lg:w-1/3 md:w-1/2">
              <h2 className="mb-2 font-bold tracking-widest text-orange-500">
                Detail
              </h2>
              <ul className="mb-8 space-y-2 text-sm list-none">
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900"
                    href="/#about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-900" href="/#ses">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 hover:text-gray-900"
                    href="/#brand"
                  >
                    Brands
                  </a>
                </li>
                <li>
                  <Link to="/contact">
                    <a className="text-gray-600 hover:text-gray-900" href="">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            
          </div>
        </div>

        <div className="flex justify-center -mt-12">
          <p className="text-base text-gray-400">
            All rights reserved by @ Binayi 2022
          </p>
        </div>
      </footer>
    </div>
  );
}
