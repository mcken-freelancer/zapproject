import "../App.css";

function Footer() {
  return (
    <>
      <div className="entirepage">
        <div className="relative">
          <section id="contact" className="footersection">
            <div className="gstack4 wrapper">
              <div className="rowalign">
                <div className="col w-full">
                  <div className="footerwrapper">
                    <a className="logotype" href="">
                      <img
                        className="img"
                        src="/freshfieldlogo.png"
                        alt="Fresh Fresh"
                      />
                    </a>
                    <div className="footersocial">
                      <a
                        aria-label="Twitter"
                        href="www.x.com"
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gstackrow justify-normal">
                <div className="col col2">
                  <div className="gstack3">
                    <h2 className="headline3 text-slate-100">Navigate</h2>
                    <div className="gstack6">
                      <a className="linklabel" href="#about">
                        About Us
                      </a>
                      <a className="linklabel" href="#story">
                        Our Story
                      </a>
                      <a className="linklabel" href="#harvest">
                        Our Harvest
                      </a>
                      <a className="linklabel" href="#benefit">
                        Benefits
                      </a>
                      <a className="linklabel" href="#review">
                        Reviews
                      </a>
                      <a className="linklabel" href="#contact">
                        Contact Us
                      </a>
                      <a className="linklabel" href="">
                        Privacy Policy
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col2">
                  <div className="gstack3">
                    <h2 className="headline3 text-slate-100">Utility</h2>
                    <div className="gstack6">
                      <a className="linklabel" href="">
                        Get Started
                      </a>
                      <a className="linklabel" href="">
                        Style Guide
                      </a>
                      <a className="linklabel" href="">
                        License
                      </a>
                      <a className="linklabel" href="">
                        Change Log
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col2">
                  <div className="gstack3">
                    <h2 className="headline3 text-slate-100">FreshField</h2>
                    <div className="gstack6">
                      <a className="linklabel" href="">
                        FreshField Farm, 1234 Harvest Lane, Countryside, IL
                        54321, United States
                      </a>
                      <a className="linklabel" href="">
                        +1 000 000 000
                      </a>
                      <a className="linklabel" href="">
                        help@freshfield.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rowalign py-6">
                <div className="col w-full">
                  <div className="footerwrapper">
                    <div className="footercompany">
                      <div>
                        <div className="bodytext1 text-slate-100">
                          Copyright FreshField Webflow Template. Designed by{" "}
                          <a href="" className="text-lime-600 underline">
                            MCKEN
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="footerlinks">
                      <a
                        href="www.webflow.com/templates"
                        className="text-orange-500 underline"
                        target="_blank"
                      >
                        More Templates
                      </a>
                      <div className="bodytext1 text-slate-100">
                        Powered by{" "}
                        <a
                          href="www.webflow.com"
                          target="_blank"
                          className="text-orange-500 underline"
                        >
                          Webflow
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="absfooter">
            <img
              className="img grayscale"
              src="/greyveggies.png"
              alt="Greyscale Vegies"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
