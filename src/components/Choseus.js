import React from 'react';
import beda from '../assets/Image/adult-blur-blurred-background-687824.png';
import beda2 from '../assets/Image/chef-cook-food-33614.png';
import beda3 from '../assets/Image/architecture-building-city-2047397.png';
import logo1 from '../assets/ICON/Group 204.png';
import logo2 from '../assets/ICON/Group 245.png';
import logo3 from '../assets/ICON/Group 1133.png';

const Choseus = () => {

    return (

        <>

            <div className="container mb-40">

                <div className="wrapper">

                    <div className="text">

                        <div className="mb-8">
                            <h1 className="text-5xl mb-5">Why you chose us</h1>
                            <p className="text-gray-800">Barton waited twenty always repair in within we do. AN delighted offending curiosity my</p>
                            <p className="text-gray-800">is dashwoods at. Boy prosperous increasing surrounded.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">

                            <div className="hover:shadow-lg p-3 rounded-xl transition duration-300" >

                                <div className="img">
                                    <img className="mb-5" src={beda} alt="beda" />
                                </div>

                                <div className="text-gray-700 flex gap-x-5">
                                    <img className="object-contain" src={logo1} alt="logo" />
                                    <div>
                                        <h1 className="text-xl font-semibold">Fast Delivery</h1>
                                        <p className="text-gray-700 font-medium">Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="hover:shadow-lg p-3 rounded-xl transition duration-300">

                                <div className="img">
                                    <img className="mb-5" src={beda2} alt="beda" />
                                </div>

                                <div className="text-gray-700 flex gap-x-5">
                                    <img className="object-contain" src={logo2} alt="logo" />
                                    <div>
                                        <h1 className="text-xl font-semibold">Fast Delivery</h1>
                                        <p className="text-gray-700 font-medium">Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                                    </div>
                                </div>

                            </div>

                            <div className="hover:shadow-lg p-3 rounded-xl transition duration-300">

                                <div className="img">
                                    <img className="mb-5" src={beda3} alt="beda" />
                                </div>

                                <div className="text-gray-700 flex gap-x-5">
                                    <img className="object-contain" src={logo3} alt="logo" />
                                    <div>
                                        <h1 className="text-xl font-semibold">Fast Delivery</h1>
                                        <p className="text-gray-700 font-medium">Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
};

export default Choseus;
