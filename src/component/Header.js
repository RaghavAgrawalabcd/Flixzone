import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Pelican from "../images/Pelican.png"
import { Link } from "react-router-dom";
import { useSelector, } from "react-redux";
import { useDispatch } from "react-redux";
import FlixZone from "../images/FlixZone.png";
function Header() {
  const dispatch = useDispatch();
  const { basket, user } = useSelector(state => state.Basket);
  const handleAuthentication = () => {
    if (user) {
        dispatch({
        type: 'Set_User',
        user : null
      })
    }
  }
  return (
    <div className="Header">
      <Link to="/">
        <img
        className="HeaderLogo"
          src={FlixZone}
          alt=""
      />
      </Link>
      <div className="HeaderSearch">
        <input className="HeaderSearchInput" type="text" />
        <SearchIcon className="HeaderSearchIcon" />
      </div>
      <div className="HeaderNav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="HeaderOption">
          <span className="HeaderOptionLineOne"> Hello Guest </span>
            <span className="HeaderOptionLineTwo">{ user ? "Sign Out" : "Sign In "}</span>
        </div>
        </Link>
        <div className="HeaderOption">
          <span className="HeaderOptionLineOne"> Returns </span>
          <span className="HeaderOptionLineTwo"> & Orders </span>
        </div>
        <div className="HeaderOption">
          <span className="HeaderOptionLineOne"> Your </span>
          <span className="HeaderOptionLineTwo"> Prime </span>
        </div>
        <Link to="/checkout">
          <div className="HeaderOptionBasket">
                  <ShoppingBasketIcon />
            <span className="HeaderOptionLineTwo HeaderBasketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
