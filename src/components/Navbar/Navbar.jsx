import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user,logOut } = useContext(AuthContext);
  return (
    <>
      <div className=" bg-[#FFF8F0]">
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
      </div>
    </>
  );
}

export default Navbar;
