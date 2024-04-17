import { LoginModal } from "../../";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";

function LoggedInItems({
  handle_Login_Open,
  handle_Login_Close,
  openLogin,
  is_Loading,
}) {

  return (
    <div>
      <MenuItem
        // style={{ border: "3px solid green" }}
        className="w-[15rem] h-[3.5rem] "
      >
        <svg
          fill="#000000"
          height="1.2rem"
          width="1.2rem"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 310 310"
          xmlSpace="preserve"
        >
          <path
            d="M300.606,159.727l-45.333-45.333c-5.857-5.858-15.355-5.858-21.213,0L225,123.454V15c0-8.284-6.716-15-15-15H20
	C11.716,0,5,6.716,5,15v240.002c0,8.284,6.716,15,15,15h85V295c0,8.284,6.716,15,15,15h45.333c3.979,0,7.794-1.581,10.607-4.394
	l124.667-124.667C306.465,175.081,306.465,165.585,300.606,159.727z M35,30h160v123.454l-85.606,85.605
	c-0.302,0.301-0.581,0.619-0.854,0.942H35V30z M159.12,280H135v-24.121l109.667-109.666l24.12,24.12L159.12,280z"
          />
        </svg>
        <span className="ml-[0.7rem]">Register</span>
      </MenuItem>
      <MenuItem
        // style={{ border: "3px solid green" }}
        className="w-[15rem] h-[3.5rem] "
        // onClick={() => setCurrentUser(true)}
      >
        <LoginIcon style={{ color: "red" }} />
        <LoginModal
          openLogin={openLogin}
          handle_Login_Open={handle_Login_Open}
          handle_Login_Close={handle_Login_Close}
          is_Loading={is_Loading}
        />
      </MenuItem>
    </div>
  );
}

export default LoggedInItems;
