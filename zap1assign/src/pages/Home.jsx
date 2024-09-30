import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Homstyle.css";
function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="greenbox">
          <p>
            Compassionate Care
            <br />
            for Every Patient like
            <br />
            you
          </p>
          <p>
            Providing Exceptional and Compassionate Care with
            <br />
            Advanced Medical Solutions for Every Patient's
            <br />
          </p>
          <button className="learnbutt">Learn More</button>
        </div>
        <div className="float-right">
          <img src="/HeroImage.jpg" alt="someguybe" />
        </div>
      </div>
      <marquee direction="left" scrollamount="5" className="flex">
        <div className="scrollpics">
          <img src="/cloud.png" alt="cloud9" />
          <img src="/rise.png" alt="rise" />
          <img src="/trace.png" alt="trace" />
          <img src="/clues.png" alt="clues" />
          <img src="/volume.png" alt="volume" />
        </div>
      </marquee>
      <br />
      <br />
      <br />
      <div className="allwords">
        <h2 className="text-4xl font-medium w-screen">
          Discover Our Comprehensive
          <br /> Range Of Services:
        </h2>
        <p className="smallwords">
          Delivering Exceptional Care and Advanced Medical
          <br />
          Solutions for Your Health and Well-being
        </p>
      </div>
      <div className="gridholders">
        <div className="grid3x">
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/brain.png" alt="brain" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Neurology</div>
              <div className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                assumenda consequatur placeat earum illo.
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/tooth.png" alt="tooth" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Orthodontics</div>
              <div className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquam ea ullam! Possimus, porro?
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/eye.png" alt="eye" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Opthalmologists</div>
              <div className="text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur officiis deserunt voluptate eligendi molestias?
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/lungs.png" alt="lungs" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Pulmonology</div>
              <div className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquam ea ullam! Possimus, porro?
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/stomach.png" alt="stomach" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Gastroenterologist</div>
              <div className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquam ea ullam! Possimus, porro?
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="iconholders">
            <div className="titleholder">
              <div className="iconwrapper">
                <img src="/heart.png" alt="heart" />
              </div>
            </div>
            <div className="textholder">
              <div className="text-2xl font-medium">Cardiology</div>
              <div className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                aliquam ea ullam! Possimus, porro?
              </div>
              <div>
                <button className="bg-green-500 flex text-lg px-9 py-2.5 text-white text-center justify-center mt-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-32 p-6 mx-8">
        <div className="h-auto w-10/12">
          <img src="/nursewithgirl.png" alt="nurse.with.girl" />
        </div>
        <div>
          <h3>APPOINTMENT</h3>
          <h2>Meet Our Expert Team of Specialized Doctors</h2>
          <p>
            Delivering Exceptional Care and Advanced Medical Solutions for Your
            Health and Well-being
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="flex mt-32 mb-32 p-6 mx-8">
        <div>
          <h3>APPOINTMENT</h3>
          <h2>Our Dedicated Medical and Support Staff</h2>
          <p>
            Delivering Exceptional Care and Advanced Medical Solutions for Your
            Health and Well-being
          </p>
          <button>Learn More</button>
        </div>
        <div className="h-auto w-10/12">
          <img src="/manwithgirl.png" alt="man.with.girl" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="allwords">
        <h2 className="text-4xl font-medium w-screen">
          Discover Our Comprehensive
          <br /> Range Of Services:
        </h2>
        <p className="smallwords">
          Delivering Exceptional Care and Advanced Medical
          <br />
          Solutions for Your Health and Well-being
        </p>
      </div>
      <div className="mt-10 mx-20">
        <img src="/bothdoctors.png" alt="both.doctors" />
      </div>

      <div className="gridunderpic">
        <div className="gridunderpicitem">
          <div className="numberandalpha">2B +</div>
          <div className="text-base">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="gridunderpicitem">
          <div className="numberandalpha">2008</div>
          <div className="text-base">Lorem ipsum dolor sit amet.</div>
        </div>
        <div className="gridunderpicitem">
          <div className="numberandalpha">20+</div>
          <div className="text-base">Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
