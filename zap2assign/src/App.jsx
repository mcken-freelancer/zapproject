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
        <div className="homewrapper">
          <div className="rowalign">
            <div className="column">
              <div className="columntext">
                <div className="colstack">
                  <div className="coltext">FROM OUR FARM TO YOUR TABLE</div>
                  <h1 className="headline">
                    Discover the Difference of
                    <span className="text-orange-700"> Truly Organic </span>
                    Vegetables
                  </h1>
                  <p className="bodytext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, excepturi et? Officiis, rerum nam enim dolor
                    adipisci dicta, dolores sit cupiditate dolore aliquid ex,
                    inventore obcaecati veniam voluptatem quasi. Porro.
                  </p>
                </div>
                <div className="buttongroup">
                  <a href="#ourharvest" className="buttprim">
                    Discover our products
                  </a>
                  <a href="#contactus" className="buttsec">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="continue here"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
