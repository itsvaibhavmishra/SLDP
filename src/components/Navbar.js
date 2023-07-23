import React from 'react';
import Favicon from '../assets/favicon.png';
const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className="w-12" src={Favicon} alt="logo" />
            <span class="ml-3 text-xl">Sign Language Detection Program</span>
          </div>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            {/* <a href="#home" class="mr-5 hover:text-gray-900">Home</a> */}
          </nav>
          <a href="#about" class="mr-5 hover:text-gray-900">
            About
          </a>
          <a href="#developer" class="mr-5 hover:text-gray-900">
            Developer
          </a>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://github.com/itsvaibhavmishra/SLDP"
          >
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              GitHub
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
