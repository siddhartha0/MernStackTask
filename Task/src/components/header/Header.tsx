import logo from "../../assets/Company Logo.png";
import menuButton from "../../assets/hiddenButton.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="flex place-items-center justify-between p-smallNavBar laptop:p-navBar">
      <div className="flex place-items-center gap-16">
        <img src={logo} alt="" />
        <div className="hidden  laptop:flex laptop:place-items-center text-lg gap-16 capitalize">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Our Products</NavLink>
          <div>
            <NavLink to="/">Resources</NavLink>
          </div>
          <NavLink to="/contactUs">Contacts</NavLink>
        </div>
      </div>

      <div className="hidden laptop:flex ">
        <button
          className="text-button "
          style={{
            padding: "12px 18px 12px 18px",
          }}
        >
          Sign up
        </button>
        <button
          className="bg-button rounded-md text-white font-semibold"
          style={{
            padding: "12px 18px 12px 18px",
          }}
        >
          Log In
        </button>
      </div>

      <div className="flex laptop:hidden  ">
        <img src={menuButton} alt="" />
      </div>
    </div>
  );
}

export default Header;
