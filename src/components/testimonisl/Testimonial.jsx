import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function Testimonial() {
    const context = useContext(myContext)
    const { mode } = context
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{color: mode === 'dark' ? 'white' : ''}}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{color: mode === 'dark' ? 'white' : ''}}>What our <span className=' text-green-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://granthcodes.com/assets/profile-pic.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"I was looking to plant more trees in my backyard and stumbled upon TreePlants.com. Their wide variety of trees and easy delivery across India made it a breeze. The saplings arrived in perfect condition, and the detailed planting guide was incredibly helpful. I've already seen growth in just a few weeks. Highly recommend TreePlants.com for all your tree needs!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Amit Sharma</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500"> Delhi</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">
                                "TreePlants.com exceeded my expectations with their fantastic service. I ordered a few fruit trees to plant around my farm in Maharashtra, and they arrived healthy and well-packaged. The customer support team was very responsive and guided me through the entire process. It's heartwarming to see such dedication towards promoting greenery across India. I will definitely be ordering more!"
                                    </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Emily R</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">jaipur rajasthan</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="
                                https://cdn-icons-png.flaticon.com/128/2763/2763444.png" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">
                                "Living in a city, I wanted to contribute to a greener environment. TreePlants.com made it possible with their efficient service and variety of options. The trees I ordered were delivered promptly and were of excellent quality. Planting them has been a rewarding experience, and I can already see the positive impact on my surroundings. Thank you, TreePlants.com, for making tree planting so accessible!"
                                    </p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">baby j</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Bangalore</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial