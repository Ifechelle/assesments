import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "../../header.css";



const Header = () => {
  const navigate = useNavigate()
  const BackHandler = () => {
    navigate("/StartPage")
  }
  const SetHandler = () => {
    navigate("/settings")
  }
  const HomeHandler = () => {
    navigate("/home")
  }
  const AboutHandler = () => {
    navigate("/about")
  }
  const ContactHandler = () => {
    navigate("/contact")
  }
  const ProfileHandler = () => {
    navigate("/profile")
  }
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header" className="code">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "" : ""} <img src="images/logo.jpg" alt="pic" width="90" height="90"></img></p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle />
              ) : (
                <FiArrowLeftCircle />
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />}>
              <div onClick={HomeHandler}>Home</div>
              </MenuItem>
              <MenuItem icon={<FaList />}><div onClick={ProfileHandler}>Profile</div></MenuItem>
              <MenuItem icon={<FaRegHeart />}><div onClick={ContactHandler}>Contact Us </div></MenuItem>
              <MenuItem icon={<RiPencilLine />}><div onClick={AboutHandler}>About </div></MenuItem>
              <MenuItem icon={<BiCog />}><div onClick={SetHandler}>Settings</div></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}> 
              <div onClick={BackHandler}>Logout</div>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;