import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { PopoverClose } from "@radix-ui/react-popover";

export default function Navbar() {
  const links = [
    {
      id: 1,
      link: "Treatment",
      name: "Treatment",
    },
    {
      id: 2,
      link: "Store",
      name: "Store",
    },
    {
      id: 3,
      link: "Skincare",
      name: "Skincare",
    },
    {
      id: 4,
      link: "Pricelist",
      name: "Pricelist",
    },
    {
      id: 5,
      link: "Journal",
      name: "Journal",
    },
  ];

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
        <Popover>
          <PopoverTrigger className="fixed right-10 transition hover:scale-105 bg-gradient-to-tr from-pink-300 via-white to-yellow-300 p-2 rounded-full mt-2 xl:m-auto data-[state=open]:zoom-in-120 border-b-4 text-sm z-10 xl:hidden md:hidden">
            <div
              data-collapse-toggle="navbar-default"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg"
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
            </div>
          </PopoverTrigger>
          <PopoverContent className="z-20 w-[385px] min-h-[1280px] md:hidden">
            <PopoverClose className="fixed right-10 mt-20 hover:scale-110 bg-red-300 border-4 border-double border-blue-500 p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </PopoverClose>
            <div
              className="w-full md:block md:w-auto place-items-center text-center justify-center mt-60 gap-4 text-3xl"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-sergio">
                {links.map(({ id, link, name }) => (
                  <li key={id} className="pb-10 hover:scale-110">
                    <Link
                      href={link}
                      className="py-2 px-3 backdrop-blur-xl border bg-yellow-200 border-yellow-400 shadow-xl rounded-full hover:border-dashed text-yellow-900"
                      aria-current="page"
                    >
                      . {name} .
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-sm mt-10 border-slate-200 font-sergio font-extralight">
                  2024, Beauty Skin Clinic
                </p>
                <p className="font-sergio text-xs mt-2">All rights reserved</p>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 font-sergio">
            {links.map(({ id, link, name }) => (
              <li key={id}>
                <Link
                  href={link}
                  className="py-2 px-3 text-gray-500 hover:text-gray-700"
                  aria-current="page"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
