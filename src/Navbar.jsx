import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from './assets/pictures/logo.png'
// import { navItems } from "../constants";
import { Link } from "react-router-dom"
 

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className="sticky top-0 z-50 py-3 bg-[#D8BFD8] backdrop-blur-lg
     border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <img className=" h-10 w-15" src={logo} alt="Logo" />
           </div>
           
           <div className="hidden lg:flex justify-center space-x-5 items-center">
           <Link to="/" className="py-2 px-2  bebas-neue-regular ">
              About Me
            </Link>
            <Link to="/login" className="py-2 px-2 bebas-neue-regular  text-black ">
              Services
            </Link>
            <Link to ="/create-account"
className="py-2 px-2 bebas-neue-regular">              Projects
            </Link>
            <Link to="/about"       
className="py-2 px-2 bebas-neue-regular ">            
              Contact Me
            </Link>
            <Link to ="/portfolio"
className="py-2 px-2 bebas-neue-regular bg-purple-400  text-white border rounded-md"            >
            Hire Me
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
  <div className="fixed inset-0 z-50 bg-[#D8BFD8] bg-opacity-85 flex flex-col justify-center items-center h-screen w-full lg:hidden transition-opacity duration-300 ease-in-out opacity-100 scale-100">
    
    {/* Navigation Links */}
    <div className="flex flex-col space-y-5 text-center">
      <Link to="/" className="py-3 px-6  text-lg border rounded-md">
        About Me
      </Link>
      
      <a href="#" className="py-3 px-6  text-lg border rounded-md">
        Services
      </a>

      <a
        href="#"
        className="py-3 px-6 text-lg border rounded-md"      >
        Projects
      </a>

      <Link
        to="/about"
        className="py-3 px-6 text-lg border rounded-md"      >
        Contact me
      </Link>

      <Link
        to="/portfolio"
        className="py-3 px-6 text-lg font-semibold bg-gradient-to-r from-purple-500 to-purple-800 text-white rounded-md"
      >
        Hire me
      </Link>
    </div>
 <button
      onClick={() => setMobileDrawerOpen(false)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>
          </div>
        )}
      </div>
    </nav>
  );
};
            
    


  
export default Navbar