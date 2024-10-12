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
                <div className="column3">
                  <div className="gstack">
                    <div className="coltext">ABOUT US</div>
                    <h2 className="headline">
                      Meet the Minds Behind Our Modern Farm
                    </h2>
                    <p className="bodytext ">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Officiis aperiam delectus nobis alias rem mollitia quasi
                      quibusdam ipsum officia, modi neque sequi, quis adipisci
                      nemo incidunt sint nesciunt ea. Impedit deserunt ratione
                      totam pariatur, vero quasi voluptatibus laudantium maiores
                      minima, necessitatibus odit, atque facere molestias saepe
                      modi? Maxime!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="absolutepepper">
            <img className="coverimg" src="/pepper.png" alt="pepper.pic" />
          </div>
        </div>
        <section id="story" className="storysection">
          <div className="wrapper gstack2">
            <div className="rowtac">
              <div className="col col4">
                <div className="gstack1">
                  <div className="coltext">OUR STORY</div>
                  <h2 className="headline">
                    Showing the Seeds of an Organic Revolution
                  </h2>
                </div>
              </div>
            </div>
            <div className="relativefill1">
              <div className="rowalign">
                <div className="col col2"></div>
                <div className="col col1">
                  <div className="card">
                    <div className="relative">
                      <img
                        className="colimage"
                        src="/oldfarm.png"
                        alt="farm.pic"
                      />
                      <div className="absolutestory">
                        <div className="storyhead">Our Farm 60 Years Ago</div>
                      </div>
                    </div>
                    <div className="cardwrapper">
                      <div className="gstack3">
                        <h3 className="headline1 ">
                          Rooted in Tradition: The Early Years of Our Farm
                        </h3>
                        <p className="bodytext1">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Atque magni incidunt rerum veniam molestias
                          reiciendis corrupti sint. Laborum odio sed magnam
                          soluta porro libero fugit facere quibusdam facilis
                          voluptates. Temporibus, accusamus!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col1">
                  <div className="relative">
                    <div className="card">
                      <div className="relative">
                        <img
                          className="colimage "
                          src="/newfarm.png"
                          alt="newfarm"
                        />
                        <div className="absolutestoryright">
                          <div className="storyhead">Our Farm Today</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
