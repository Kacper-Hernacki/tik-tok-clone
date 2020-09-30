import React from "react";
import "./Header.css";

function Header({ channel }) {
  return (
    <div className="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Tiktok_logo_text.svg/120px-Tiktok_logo_text.svg.png"
        alt=""
      />
      <p>@{channel}</p>
    </div>
  );
}

export default Header;
