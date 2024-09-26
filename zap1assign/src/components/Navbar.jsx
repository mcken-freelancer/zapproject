import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex bg-green-600 justify-between text-white border-solid border-black">
        <h3>555-0198 Maple Street, Spriengfield, IL 62701</h3>
        <h3>Monday-Saturday:9am-11.30pm</h3>
      </div>

      <div>
        <div>
          <image src="./assets/Main Logo.svg" />
        </div>
        <div>
          <ul className="flex">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/services"> Services</Link>
            </li>
            <li>
              <Link to="/blog"> Blog</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
