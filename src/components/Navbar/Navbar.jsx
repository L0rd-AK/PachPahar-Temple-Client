import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div className="navbar bg-[#8B4513]">
        <div className="navbar-start">
          <div className="dropdown text-white">
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                {isMenuOpen ? (
                  <p className="text-3xl">
                    <RxCross2 tabIndex={0} />
                  </p>
                ) : (
                  <GiHamburgerMenu className="text-2xl" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#8B4513] rounded-box z-[10] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
              <Link to="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
              <li>
                <a>Service</a>
                <ul className="p-2 z-10">
                  <li>
                    <a>Donation</a>
                  </li>
                  <li>
                    <a>Contribute</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">
            পাঁচ পাহাড় কালী মন্দির
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <a>Gallery</a>
              </Link>
            </li>
            <li>
              <details>
                <summary>Service</summary>
                <ul className="p-2 z-10">
                  <li>
                    <a>Donation</a>
                  </li>
                  <li>
                    <a>Contribute</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {location.pathname == "/login" ? (
            <Link to="/register">
              <a className="px-3 py-2 bg-white text-black font-bold rounded-lg">
                Sign up
              </a>
            </Link>
          ) : (
            <div>
              {user ? (
                <div className="right-3">
                  <div className="flex justify-center items-center dropdown">
                    <div className="">
                      <img
                        tabIndex={1}
                        role="button"
                        className="rounded-full border-2 border-white h-10 lg:mr-0"
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/3dqGpTW/dummy-prof.png"
                        }
                        alt=""
                      />
                    </div>
                    <ul
                      tabIndex={1}
                      className="menu menu-sm dropdown-content bg-[#8B4513] rounded-box z-[1] top-14 right-3 p-2 shadow text-white"
                    >
                      <li>
                        <Link to="/">
                          <a>Profile</a>
                        </Link>
                      </li>
                      <li>
                        <a href="">Dashboard</a>
                      </li>
                      <li>
                        <Link onClick={() => logOut()} to="/">
                          <a>Logout</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="">
                  <Link to="/login">
                    <a className="px-3 py-2 bg-white text-black font-bold rounded-lg">
                      Log in
                    </a>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
