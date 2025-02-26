import React, { useState, useEffect } from 'react';

function Banner() {
    
    const targetNumbers = {
        buyers: 26000000,
        suppliers: 40000,
        countries: 200,
    };

    const [buyers, setBuyers] = useState(0);
    const [suppliers, setSuppliers] = useState(0);
    const [countries, setCountries] = useState(0);

    useEffect(() => {
        const duration = 6000; 
        const steps = 100; 
        const intervalTime = duration / steps; // Time per step

        let step = 0;
        const interval = setInterval(() => {
            step++;

            setBuyers(Math.ceil((targetNumbers.buyers / steps) * step));
            setSuppliers(Math.ceil((targetNumbers.suppliers / steps) * step));
            setCountries(Math.ceil((targetNumbers.countries / steps) * step));

            if (step >= steps) clearInterval(interval);
        }, intervalTime);

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className='h-[500px] bg-[url("/banner.png")] bg-cover bg-center'>
            <div>
                <div className="flex max-w-[1320px] mx-auto">
                    <div className="w-1/2 pl-3 pt-[115px]">
                        <h3 className='text-2xl py-1'>Sell on 1mdm.com</h3>
                        <h1 className='text-[41.6px] font-bold leading-13'>Reach millions of B2B buyers globally</h1>
                        <div className="flex items-center gap-3 mt-16 pt-4">
                            <button className='bg-[#ed1c24] text-white py-1.5 px-3 rounded-full'>Start selling</button>
                            <button className='bg-white text-[#ed1c24] py-1.5 px-3 rounded-full ring-1 ring-[#ed1c24]'>Chat with consultant</button>
                        </div>
                    </div>
                    <div className="w-1/2 pt-20 flex">
                        <div className='w-1/2'></div>
                        <div className="w-1/2 pl-2">
                            <div className='pl-8 pt-10'>
                                <h3 className='text-[28px] font-medium'>{buyers.toLocaleString()}</h3>
                                <p className='text-[16px]'>active buyers globally</p>
                            </div>
                            <div className='pl-8 pt-10'>
                                <h3 className='text-[28px] font-medium'>{suppliers.toLocaleString()}</h3>
                                <p className='text-[16px]'>verified suppliers globally</p>
                            </div>
                            <div className='pl-8 pt-10'>
                                <h3 className='text-[28px] font-medium'>{countries}</h3>
                                <p className='text-[16px]'>countries served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
