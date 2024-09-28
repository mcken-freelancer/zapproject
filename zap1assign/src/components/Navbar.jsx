import { Link } from "react-router-dom";
import React from "react";
import { buttonwork } from "./myscript";
import "./Navstyle.css";
function Navbar() {
  return (
    <>
      <div className="topwords">
        <h3>555-0198 Maple Street, Spriengfield, IL 62701</h3>
        <h3>Monday-Saturday:9am-11.30pm</h3>
      </div>

      <div className="flex justify-between text-center">
        <div className="h-auto  mx-5 my-5 w-36">
          <img src="/src/assets/mainLogo.svg" alt="Healthsquare" />
        </div>
        <div>
          <ul className="flex space-x-4 my-5 mx-5">
            <li>
              <Link to="/">
                <button className="border-none px-1" id="mybutton">
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/services"> Services</Link>
            </li>
            <li>Pricing</li>
            <li>
              <select>
                <option> Pages</option>
              </select>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
            <li>Cart (0)</li>
            <button className="getclass">Get Started</button>
          </ul>
        </div>
        <script>buttonwork()</script>
      </div>
    </>
  );
}
export default Navbar;
