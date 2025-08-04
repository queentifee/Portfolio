
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Hero from "./assets/Hero.jpg";



const HeroSection = () => {


  return (
   <div className="relative h-[60vh] md:h-screen w-full">
 
  {/* Hero background */}
  <div className="absolute inset-0">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    </motion.div>
  </div>

  


      {/* Centered Text Content */}
      <div className="absolute items-center justify-center mt-10 inset-0 flex flex-col px-12 z-10">
      
        <h1 className="mt-10  text-2xl sm:text-4xl lg:text-3xl text-white tracking-wide">
          Welcome to Queen_Codes Portfolio
          <br />
          I'm
          <span className="bg-gradient-to-r from-[#D8BFD8] to-[#FFC0CB] text-transparent bg-clip-text">
            {" "}
            <Typewriter 
 words={[" Queen Samuel", "A Software Developer", "A Creative Coder ❤️"]}
  loop={true}
  cursor
  cursorStyle="|"
  typeSpeed={100}
  deleteSpeed={50}
/>
          </span>
        </h1>
      </div>

     
      
    </div>
  );
};

export default HeroSection;

