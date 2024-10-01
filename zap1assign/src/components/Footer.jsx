import "./Footstyle.css";
function Footer() {
  return (
    <>
      <div className="flex">
        <div className="p-8">
          <h3>APPOINTMENT</h3>
          <h2>
            Get in Touch with Us
            <br />
            We're Here To Help!
          </h2>
          <p>
            Delivering Exceptional Care and Advanced Medical Solutions for Your
            Health and Well-being
          </p>
          <div className="textformholder">
            <form className="formholder">
              <div className="textfield">
                <input
                  className="emailfield"
                  type="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  className="messageholder"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <input type="submit" value="Submit" className="submitbutton" />
            </form>
          </div>
        </div>
        <div>
          <div className="imageholder">
            <div className="stickyholder">
              <img
                className="max-w-full inline-block align-middle"
                src="/nurse.calm.girl.png"
                alt="nursehandsgirl"
              />
              <div className="imagecontent">
                <div>
                  555-0198
                  <br />
                  123 Maple, Springfield, IL 62701
                </div>
                <div>Monday - Saturday: 9 am- 11.30 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainsection">
        <div class="footcontainer">
          <div class="footwrapper">
            <a href="/" class="footbrand">
              <img
                className="max-w-full inline-block align-middle w-44"
                src="/foothealthsquare.png"
                alt="white.health.sqr"
              />
              <div className="font-semibold text-2xl">
                Transform your world with Healthsquare
              </div>
              <div>
                <p className="text-lg font-normal mb-3 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita dolores nemo aut, fugiat similique enim! Vel,
                  corrupti! Voluptates ea illo illum alias id tempore provident
                  est esse corporis, saepe nobis!
                </p>
              </div>
            </a>
            <div className="footercontent">
              <div className="footerblock">
                <div className="titlesmall">MAIN PAGES</div>
                <div className="menuwrapper">
                  <div className="menuholder">
                    <a href="/" className="greylink">
                      Home (Sales)
                    </a>
                    <a href="/" className="greylink">
                      Home V1
                    </a>
                    <a href="/" className="greylink">
                      Home V2
                    </a>
                    <a href="/" className="greylink">
                      Home V3
                    </a>
                    <a href="/about" className="greylink">
                      About
                    </a>
                    <p className="greylink">Features</p>
                    <a href="/blog" className="greylink">
                      Blog V1
                    </a>
                    <a href="/blog" className="greylink">
                      Blog V2
                    </a>
                    <a href="/blog" className="greylink">
                      Blog V3
                    </a>
                  </div>
                  <div className="menuholder">
                    <a href="/blog" className="greylink">
                      Blog Post
                    </a>
                    <a href="/contact" className="greylink">
                      Contact V1
                    </a>
                    <a href="/contact" className="greylink">
                      Contact V2
                    </a>
                    <a href="/contact" className="greylink">
                      Contact V3
                    </a>
                    <p className="greylink">Pricing</p>
                    <p className="greylink">Pricing Single</p>
                    <p className="greylink">Checkout</p>
                  </div>
                </div>
              </div>
              <div className="footerblock">
                <div className="titlesmall">SOCIAL MEDIA</div>
                <a
                  href="www.instagram.com"
                  target="_blank"
                  className="greylink"
                >
                  Instagram
                </a>
                <a href="www.facebook.com" target="_blank" className="greylink">
                  Facebook
                </a>
                <a href="www.linkedin.com" target="_blank" className="greylink">
                  Linkedin
                </a>
                <a href="www.x.com" target="_blank" className="greylink">
                  X
                </a>
              </div>
              <div className="footerblock">
                <div className="titlesmall">WEBFLOW STUFF</div>
                <ul className="greylink">
                  <li>Style Guide</li>
                  <li>Licensing</li>
                  <li>Change Log</li>
                  <li>Instructions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerdivider">
            <p className="text-white flex">
              CREATED BY <p className="px-3 underline">TEMPLEE</p>
            </p>
            <div className="text-white flex">
              POWERED BY <p className="px-3 underline">HOLYSPIRIT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
