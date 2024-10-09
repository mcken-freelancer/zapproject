import "./App.css";

function App() {
  return (
    <>
      <div className="entirepage">
        <div className="navbarwrapper">
          <div className="navbarnav">
            <div className="navbarrow">
              <div className="navcontainer">
                <p className="logotype">
                  <img src="/freshfieldlogo.png" alt="freshfield" />
                </p>
                <nav className="navmenu">
                  <div className="navcenter">
                    <div className="alignhorizontalcenter">
                      <a href="#about" className="navlink">
                        About Us
                      </a>
                      <a href="#ourstory" className="navlink">
                        Our Story
                      </a>
                      <a href="#ourharvest" className="navlink">
                        Our Harvest
                      </a>
                      <a href="#benefits" className="navlink">
                        Benefits
                      </a>
                      <a href="#reviews" className="navlink">
                        Reviews
                      </a>
                      <a href="#contactus" className="navlink">
                        Contact Us
                      </a>
                    </div>
                  </div>
                  <div>
                    <a
                      href="https://webflow.com/templates"
                      target="_blank"
                      className="navbutton"
                    >
                      Buy Template
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
