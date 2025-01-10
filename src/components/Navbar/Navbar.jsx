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
      {/* <div className=" bg-[#FFF8F0]">
        <nav className="bg-[#8B4513] p-4 relative">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-[#FFF8F0] font-crimson-text text-xl">
              পাঁচ পাহাড় কালী মন্দির
            </div>

            <div className="md:hidden ">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#FFF8F0]"
              >
                {isMenuOpen ? (
                  <p className="text-3xl right-3 absolute top-2">
                    <RxCross2 />
                  </p>
                ) : (
                  <GiHamburgerMenu className="text-2xl" />
                )}
              </button>
            </div>

            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <ul
                className={`${
                  isMenuOpen
                    ? "absolute right-10 top-12 z-10 bg-slate-200 p-5 rounded-lg px-7"
                    : "md:flex space-y-2 md:space-y-0 md:space-x-6 text-[#FFF8F0] font-crimson-text"
                }`}
              >
                <li>
                  <a
                    href="/"
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    Contact
                  </a>
                </li>
               {
                user?
                <Link className="flex gap-1">
                <li>
                  <a
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    {user?.displayName}
                  </a>
                </li>
                <Link onClick={() => logOut()} to='/'>
                  <a
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                  | Log Out
                  </a>
                </Link>
              </Link>
                : 
                <Link to='/login'>
                <li>
                  <a
                    className={`${
                      isMenuOpen
                        ? "hover:text-[#FFD700] text-black"
                        : "hover:text-[#FFD700] text-whites"
                    }`}
                  >
                    Log In
                  </a>
                </li>
              </Link>
               }
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
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
              className="menu menu-sm dropdown-content bg-[#8B4513] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">
                  <a>Home</a>
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
            <Link to="/login">
              <a className="px-3 py-2 bg-white text-black font-bold rounded-lg">
                log in
              </a>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
