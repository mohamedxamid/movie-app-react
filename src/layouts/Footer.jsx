import React from "react";

function Footer() {
  return (
    <div className="bg-sky-600 dark:bg-sky-900">
      <div className="container py-3 mx-auto flex justify-between items-center text-white">
        <p className="xl:ml-8 lg:ml-7 md:ml-6 sm:ml-5 ml-4">
          &copy; 2022 Copyright Text
        </p>
        <a href="#" className="xl:mr-8 lg:mr-7 md:mr-6 sm:mr-5 mr-4">
          Movies
        </a>
      </div>
    </div>
  );
}

export default Footer;
