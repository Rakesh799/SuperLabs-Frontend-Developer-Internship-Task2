import React from 'react'

function FloatingButtons() {
    return (
        <div>
            <button className="z-50 fixed bottom-[90px] right-[40px] w-[200px] h-[30px] bg-[#ed1c24] text-white rounded-full text-center shadow-lg shadow-black/10 py-1">
                Start Selling
            </button>

            <button className="z-50 fixed bottom-[35px] right-[40px] w-[200px] h-[30px] bg-[#ed1c24] text-white rounded-full text-center shadow-lg shadow-black/10 py-1">
                Customer Service
            </button>
        </div>
    )
}

export default FloatingButtons
