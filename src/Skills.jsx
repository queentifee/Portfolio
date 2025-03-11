import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="py-12 bg-[#FFFAFA] text-white">
      <div className="container mx-auto px-6 lg:px-10 ">
{/* Title */}
<h2 className="bebas-neue-goals text-left my-2 text-2xl font-bold text-black">
Skills</h2>

  {/* Line Section */}
  <div className="relative w-4/4 mx-auto">
    {/* Black Line (Bottom) */}
    <div className="w-full h-0.5 bg-gray-200 " ></div>
    {/* White Line (Top) */}
    <div className="w-32 mb-0.5 h-0.5 bg-purple-500"></div>

  </div>
  </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {/* Skill Cards */}
          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaReact size={40} className="text-blue-500" />
            <p className="mt-2 font-semibold">React.js</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaJs size={40} className="text-yellow-500" />
            <p className="mt-2 font-semibold">JavaScript</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaHtml5 size={40} className="text-orange-500" />
            <p className="mt-2 font-semibold">HTML5</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaCss3Alt size={40} className="text-blue-600" />
            <p className="mt-2 font-semibold">CSS3</p>
          </div>

          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaFigma size={40} className="text-purple-600" />
            <p className="mt-2 font-semibold">Figma</p>
          </div>

          
          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <FaNodeJs size={40} className="text-green-600" />
            <p className="mt-2 font-semibold">Node.js</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <SiRedux size={40} className="text-purple-500" />
            <p className="mt-2 font-semibold">Redux</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <SiTailwindcss size={40} className="text-teal-400" />
            <p className="mt-2 font-semibold">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-white text-gray-900 rounded-lg shadow-lg hover:scale-105 transition">
            <SiNextdotjs size={40} className="text-white bg-black p-1 rounded-md"/>
            <p className="mt-2 font-semibold">Next.js</p>
          </div>
        </div>
      
    </section>
  );
};

export default Skills;
