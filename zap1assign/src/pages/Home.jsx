import Navbar from "../components/Navbar";
import "./Homstyle.css";
function Home() {
  return (
    <>
      <Navbar />
      <>
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
            <img src="/src/assets/HeroImage.jpg" alt="someguybe" />
          </div>
        </div>
        <marquee direction="left" scrollamount="5" className="flex">
          <div className="scrollpics">
            <img src="/src/assets/cloud.png" alt="cloud9" />
            <img src="/src/assets/rise.png" alt="rise" />
            <img src="/src/assets/trace.png" alt="trace" />
            <img src="/src/assets/clues.png" alt="clues" />
            <img src="/src/assets/volume.png" alt="volume" />
          </div>
        </marquee>
        <br />
        <br />
        <br />
        <div className="allwords">
          <h2 className="text-4xl font-medium">
            Discover Our Comprehensive
            <br /> Range Of Services:
          </h2>
          <p className="smallwords">
            Delivering Exceptional Care and Advanced Medical
            <br />
            Solutions for Your Health and Well-being
          </p>
        </div>
      </>
    </>
  );
}
export default Home;
