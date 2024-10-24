import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!setIsOpen)
    }
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
    <div className="logo text-xl font-bold">MyLogo</div>
    <div className="hidden md:flex space-x-4">
      <a href="#home" className="hover:text-gray-400">Home</a>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#services" className="hover:text-gray-400">Services</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>
    <div className="md:hidden">
      <button className="menu-toggle focus:outline-none" onClick={toggleMenu}>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white mb-1"></span>
        <span className="block w-6 h-1 bg-white"></span>
      </button>
    </div>

    {isOpen && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-center items-start">
        <div className="bg-gray-800 w-full h-full p-4">
          <button className="close-button text-white" onClick={toggleMenu}>
            Close
          </button>
          <ul className="flex flex-col mt-4">
            <li><a href="#home" className="py-2 text-lg hover:text-gray-400">Home</a></li>
            <li><a href="#about" className="py-2 text-lg hover:text-gray-400">About</a></li>
            <li><a href="#services" className="py-2 text-lg hover:text-gray-400">Services</a></li>
            <li><a href="#contact" className="py-2 text-lg hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    )}
  </nav>
  );
}

export default Navbar