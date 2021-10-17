import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useOrder } from '../context/OrderProvider';

const OrderMeal = ({ meal }) => {

    let { name, moreDiscription, img, price } = meal;

    const [num, setNum] = useState(1);

    const increment = () => {

        setNum(num + 1);
        meal['quantity'] = num;

    };

    const decrement = () => {

        if (num > 1) {
            setNum(num - 1);
            meal['quantity'] = num;
        }

    };

    const { handleClick } = useOrder();

    return (

        <>

            <div className="container ">

                <div className="wrapper pt-20 lg:pt-0">

                    <div className="grid grid-cols-1  md:grid-cols-2 items-center h-screen">

                        <div className="text">

                            <h1 className="text-5xl mb-5 font-semibold">{name}</h1>
                            <p className="text-gray-600 mb-6">{moreDiscription}</p>

                            <div className="flex items-center gap-x-6 mb-8">

                                <h1 className="text-4xl font-bold ">${price * num}</h1>

                                <div className="flex w-40 justify-between rounded-full items-center gap-x-5 px-3 py-2 border">

                                    <button onClick={decrement} className="symbol-btn" >
                                        <AiOutlineMinus />
                                    </button>

                                    <h1 className="text-xl">{num}</h1>

                                    <button onClick={increment} className="symbol-btn" >
                                        <AiOutlinePlus />
                                    </button>

                                </div>

                            </div>

                            <div className="flex items-center gap-x-5">
                                <Link to="/checkout">
                                    <button onClick={() => handleClick(meal, num)} className="btn flex items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 gap-x-3"><BsCart2 />Add To Cart</button>
                                </Link>

                                <Link to="/">
                                    <button className="px-10 py-3  rounded-full border border-red-500 flex items-center gap-x-3"><MdOutlineArrowBackIos />Back</button>
                                </Link>
                            </div>

                        </div>

                        <div className="img mt-10 lg:mt-0">

                            <img src={`../${img}`} alt="" />

                        </div>

                    </div>

                </div>

            </div>

        </>
    );
};

export default OrderMeal;
