import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { motion } from "framer-motion"

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <motion.div initial={{ opacity: 0}} exit={{ opacity: 0}} animate={{ opacity: 1}}  className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    alt="checkout ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                />
                <div>
                   
                    <h3 className="checkout__title">
                        Your Shopping Basket
                    </h3>
                    {
                        basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </motion.div>
    )
}

export default Checkout 
