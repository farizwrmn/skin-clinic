import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap mx-auto p-4 items-center justify-between xl:justify-around w-full">
        <a href="/" className="flex items-center">
          <Image
            src={"/assets/image/beauty.png"}
            alt="Logo"
            width={50}
            height={50}
            className="mr-3 rounded-xl"
          />
          <div>
            <p className="text-2xl font-sergio text-gray-700 xl:flex">
              <span className="text-yellow-400">B</span>eauty
            </p>
            <br />
            <p className="text-2xl font-sergio text-gray-700 xl:flex  -mt-8">
              <span className="text-yellow-400">S</span>kin
            </p>
            <br />
            <p className="text-2xl font-sergio text-gray-700 xl:flex  -mt-8">
              <span className="text-yellow-400">C</span>linic
            </p>
          </div>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-sergio">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 hover:text-gray-700"
                aria-current="page"
              >
                Treatment
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 hover:text-gray-700"
              >
                Skincare
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 hover:text-gray-700"
              >
                Stores
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 hover:text-gray-700"
              >
                Journal
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 hover:text-gray-700"
              >
                Pricelist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
