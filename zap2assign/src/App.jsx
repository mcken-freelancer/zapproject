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
                      <a href="#story" className="navlink">
                        Our Story
                      </a>
                      <a href="#harvest" className="navlink">
                        Our Harvest
                      </a>
                      <a href="#benefit" className="navlink">
                        Benefits
                      </a>
                      <a href="#review" className="navlink">
                        Reviews
                      </a>
                      <a href="#contact" className="navlink">
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
                  <a href="#harvest" className="buttprim">
                    Discover our products
                  </a>
                  <a href="#contact" className="buttsec">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="relativefill">
                <div className="absolutepumpkin">
                  <img
                    className="coverimg"
                    src="/pumpkin.png"
                    alt="pumpkin pic."
                  />
                </div>
                <div className="absolutecabbage">
                  <img
                    className="coverimg"
                    src="/cabbage.webp"
                    alt="cabbage pic."
                  />
                </div>
                <div className="absolutetomato">
                  <img
                    className="coverimg"
                    src="/tomato.png"
                    alt="tomato pic."
                  />
                </div>
                <div className="absolutegarlic">
                  <img
                    className="coverimg"
                    src="/garlic.png"
                    alt="garlic pic."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aboutwrapper">
          <section id="about" className="aboutsection">
            <div className="wrapper">
              <div className="rowalign">
                <div className="column2">
                  <div className="videowrapper">
                    <div className="videobackground">
                      <video
                        className="thevideo"
                        src="/farmvid.mp4"
                        autoPlay
                        muted
                        loop
                      >
                        Ooops! This video is not supported by your browser
                      </video>
                    </div>
                  </div>
                </div>
                <div className="continue here"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
