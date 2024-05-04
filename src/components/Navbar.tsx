import { useState } from "react";
import kryptoLogo from "/krypto.svg";
import clsx from "clsx";

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);

  const handleMenu = () => {
    setMenuState((prevState) => !prevState);
  };

  return (
    <nav className="bg-background">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center sm:pl-10 hover:cursor-pointer">
              <img className="h-3 w-auto" src={kryptoLogo} alt="krypto" />
            </div>
            {/* Mobile Menu Options */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Tab title="about" />
                <Tab title="pricing" />
                <Tab title="contact" />
                <Tab title="buy nfts" />
              </div>
            </div>
          </div>
          <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-gray-700 hover:text-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                {/* Menu Icon */}
                <svg
                  className={clsx("h-6 w-6", {
                    "block": !menuState,
                    "hidden": menuState,
                  })}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Close Menu Icon */}
                <svg
                  className={clsx("h-6 w-6", {
                    "block": menuState,
                    "hidden": !menuState,
                  })}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="sm:hidden" id="mobile-menu">
        <div className={clsx("space-y-1 px-2 pb-3 pt-2",{
            "block": menuState,
            "hidden": !menuState
        })}>
          <Tab title="about" />
          <Tab title="pricing" />
          <Tab title="contact" />
          <Tab title="buy nfts" />
        </div>
      </div>
    </nav>
  );
};

interface TabProps {
  title: string;
}

const Tab = ({ title }: TabProps) => {
  return (
    <a
      href="#"
      className="font-outfit font-extralight text-lg text-gray-300 hover:bg-[#8F8FDB] hover:text-white hover:text-xl block md:flex rounded-full px-3 py-2 text-center"
      aria-current="page"
    >
      {title}
    </a>
  );
};
