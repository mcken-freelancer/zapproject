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
          <div class="footwrapper"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
