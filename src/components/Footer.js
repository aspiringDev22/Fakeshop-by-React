import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container my-">
        <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase text-light mb-4">OUR WORLD</h5>

                <ul className="list-unstyled mb-4">
                  <li>
                    <a href="#!" className="text-white">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Collections
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Environmental philosophy
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Artist collaborations
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="text-uppercase mb-4 text-light">Assistance</h5>

                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Shipping Information
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Returns & Exchanges
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <h5 className="mb-4 text-light">
                  Enter Email to stay updated about new fashion
                </h5>

                <div className="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="form5Example2"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form5Example2">
                    Email address
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-white btn-block"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="text-center p-3 border-top border-white text-light">
            © 2020 Copyright :
            <a className="text-white" href="#">
              FakeShop.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
