import './App.css';
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./component/Login";
import Register from "./component/Register";
import Checkout from "./component/Checkout";
import AmazonPrime from "./component/AmazonPrime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Payment from "./component/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



function App() {
  const promise = loadStripe("pk_test_51JDSjnSFuhUy9vqI5lTIfA6lTk8jlni9dhgGNuoTX407lLc9sfmIzE30mbnd8AkTt7ZtuxqQqSGrtbkDbobPDhsk00y3E604H4");

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/AmazonPrime">
            <AmazonPrime/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>      
    </div>
    </Router>
  );
}

export default App;
