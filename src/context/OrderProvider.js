import React, { createContext, useContext, useState } from 'react';

const MealContext = createContext();

export const useOrder = () => {

    return useContext(MealContext);

};

const OrderProvider = ({ children }) => {

    const [meal, setMeal] = useState([]);

    const handleClick = (meal, num) => {

        setMeal((previousValue) => {
            return [...previousValue, meal];
        });

        meal['quantity'] = num;

    };

    const value = { handleClick, meal, setMeal };

    return (

        <MealContext.Provider value={value}>
            {children}
        </MealContext.Provider>

    );
};

export default OrderProvider;