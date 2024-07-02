import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { toggleMode, mode } = context;
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:py-5 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <svg className="text-green-600 w-12 h-12 mb-3 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Wide Variety of Trees</h2>
                                <p className="leading-relaxed">Choose from a diverse range of trees to plant in your home or garden.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-600 w-12 h-12 mb-3 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v12a9 9 0 009 9 9 9 0 009-9V3m-9 5l3 3m0 0l-3 3m3-3H3" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Nationwide Delivery</h2>
                                <p className="leading-relaxed">We deliver trees to every corner of India, ensuring timely and safe arrival.</p>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-600 w-12 h-12 mb-3 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m-6 4h6M6 2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
                                </svg>
                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Affordable Prices</h2>
                                <p className="leading-relaxed">Get the best deals and discounts on a wide selection of trees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
