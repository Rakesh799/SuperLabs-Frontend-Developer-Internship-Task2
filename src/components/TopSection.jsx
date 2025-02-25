import React from 'react'

function TopSection() {
    return (
        <div className="top-section pt-[10px] pb-[5px] flex justify-center">
            <div className="container top-bar flex justify-between flex-wrap border-b border-b-[#d1d1d1] pb-[5px] max-w-[1320px]">
                <div className="left-bar text-[#838383] px-3">
                    <span id="top-text">World's Largest Medical Equipment Market Place</span>
                </div>
                <div className="right-bar text-[#1e1e1e] px-3">
                    <a href="https://1mdm.com/index.php?route=account/account" className='hover:text-[#ed1c24] cursor-pointer'><span>My account | </span></a>
                    <a href="contact.php" className='hover:text-[#ed1c24] cursor-pointer'><span>Contact Us</span></a>
                </div>
            </div>
        </div>
    )
}

export default TopSection
