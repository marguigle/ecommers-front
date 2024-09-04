import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { VscGitCompare } from "react-icons/vsc";
import { GrFavorite } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
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
                <div className="text-white fs-2 text-center">
                  <VscGitCompare />
                  <Link className=" Link d-flex flex-column fs-6 align-items-center text-white">
                    <p>
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div className="text-white fs-2 text-center">
                  <GrFavorite />
                  <Link className="Link d-flex flex-column fs-6 text-white align-items-center">
                    <p>
                      Favourite <br />
                      wishlist
                    </p>
                  </Link>
                </div>
                <div className="text-white fs-2 text-center">
                  <FaRegUser />
                  <Link className="Link d-flex flex-column fs-6 text-white align-items-center text-center">
                    <p>
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div className="text-white fs-2 text-center">
                  <FiShoppingCart className="mb-2" />
                  <Link className="Link d-flex flex-column fs-6 text-white align-items-center text-center gap-5">
                    <p className="badge bg-white text-dark">0</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl ">
          <div className="row ">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent d-flex gap-10 align-items-center
                      "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="/public/images/menu.png"
                        alt="menu"
                        className="menu-img"
                      />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item  text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-30 ">
                    <NavLink className="Link-bottom" to="/">
                      Home
                    </NavLink>
                    <NavLink className="Link-bottom" to="/">
                      Our Store
                    </NavLink>
                    <NavLink className="Link-bottom" to="/">
                      Blogs
                    </NavLink>
                    <NavLink className="Link-bottom" to="/contact">
                      Contact
                    </NavLink>
                  </div>
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
