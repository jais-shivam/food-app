import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { selectCartItems } from "../utils/cartSlice";
import { logoImg } from "../utils/constants";


export const Header = () => {
  const [btn, setBtn] = useState('Login');
  const isOnline = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // Subscribing to the store using selector
  const cartItems = useSelector(selectCartItems);

    return (
      <div className="flex justify-between header border shadow-lg">
          <div className="logo-container">
            <img alt="logo" className="w-20 m-2" src={logoImg} />
          </div>
          <div className="nav-items flex items-center">
            <ul className="flex p-4 m-4 gap-8 text-lg ">
              <li>Online Status:{isOnline?'🟢':'🔴'}</li>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
              <li className="font-bold text-xl cursor-pointer"><Link to={'/cart'}>Cart{cartItems.length?`(${cartItems.length})`:''}</Link></li>
              <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
          </div>
        </div>
    );
  };