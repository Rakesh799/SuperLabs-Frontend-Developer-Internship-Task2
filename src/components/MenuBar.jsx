import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu } from "lucide-react";


function MenuBar() {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(e) {
        setIsOpen(!isOpen);
    }

    return (
        <div className='menubar flex justify-center pb-[5px] sticky top-0 z-10 bg-[#fff] '>
            <div className="container max-w-[1320px]">
                <nav className='opacity-100'>
                    <div className="flex flex-row flex-wrap items-center justify-between mx-auto py-2">

                        <a href="https://1mdm.com/" target="_blank"><img className="logo w-[160px] ml-3" src={logo} alt="1MDM logo" /></a>

                        <button onClick={handleClick} className="md:hidden block p-4 rounded-md hover:bg-gray-200">
                            <Menu className="w-8 h-8 text-gray-500" />
                        </button>

                        <div className={`${isOpen ? "block" : "hidden"} md:flex justify-end items-center`} id="navbarNav">
                            <div className='opacity-100'>
                                <ul className="navbar-nav flex flex-col md:flex-row gap-x-4 px-4 text-[#838383]">
                                    <li className="nav-item hover:text-[#ed1c24]">
                                        <a className="nav-link" aria-current="page" href="index.php">About Us </a>
                                    </li>
                                    <li className="nav-item hover:text-[#ed1c24]">
                                        <a className="nav-link" aria-current="page" href="our-story.php">Our Story </a>
                                    </li>
                                    <li className="nav-item hover:text-[#ed1c24]">
                                        <a className="nav-link" aria-current="page" href="seller.php">Sell on 1MDM </a>
                                    </li>
                                    <li className="nav-item hover:text-[#ed1c24]">
                                        <a className="nav-link" aria-current="page" href="pricing.php">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    )
}

export default MenuBar