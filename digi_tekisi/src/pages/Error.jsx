
import React from "react";
import { Link } from "react-router-dom";
import images from "../constant/images";
// import carImage from "./car.png";

function Error() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <img src={images.lambo} alt="Car" className="h-24 sm:h-32 mx-auto" />
            <div className="sm:ml-4 sm:text-left text-center">
              <div className="text-xl leading-tight mb-2">
                Oops! Page not found
              </div>
              <p className="text-gray-600 text-base">
                The page you are looking for does not exist. It may have been
                moved or deleted.
              </p>
              <Link
                to="/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              >
                Go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;