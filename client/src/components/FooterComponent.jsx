import React, { Component } from "react";

class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-container ">
        <footer className="footer mt-auto py-3">
          <div className="row">
            <div className="col-md-6">
              <h5 className="footer-hLine">Escano/Asis Real Estate Services</h5>

              <ul className="foot_links">
                <li>Property Manager: Yomaira Escano</li>
                <li>Address: 2942 Baisley Avenue, Bronx, NY 10461</li>
                <li>Telephone: (718) 931-3034</li>
                <li>Email: yjescano@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.630289051182!2d-73.82819549900489!3d40.83608370340723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b466e54e345%3A0x4d1d7a4ed51dc1d4!2s2942+Baisley+Ave%2C+The+Bronx%2C+NY+10461!5e0!3m2!1sen!2sus!4v1562894073893!5m2!1sen!2sus"
                  width="100%"
                  height="225"
                  frameBorder="50"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;
