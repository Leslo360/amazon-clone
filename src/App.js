import React, { useEffect } from 'react';
import './App.css';
import { AnimatePresence} from "framer-motion"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header"
import Home from './Home';
import Checkout from "./Checkout"
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"


const promise = loadStripe('pk_test_51HPybRJgEUFeAaPAk3sMxXMBi9ii3yo3tFiTBLM6B6L8buajYBLRY9ZR2AD4AUllMBWH37yrFJYriCYCoJcRFYwl00IHYf1vyt')

function App() {
  const [{},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        // the user just logged in / already logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      <AnimatePresence exitBeforeEnter>

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />  
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />  
            <Elements stripe={promise}>
               <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />  
            <Orders />
          </Route>
          <Route path="/">
            <Header />  
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>

      </div>
    </Router>
  );
}

export default App;