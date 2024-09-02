import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="contaimer-xxl">
          <div className="row align-items-center">
            <div className="col-2"></div>
            <div className="col-5">
              <p className="text-white">
                Free shipping over $100 & free returns
              </p>
            </div>
            <div className="col-5">
              <p className="text-end text-white mb-0 ">
                Hotline:
                <a className="text-white px-1" href="tel:+54 9 682 699">
                  {" "}
                  +54 9 682 699
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white ">devcorner</Link>
              </h2>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="search product here..."
                  aria-label="search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5 ">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <img
                    src="/images/comparar-codigo.svg"
                    className="link-img"
                    alt="compare"
                  />
                  <Link className="Link d-flex align-items-center">
                    <p>
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div>
                  <img
                    src="/images/comentario-corazon.svg"
                    className="link-img"
                    alt="wishlist"
                  />
                  <Link className="Link d-flex align-items-center">
                    <p>
                      Favourite <br />
                      wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <img
                    src="/images/usuario.svg"
                    className="link-img"
                    alt="user"
                  />
                  <Link className="Link d-flex align-items-center">
                    <p>
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <img
                    src="/images/carrito-de-compra-anadir.svg"
                    className="link-img"
                    alt="cart"
                  />
                  <Link className="Link   gap-15">
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
