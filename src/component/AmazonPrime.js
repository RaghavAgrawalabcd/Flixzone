import { useEffect, useState } from 'react';
import "../App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Homescreen from './Homescreen';
import LoginScreen from "./LoginScreen";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux'
import {login , logout } from "../actions/index"


function AmazonPrime() {
  const {s} = useSelector(state => state.Basket)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged In
      } else {
        //logged Out
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {(`${s}` === "true") ? (<Switch> <Route path="/"><Homescreen /></Route></Switch>) : (<LoginScreen/>)}
      </Router>
    </div>
  );
}

export default AmazonPrime;
