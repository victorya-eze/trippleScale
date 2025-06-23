import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants"; // Ensure navItems reflect new sections
import courses from "../data/courses";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('http')) {
      window.location.href = href;
    } else {
      navigate(href);
    }
    setMobileDrawerOpen(false);
    setShowCourseDropdown(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">trippleScale</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.newTab ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="relative">
              <button
                onClick={() => setShowCourseDropdown((prev) => !prev)}
                className="flex items-center gap-1"
              >
                All Courses <ChevronDown className="w-4 h-4" />
              </button>
              {showCourseDropdown && (
                <ul className="absolute left-0 mt-2 bg-neutral-900 border border-neutral-700 rounded-md shadow-lg z-10">
                  {courses.map((course) => (
                    <li key={course.id} className="whitespace-nowrap px-4 py-2 hover:bg-neutral-800">
                      <a href="#courses" onClick={(e) => handleNavClick(e, '#courses')}>{course.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#courses"
              onClick={(e) => handleNavClick(e, '#courses')}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Get Started
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  {item.newTab ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="py-2 px-3 border rounded-md"
              >
                About the Course
              </a>
              <a
                href="#enroll"
                onClick={(e) => handleNavClick(e, '#enroll')}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
