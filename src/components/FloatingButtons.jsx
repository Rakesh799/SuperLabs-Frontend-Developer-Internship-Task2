import React from 'react'
import { Headphones, ShoppingCart } from "lucide-react";

function FloatingButtons() {
    return (
        <div className='hidden md:block'>
            <button className="z-50 fixed bottom-[90px] right-[40px] w-[200px] h-[35px] bg-[#ed1c24] text-white rounded-full text-center shadow-lg shadow-black/10 flex items-center justify-center gap-2 px-4">
                <ShoppingCart className="w-4 h-4 text-white" />
                <span>Start Selling</span>
            </button>

            <button className="z-50 fixed bottom-[35px] right-[40px] w-[200px] h-[35px] bg-[#ed1c24] text-white rounded-full text-center shadow-lg shadow-black/10 flex items-center justify-center gap-2 px-4">
                <Headphones className="w-4 h-4 text-white" />
                <span>Customer Service</span>
            </button>
        </div>
    )
}

export default FloatingButtons
