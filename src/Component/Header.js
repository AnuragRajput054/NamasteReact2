
  
  // Header component for header section: Logo, Nav Items

import { LOGO_URL } from "../utils/constaints";

  
  // Header component for header section: Logo, Nav Items
  
  const Header = () => {
    return (
      <div className="header">
       
        <img
        className="logo"
        alt="Logoo"
        src={LOGO_URL}
      ></img>


        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  

  export default Header;
