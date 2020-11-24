import React, { useEffect } from 'react'
import "./home.css"
import { motion } from "framer-motion"
import Aos from "aos"
import "aos/dist/aos.css"

import Product from './Product'

function Home() {
    
    useEffect(() => {
        Aos.init({ duration: 1100})
    }, [])
    return (
        <motion.div initial={{ opacity: 0}} exit={{ opacity: 0}} animate={{ opacity: 1}} className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="amazon banner"
                />

                <div data-aos="slide-left" className="home__row">
                    <Product 
                        id={96546413}
                        title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD "
                        price={14950.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
         
                </div>

                <motion.div data-aos="slide-up" initial={{ opacity: 0}} exit={{ opacity: 0}} animate={{ opacity: 1}} className="home__row">
                    <Product 
                        id={6346541}
                        title="The lean startup"
                        price={29.99}
                        image="https://i0.wp.com/startupcollections.com/inc/uploads/2016/11/the-lean-startup.png?fit=554%2C522&ssl=1"
                        rating={3}
                    />
                    <Product 
                        id={43411312}
                        title="Kenwood Kmix stand"
                        price={129.99}
                        image="https://appliancist.com/wp-content/uploads/2016/07/kenwood-stand-mixer-kmix-kmx51.jpg"
                        rating={5}
                    />
                     <Product 
                        id={84351321}
                        title="Beats By Dre Studio 3 wireless Over-ear Headphones"
                        price={180.99}
                        image="https://media.4rgos.it/i/Argos/7393174_R_Z001A?w=750&h=440&qlt=70"
                        rating={4}
                    />

                </motion.div>
                <div data-aos="flip-right" className="home__row">
                    <Product 
                        id={653443}
                        title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD "
                        price={14950.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
         
                </div>
                <div data-aos="slide-right" className="home__row">
                   
                    <Product 
                        id={43543421}
                        title="Galaxy Buds Live with AKG sound launched"
                        price={380.99}
                        image="https://img.talkandroid.com/uploads/2020/08/Samsung_Galaxy_Buds_Live-1.png"
                        rating={5}
                    />
                    <Product 
                        id={643541312}
                        title="Samsung Galaxy Note20 Ultra"
                        price={1099.99}
                        image="https://images.samsung.com/africa_en/smartphones/galaxy-note20/buy/sm-n985-986-galaxynote20ultra-combo-mysticbronze-330.png"
                        rating={5}
                    />
                   

                </div>

            </div>

        </motion.div>
    )
}


export default Home
