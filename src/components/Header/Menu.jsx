import React from "react";
import "./Menu.css";
import logo from "./Myntra_logo.png";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Menu = () => {
  return (
    <div className="mainContainer">
      <img
        src={logo}
        style={{ width: "7%", height: "44px", marginLeft: "4%" }}
      />
      <div className="headerContainer">
        <div>MEN</div>
        <div>WOMEN</div>
        <div>KIDS</div>
        <div>HOME & LIVING</div>
        <div>BEAUTY</div>
        <div>STUDIO</div>
      </div>
      <div className="searchbarContainer">
        <TextField
          label="Search for products, brands and more"
          size="small"
          sx={{
            width: "64ch",
            color: "#696e79",
            background: "#f5f5f6",
            fontSize: "14px",
            lineHeight: "20px",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="profileContainer">
        <div className="profileDetails">
          <PersonOutlineOutlinedIcon />
          <div>Profile</div>
        </div>
        <div className="profileDetails">
          <FavoriteBorderOutlinedIcon />
          <div>Wishlist</div>
        </div>
        <div className="profileDetails">
          <ShoppingBagOutlinedIcon />
          <div>Bag</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
