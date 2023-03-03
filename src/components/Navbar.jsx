import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg";
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return {
        iconColor: "#2c2c2c",
        pClass: "navbarListItemNameActive",
      };
    } else {
      return {
        iconColor: "#8f8f8f",
        pClass: "navbarListItemName",
      };
    }
  };

  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <ExploreIcon
              fill={pathMatchRoute("/").iconColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/").pClass}>Explore</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <OfferIcon
              fill={pathMatchRoute("/offers").iconColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/offers").pClass}>Offers</p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile").iconColor}
              width="36px"
              height="36px"
            />
            <p className={pathMatchRoute("/profile").pClass}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
