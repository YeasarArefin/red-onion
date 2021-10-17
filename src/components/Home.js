import React from 'react';
import '../styles/Home.css';

const Home = () => {
    return (

        <>

            <div className="bg-yellow-100">

                <div className="bg-img flex items-center">

                    <div className="flex flex-col items-center container">

                        <h1 className="text-4xl text-center md:text-6xl mb-10">Best Food Wating For Your Belly</h1>

                        <div className="w-full md:w-5/12 flex justify-between bg-white rounded-full">

                            <input type="text" className="search" placeholder="Food Name" />
                            <button className="btn">Search</button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );
};

export default Home;
