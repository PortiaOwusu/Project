import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import React, { useContext, useState } from "react";
import MyUserContext from "./MyUserContext";
import { useHistory } from "react-router-dom";

function Header(props) {
  const [{ cart }, user, dispatch] = useStateValue();
  const { authedUser, setAuthedUser } = useContext(MyUserContext);
  const [checkLink, setCheckLink] = useState();
  const history = useHistory();
  const handleSignout = () => {
    setAuthedUser(false);
  };

  const handleCheckout = () => {
    if (authedUser) {
      setCheckLink("/checkout");
    } else {
      setCheckLink(`${alert("Please Sign In to checkout")}`);
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__pic" src="logo1.jpg" alt="logo" />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={user && "/login"}>
          <div className="header_option">
            <span className="hearder_L1"> Hello {props.username}</span>
            <span className="hearder_L2" onClick={handleSignout}>
              {props.signStatus}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="hearder_L1"> Favorite </span>
          <span className="hearder_L2"> Categories </span>
        </div>

        <div className="header_option">
          <span className="hearder_L1"> Your </span>
          <span className="hearder_L2"> Pharmacy </span>
        </div>

        <Link to={checkLink} onClick={handleCheckout}>
          <div className="header_basket">
            <ShoppingCartIcon />
            <span className="hearder_L2  header_count">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
