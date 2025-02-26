import React from 'react'
import logo from '../assets/logo.png'

function MenuBar() {
    return (
        <div className='menubar flex justify-center pb-[5px] sticky top-0 z-10 bg-[#fff] '>
            <div className="container max-w-[1320px]">
                <nav className='opacity-100'>
                    <div className="flex flex-wrap items-center justify-between mx-auto  py-2">

                        <a href="https://1mdm.com/" target="_blank"><img className="logo w-[160px] ml-3" src={logo} alt="1MDM logo" /></a>

                        <div className="flex justify-end items-center" id="navbarNav">
                            <div className='opacity-100'>
                                <ul className="navbar-nav flex flex-row gap-x-4 px-4 text-[#838383]">
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