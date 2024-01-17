import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import "./Header.css";

import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

import { TbMessages } from "react-icons/tb";            

import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";

const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <HiOutlineLogout className="icon" />

        <div className="divider"></div>

        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1669170023257-4da4bc7adfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
