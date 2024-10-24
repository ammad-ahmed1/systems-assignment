import React, { useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen, ",,,,,,open");
  };

  return (
    <nav className="text-black py-4 px-0 z-20">
      <div className="flex items-center justify-between w-90p m-auto px-5">
        <div className="flex items-center">
          <img
            src="https://webmomentum.co.uk/digital-marketing-reading-img/2024/02/cropped-web-momentum.png"
            alt="Web Momentum Logo"
            className="h-14 py-2"
          />
          <h3 className="hidden lg:flex items-center text-[28px] font-bold py-2 px-2 font-serif">
            Web Momentum
          </h3>
        </div>

        <div className="hidden lg:flex space-x-4 items-center">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="hover:text-gray-400 py-0 px-8 font-semibold text-[20px] font-sans"
            >
              {name}
            </a>
          ))}
        </div>

        <div className="block lg:hidden">
          <button
            className="menu-toggle focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 512 512"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
            >
              <path d="M0 96c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24zm0 160c0-13.255 10.745-24 24-24h464c13.255 0 24 10.745 24 24s-10.745 24-24 24H24c-13.255 0-24-10.745-24-24z"></path>
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col justify-start items-center">
          <button
            className="close-button text-black m-4 self-end"
            onClick={toggleMenu}
          >
            Close
          </button>
          <div className="flex-grow flex justify-center items-start py-4">
            <ul className="flex flex-col space-y-4 text-center my-4">
              {navItems.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="py-2 text-lg hover:text-gray-400 font-serif text-[22px]"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
