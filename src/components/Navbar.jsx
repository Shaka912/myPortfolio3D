import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { styles } from "../styles"
import { navLinks } from "../constants"
import { logo, menu, close } from "../assets"
import { ToastContainer } from "react-toastify"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [tooltipVisibility, setTooltipVisibility] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain rounded-full" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Abdullah Shaban &nbsp;
            <span className="sm:block hidden"> | Software Engineer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            data-tooltip-placement="bottom"
            data-tooltip-target={`tooltip-top-linkedIn`}
            onMouseEnter={() => setTooltipVisibility(true)}
            onMouseLeave={() => setTooltipVisibility(false)}
            className="hover:text-white text-[18px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/abdullah-shaban-6b2b30252",
                "_blank"
              )
            }
          >
            <i className="fa fa-linkedin" />
            {tooltipVisibility && (
              <div
                id={`tooltip-top-linkedIn`}
                role="tooltip"
                className="absolute z-10 visible px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700 ml-[-35px]"
              >
                My LinkedIn
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            )}
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map(nav => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </nav>
  )
}

export default Navbar
