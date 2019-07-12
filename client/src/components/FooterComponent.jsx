import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="container footer_block noBotBorder mt-20">
          <div className="row">
            <div className="col-md-5">
              <h4 className="footer-hLine">Get in Touch with Us</h4>
              <ul className="foot_links">
                <li>
                  <span className="fa fa-map-marker::before" />
                  2942 Baisley Avenue, Bronx, NY 10461{" "}
                </li>
                <li>
                  <span className="fa fa-phone" />
                  (718) 931-3034{" "}
                </li>
                <li>
                  <span className="fa fa-envelope-o" />
                  yjescano@gmail.com{" "}
                </li>
              </ul>
              <div id="map">
                <div className="row">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.630289051182!2d-73.82819549900489!3d40.83608370340723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b466e54e345%3A0x4d1d7a4ed51dc1d4!2s2942+Baisley+Ave%2C+The+Bronx%2C+NY+10461!5e0!3m2!1sen!2sus!4v1562894073893!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  />
                </div>
              </div>
            </div>

            <div className="pull-right">
              <ul className="list-inline footer-nav">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="available-properties.php">Properties</a>
                </li>
                <li>
                  <a href="about-us.php">About Us</a>
                </li>
                <li>
                  <a href="contact-us.php">Contact Us</a>
                </li>
                <li>
                  <a href="sign-in.php">Sign In</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
