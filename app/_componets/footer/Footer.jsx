import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 bg-white rounded-full flex justify-center  w-20 h-20 ">
              <a href="https://flowbite.com/" className="flex items-center">
               <Image src="/l4itremoved.png"
               width={200}
               height={200}
               alt="logo" 
               
               />
               
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Services
                </h2>
                <ul className=" text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Follow us
                </h2>
                <ul className=" text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="#"
                      className="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase  text-white">
                  Legal
                </h2>
                <ul className="  text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6   sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm   sm:text-center  text-gray-400">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                L4IT™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {/* Social icons here with className */}
              {/* Make sure to change `fill-rule` to `fillRule` and `clip-rule` to `clipRule` in SVG paths as well */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  