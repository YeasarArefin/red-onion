import React from 'react';
import { useHistory } from 'react-router-dom';
import { useOrder } from '../context/OrderProvider';
import useAuth from '../hooks/useAuth';
import CheckoutMeal from './CheckoutMeal';
import { BsCart3 } from 'react-icons/bs';

const Checkout = () => {

    const { meal, setMeal } = useOrder();
    const { user } = useAuth();

    const handleDelete = (id) => {

        setMeal((prev) => {

            return prev.filter(item => item.id !== id);

        });

    };

    const history = useHistory();

    return (

        <>

            <div className="container">

                <div className="wrapper grid grid-cols-1 md:grid-cols-2 h-screen items-center gap-x-20 pt-20 lg:pt-0">

                    <div className="flex flex-col">

                        <h1 className="mb-5 text-3xl">Edit Delivary Details</h1>
                        <div className="mb-5 border-b-2 border-gray-700"></div>
                        <input type="text" className="input2 mb-5" defaultValue={user.displayName} placeholder="Name" />
                        <input type="text" className="input2 mb-5" defaultValue={user.email} placeholder="Contact" />
                        <input type="text" className="input2 mb-5" placeholder="Adress" />
                        <input type="text" className="input2 mb-5" placeholder="Flat,Flour" />
                        <input type="text" className="input2 mb-5" placeholder="Add Delevety Instructions" />
                        <button className="input-btn2">Save & Continue</button>

                    </div>

                    <div className="flex flex-col gap-y-10">

                        {
                            meal.length ? (
                                meal.map(item => <CheckoutMeal item={item} key={item.id} meal={meal} handleDelete={handleDelete} />)
                            ) : (

                                <button onClick={() => history.push("/")} className="btn text flex items-center justify-center text-2xl gap-x-3">Add An Item <BsCart3 className="text-3xl" /></button>

                            )
                        }

                    </div>

                </div>

            </div>

        </ >
    );
};

export default Checkout;
