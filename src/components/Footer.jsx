import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/aceptar.png" alt="" />
                <h2 className="text-white ">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 ">
        <div className="containet-xxl ">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white fs-6">
                <address>
                  Street: Lorem ipsum dolor sit amet.
                  <br />
                  PinCode: 123456
                </address>
                <a
                  href="tel:+54 22588866"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +54 22588866
                </a>
                <a
                  href="mailto: ecommers@gmail.com"
                  className="mt-4 d-block mb-2 text-white"
                >
                  ecommers@gmail.com
                </a>

                <div className="social-icons d-flex gap-3">
                  <Link className="text-white fs-5" to="">
                    {<BsLinkedin />}{" "}
                  </Link>
                  <Link className="text-white fs-5" to="">
                    {<BsGithub />}
                  </Link>
                  <Link className="text-white fs-5" to="">
                    {<BsYoutube />}
                  </Link>
                  <Link className="text-white fs-5" to="">
                    {<BsInstagram />}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>

              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>

              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">TContact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()} ; Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
