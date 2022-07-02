import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav>
        <div className="brand">
          <a href=" # ">
            <h1><Link exact to="/">Home</Link></h1>
          </a>
        </div>
        <div className="menu">
          <div>
            <li>
              <a href="/">
                <Link exact to="/">Home</Link>
              </a>
            </li>
            <li>
              <a href="/skill"><Link exact to="/skill">Skill</Link></a>
            </li>
            <li>
              <a href=" # ">About</a>
            </li>
          </div>
        </div>
        <div className="contact">
          <li className="contact-btn">
            <a href="/contact"><Link exact to="/contact">Contact</Link></a>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
