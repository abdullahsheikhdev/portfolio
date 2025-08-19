import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navlink = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Skills", href: "/skills" },
    { title: "Education", href: "/education" },
    { title: "Experience", href: "/experience" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-[#212529] text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        <div className="h-20 w-20 flex-shrink-0">
          <img src={logo} alt="logo" className="h-full w-full object-contain" />
        </div>


        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 items-center">
            {navlink.map((res, index) => (
              <li key={index}>
                <NavLink to={res.href} className="relative pb-1 transition group">
                  {({ isActive }) => (
                    <>
                      {res.title}
                      <span
                        className={`
                          absolute left-0 bottom-0 h-[2px] bg-yellow-400 
                          transition-all duration-300
                          ${isActive ? "w-full" : "w-0 group-hover:w-1/2"}
                        `}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>


          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
          >
            Resume
          </a>
        </div>


        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition hidden md:block"
          >
            Resume
          </a>
          <button className="text-white" onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>


      {open && (
        <ul className="lg:hidden flex flex-col gap-4 bg-[#2a2f34] px-4 py-4">
          {navlink.map((res, index) => (
            <li key={index}>
              <NavLink
                to={res.href}
                onClick={() => setOpen(false)}
                className="relative pb-1 transition group"
              >
                {({ isActive }) => (
                  <>
                    {res.title}
                    <span
                      className={`
                        absolute left-0 bottom-0 h-[2px] bg-yellow-400 
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-1/2"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}


          <li className="md:hidden">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
