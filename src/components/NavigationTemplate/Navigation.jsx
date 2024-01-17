import Nav from '../NavIconTemplate/Nav';
import './Navigation.css';
import { PiVideoBold } from 'react-icons/pi';
import { FiChevronLeft } from 'react-icons/fi';
import { MdOutlineNotificationsActive, MdSwapHoriz } from 'react-icons/md';
import { RiAccountCircleLine } from 'react-icons/ri';
import { BiMessageAltAdd, BiDotsHorizontalRounded } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../ThemeContext';

const Navigation = () => {
  const [nav, setnav] = useState(false);

  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
      <div
        className={`menu ${nav && "active"}`}
        onClick={() => {
          setnav((prevState) => !prevState);
        }}
      >
        <FiChevronLeft className="menu-icon" />
      </div>

      <header>
        <div className="profile">
          <img
            src="https://images.unsplash.com/photo-1669170023257-4da4bc7adfbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="user-img"
            className="profile-img"
          />
        </div>
        <span>Your Name</span>
      </header>
      <Nav Icon={RiAccountCircleLine} title={"Profile"} />
      <Nav Icon={MdOutlineNotificationsActive} title={"Notifications"} />
      <Nav Icon={PiVideoBold} title={"Tutorials"} />
      <Nav Icon={BiMessageAltAdd} title={"Message Requests"} />

      <div className="divider"></div>

      <Nav
        Icon={MdSwapHoriz}
        title={`${
          DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
        }`}
        onClick={changeTheme}
      />
      <Nav Icon={BiDotsHorizontalRounded} title={"More details"} />
    </div>
  );
};

export default Navigation;
