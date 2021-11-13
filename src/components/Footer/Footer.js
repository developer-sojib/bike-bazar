import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <Fade left>
      <footer className="bg-black pt-5">
        <div class="container flex flex-col justify-between max-w-6xl px-4 mx-auto overflow-hidden lg:flex-row">
          <div class="w-full pl-12 mr-4 text-left lg:w-1/4 sm:text-center sm:pl-0 lg:text-left">
            <p class="mt-6 mr-4 text-base text-white">
              <b>Bike Zone</b>
            </p>
            <p class="mt-6 mr-4 text-base text-white">
              Bike Zone Edison bulb retro cloud bread echo park, helvetica
              stumptown taiyaki taxidermy 90's cronut +1 kinfolk
            </p>
          </div>
          <div class="block w-full pl-10 mt-6 text-sm lg:w-3/4 sm:flex lg:mt-0">
            <ul class="flex flex-col w-full p-0 font-medium text-left text-white list-none">
              <li class="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Product
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  FAQ
                </a>
              </li>
            </ul>
            <ul class="flex flex-col w-full p-0 font-medium text-left text-white list-none">
              <li class="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Company
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  class="inline-block px-3 py-2 text-white no-underline hover:text-gray-600">
                  Terms of Service
                </a>
              </li>
            </ul>
            <ul class="flex flex-col w-full p-0 font-medium text-left text-white list-none">
              <li class="inline-block px-3 py-2 mt-5 font-bold tracking-wide text-white uppercase md:mt-0">
                Contact Details
              </li>
              <li>
                <a
                  href="/"
                  title=""
                  class="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current">
                      <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                    </svg>
                  </span>
                  <span class="ml-3">1985 Kerry Way, Whittier, CA, USA</span>
                </a>
              </li>
              <li class="mt-4">
                <a
                  href="#/"
                  title=""
                  class="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current">
                      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                      <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                    </svg>
                  </span>
                  <span class="ml-3">
                    Mon - Fri: 9:00 - 19:00
                    <br />
                    Closed on Weekends
                  </span>
                </a>
              </li>

              <li class="mt-4">
                <a
                  href="/"
                  title=""
                  class="block flex items-center opacity-75 hover:opacity-100">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current">
                      <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                    </svg>
                  </span>
                  <span class="ml-3">+1 562-789-1935</span>
                </a>
              </li>
            </ul>

            <div class="flex flex-col w-full text-white">
              <div class="inline-block px-3 py-2 mt-5 font-bold text-white uppercase md:mt-0">
                Follow Us
              </div>
              <div class="flex justify-start pl-4 mt-2">
                <a
                  class="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                  </svg>
                </a>
                <a
                  class="flex items-center block mr-6 text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  class="flex items-center block text-gray-400 no-underline hover:text-gray-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://devdojo.com">
                  <svg
                    viewBox="0 0 24 24"
                    class="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-black py-4 px-5">
          <div className="max-w-screen-xl mx-auto flex flex-wrap flex-col justify-center sm:flex-row">
            <p className="text-gray-600 text-sm text-center sm:text-left">
              © 2021 Developed by —
              <a
                href="https://github.com/developer-sojib"
                rel="noopener noreferrer"
                className="text-blue-600 ml-1"
                target="_blank">
                Abdul Awal Sojib
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Fade>
  );
};

export default Footer;
