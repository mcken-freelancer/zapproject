import { Link } from "react-router-dom";
import React from "react";
import "../App.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <div className="entirepage">
        <Navbar />
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
                      <div className="cardwrapper">
                        <div className="gstack3">
                          <h3 className="headline1">
                            Growing Together: Evolution and Expansion
                          </h3>
                          <p className="bodytext1">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Aut facilis pariatur officia illo in labore
                            autem nesciunt itaque vel laudantium laborum fuga
                            incidunt, quae repellat, doloribus delectus dicta
                            hic praesentium similique.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="abslettuceandgarlic">
                      <img
                        className="coverimg "
                        src="/lettuce.garlic.png"
                        alt="lettuceandgarlic"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col2 "></div>
              </div>
              <div className="abscenter">
                <div className="headline1">VS</div>
              </div>
            </div>
            <div className="rowtac">
              <div className="col col4">
                <div className="avcfill">
                  <h2 className="headline2">Our Numbers talk for themselves</h2>
                </div>
              </div>
            </div>
            <div className="relativefill1">
              <div className="gstackrow">
                <div className="col col1">
                  <div className="relativefill1">
                    <div className="relative">
                      <div className="bordercorner">
                        <div className="tac">
                          <div className="headline">1,000+</div>
                          <div className="bodytext">Acres Cultivated</div>
                        </div>
                      </div>
                    </div>
                    <div className="abseggplant">
                      <img
                        className="coverimg"
                        src="/eggplant.cabbage.png"
                        alt="eggplant and cabbage"
                      />
                    </div>
                  </div>
                </div>
                <div className="col col1">
                  <div className="relativefill1">
                    <div className="bordercorner">
                      <div className="tac">
                        <div className="headline">5,000+</div>
                        <div className="bodytext">Happy customers</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col1">
                  <div className="relativefill1">
                    <div className="relative">
                      <div className="bordercorner">
                        <div className="tac">
                          <div className="headline">50+</div>
                          <div className="bodytext">Organic Products</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="harvest" className="harvestsection">
          <div className="gstack2 wrapper">
            <div className="rowavc">
              <div className="col col4">
                <div className="harvesttext">
                  <div className="coltext">OUR HARVEST</div>
                  <h2 className="headline">
                    Fresh, Nutritious, and 100% Organic
                  </h2>
                  <p className="bodytext">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis molestiae quo necessitatibus exercitationem cumque
                    obcaecati odio iure praesentium itaque dignissimos placeat
                    earum veniam illo, voluptatibus, laborum cupiditate
                    deserunt, facere rem. Incidunt.
                  </p>
                </div>
              </div>
            </div>
            <div className="rowalign">
              <div className="col">
                <div className="w-full">
                  <div className="collection">
                    <div className="listitem">
                      <div className="pcard">
                        <Link to="/tomatopage">
                          <a href="" className="productblock">
                            <div className="productimage">
                              <img
                                className="coverimg"
                                src="/freshtomato.webp"
                                alt="fresh.tomato"
                              />
                            </div>
                            <div className="gstack3">
                              <h3 className="headline3">Fresh Tomatoes</h3>
                              <p className="bodytext1 text-green-900">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Modi laudantium, aliquam
                                quisquam atque dolore possimus necessitatibus
                                veniam officia aut accusantium.
                              </p>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="pcard">
                        <a href="" className="productblock">
                          <div className="productimage">
                            <img
                              className="coverimg"
                              src="/succ.potatoes.webp"
                              alt="succulent.potatoes"
                            />
                          </div>
                          <div className="gstack3">
                            <h3 className="headline3">Succulent Potatoes</h3>
                            <p className="bodytext1 text-green-900">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nulla assumenda veniam nisi dignissimos,
                              possimus dolores aliquam. Odit dolores dolor
                              blanditiis.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="pcard">
                        <a href="" className="productblock">
                          <div className="productimage">
                            <img
                              className="coverimg"
                              src="/lush.lettuce.webp"
                              alt="lettuce"
                            />
                          </div>
                          <div className="gstack3">
                            <h3 className="headline3">Lush Lettuce</h3>
                            <p className="bodytext1 text-green-900">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Magnam labore aspernatur totam
                              nam quas molestias voluptatibus libero incidunt
                              numquam maiores.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="pcard">
                        <a href="" className="productblock">
                          <div className="productimage">
                            <img
                              className="coverimg"
                              src="/eggplant.webp"
                              alt="eggplant"
                            />
                          </div>
                          <div className="gstack3">
                            <h3 className="headline3">Enchanting Eggplant</h3>
                            <p className="bodytext1 text-green-900">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nulla assumenda veniam nisi dignissimos,
                              possimus dolores aliquam. Odit dolores dolor
                              blanditiis.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="pcard">
                        <a href="" className="productblock">
                          <div className="productimage">
                            <img
                              className="coverimg"
                              src="/cucumber.webp"
                              alt="cucumber "
                            />
                          </div>
                          <div className="gstack3">
                            <h3 className="headline3">Crunchy Cucumbers</h3>
                            <p className="bodytext1 text-green-900">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nulla assumenda veniam nisi dignissimos,
                              possimus dolores aliquam. Odit dolores dolor
                              blanditiis.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="pcard">
                        <a href="" className="productblock">
                          <div className="productimage">
                            <img
                              className="coverimg"
                              src="/bulgarian pepper.webp"
                              alt="bulgarian pepper"
                            />
                          </div>
                          <div className="gstack3">
                            <h3 className="headline3">Bulgarian Pepper</h3>
                            <p className="bodytext1 text-green-900">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Nulla assumenda veniam nisi dignissimos,
                              possimus dolores aliquam. Odit dolores dolor
                              blanditiis.
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="benefit" className="storysection">
          <div className="wrapper">
            <div className="rowalign">
              <div className="column">
                <div className="bordercorner1">
                  <div className="p-6">
                    <div className="gstack2">
                      <div className="harvesttext">
                        <div className="coltext">BENEFITS</div>
                        <h2 className="headline">
                          The Benefits of Our Organic Bounty
                        </h2>
                      </div>
                      <div className="gstack4">
                        <div className="gfill">
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/pure.flavor.png"
                              alt="pure flavor"
                            />
                            <p className="headline3">Pure Flavor</p>
                          </div>
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/nutrient.rich.png"
                              alt="nutrient rich"
                            />
                            <p className="headline3">Nutrient-Rich</p>
                          </div>
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/chem.free.png"
                              alt="chem free"
                            />
                            <p className="headline3">Chemical-Free</p>
                          </div>
                        </div>
                        <div className="gfill">
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/eco-friendly.png"
                              alt="eco-friendly"
                            />
                            <p className="headline3">Eco-Friendly</p>
                          </div>
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/locally.sourced.png"
                              alt="locally sourced"
                            />
                            <p className="headline3">Locally Sourced</p>
                          </div>
                          <div className="gstackavc">
                            <img
                              className="img"
                              src="/great.quality.png"
                              alt="Great quality"
                            />
                            <p className="headline3">Great Quality</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col3"></div>
              <div className="column3">
                <div className="relativesize">
                  <div className="bordercorner2">
                    <img
                      className="coverimg relative"
                      src="/woman.png"
                      alt="woman"
                    />
                  </div>
                  <div className="absolutebulpepper">
                    <img
                      className="coverimg"
                      src="/absbulpepper.png"
                      alt="absolute bulgarian pepper"
                    />
                  </div>
                  <div className="abscabbagecarrots">
                    <img
                      className="coverimg"
                      src="/cabbage.and.carrot.png"
                      alt="cabbage.and.carrot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="relativehidden">
          <section className="storysection">
            <div className="wrapper">
              <div className="rowalign">
                <div className="column">
                  <div className="relative">
                    <div className="bordercorner3">
                      <div className="p-16 bg-green-900">
                        <div className="gstack4">
                          <div className="gstack5">
                            <div className="coltext text-slate-100">
                              INTERESTED IN OUR PRODUCTS?
                            </div>
                            <h2 className="headline4">Reach to us!</h2>
                            <p className="bodytext1 text-slate-100">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dolorem at eius sapiente
                              suscipit, nostrum accusamus, quidem porro quae,
                              expedita quasi accusantium eos reprehenderit
                              fugiat voluptatum. Minima reprehenderit facere
                              debitis quo rerum!
                            </p>
                          </div>
                          <div className="buttongroup">
                            <a className="buttprim" href="#contact">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="absolutecta">
            <div className="ctavideowrapper">
              <div className="videobackground1">
                <video
                  className="thevideo1"
                  src="/greenhouse.vid.mp4"
                  autoPlay
                  loop
                >
                  Ooops! Sorry man. Your device doesn't support this video
                  format.
                </video>
              </div>
            </div>
          </div>
        </div>
        <section id="review" className="storysection">
          <div className="gstack2 wrapper">
            <div className="rowavc text-center">
              <div className="col col4">
                <div className="gstack1">
                  <div className="coltext">REVIEWS</div>
                  <h2 className="headline4 w-full text-green-900">
                    Hear What Our Customers Have to Say
                  </h2>
                </div>
              </div>
            </div>
            <div className="relativefill1">
              <div className="rowalign">
                <div className="col w-full">
                  <div className="reviewslides">
                    <div className="slidermask"></div>
                    <div className="slidercontent">
                      <div className="slide">
                        <div className="card1">
                          <div className="cardwrapper1">
                            <div className="gstack5">
                              <div className="bodytext">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nostrum, maxime consequuntur!
                                Ipsam amet voluptatibus suscipit inventore
                                ducimus eveniet placeat numquam aliquid quos.
                                Quod.
                              </div>
                              <div className="gstack3 flex-none">
                                <div className="avatarcorners">
                                  <img
                                    className="coverimg"
                                    src="/samuel.png"
                                    alt="Samuel Greene"
                                  />
                                </div>
                                <div className="gstackz">
                                  <p className="bodytext1 text-green-800">
                                    Samuel Greene
                                  </p>
                                  <div className="bodytextz">
                                    Health-conscious Parent
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="card1">
                          <div className="cardwrapper1">
                            <div className="gstack5">
                              <div className="bodytext">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nostrum, maxime consequuntur!
                                Ipsam amet voluptatibus suscipit inventore
                                ducimus eveniet placeat numquam aliquid quos.
                                Quod.
                              </div>
                              <div className="gstack3 flex-none">
                                <div className="avatarcorners">
                                  <img
                                    className="coverimg"
                                    src="/david.webp"
                                    alt="David Fletcher"
                                  />
                                </div>
                                <div className="gstackz">
                                  <p className="bodytext1 text-green-800">
                                    David Fletcher
                                  </p>
                                  <div className="bodytextz">
                                    Organic Food Enthusiast
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide">
                        <div className="card1">
                          <div className="cardwrapper1">
                            <div className="gstack5">
                              <div className="bodytext">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Nostrum, maxime consequuntur!
                                Ipsam amet voluptatibus suscipit inventore
                                ducimus eveniet placeat numquam aliquid quos.
                                Quod.
                              </div>
                              <div className="gstack3 flex-none">
                                <div className="avatarcorners">
                                  <img
                                    className="coverimg"
                                    src="/sophia.webp"
                                    alt="Sophia Barnes"
                                  />
                                </div>
                                <div className="gstackz">
                                  <p className="bodytext1 text-green-800">
                                    Sophia Barnes
                                  </p>
                                  <div className="bodytextz">
                                    Professional Chef and Culinary Expert
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slideraria">Slide 1 of 3</div>
                    </div>
                    <div className="arrowreview">
                      <div className="asset">
                        <svg>
                          <path></path>
                        </svg>
                      </div>
                    </div>
                    <div className="arrowreview">
                      <div className="asset">
                        <svg>
                          <path></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="abstomatocucumber">
                <img
                  className="coverimg"
                  src="/abstomato.cucumber.png"
                  alt="abs tomato and cucumber"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
export default Home;
