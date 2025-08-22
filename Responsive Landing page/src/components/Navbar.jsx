import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="brand_logo.png" alt="" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
          <li href="#">Shop</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
