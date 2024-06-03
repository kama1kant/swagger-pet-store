import Icons from "@/component-library/Icons";
import { PAGE_URL } from "@/utils/constants";
import Link from "next/link";
import React from "react";
import { HiUserCircle } from "react-icons/hi2";

export default function Navbar(): React.ReactElement {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold text-white"
            href={PAGE_URL.home}
            aria-label="Brand"
          >
            Pet Store
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-white hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
            <Link
              className="py-3 ps-px sm:px-3 font-medium text-white"
              href={PAGE_URL.dashboard}
              aria-current="page"
            >
              Dashboard
            </Link>
            <Link
              className="flex items-center gap-x-2 font-medium text-white/80 hover:text-white sm:border-s sm:border-white/30 py-2 md:py-0 sm:my-6 sm:ps-6"
              href={PAGE_URL.auth}
            >
              <Icons size="xl" className="text-white">
                <HiUserCircle />
              </Icons>
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
