// import React from "react";
// import QueenSamuel from "./assets/QueenSamuel.pdf";

// const ViewCV = ({ isModalOpen, onClose }) => {

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-lg">
//         <h2 className="text-xl font-bold mb-4">My CV</h2>

//         {/* CV Preview */}
//         <iframe
//           src={QueenSamuel}
//           className="w-full h-[500px] border"
//           title="CV Preview"
//         ></iframe>

//         {/* Download Button */}
//         <a
//           href={QueenSamuel}
//           download="QueenSamuel_CV.pdf"
//           className="block mt-3 w-full bg-green-600 text-white py-2 rounded-md text-center hover:bg-green-700"
//         >
//           Download CV
//         </a>

//         {/* Close Button */}
//         <button
//           className="mt-2 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ViewCV;

import React,  {useEffect} from "react";
import QueenSamuel from './assets/QueenSamuel.pdf'

const ViewCV = ({ isModalOpen, onClose }) => {
    useEffect(() => {
        if (isModalOpen) {
          document.documentElement.classList.add("overflow-hidden"); // Prevent scrolling
        } else {
          document.documentElement.classList.remove("overflow-hidden"); // Allow scrolling
        }
    
        return () => {
          document.documentElement.classList.remove("overflow-hidden"); // Cleanup
        };
      }, [isModalOpen]);
    
    
      return (
        <div className="fixed inset-0 bg-[#D1D5DB9C] backdrop-blur-[3px] flex justify-center items-center z-50 p-2">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 max-h-[95vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">My CV</h2>
    

        {/* CV Preview */}
        <iframe
          src={QueenSamuel}
          className="w-full h-[500px] border"
          title="CV Preview"
        ></iframe>

        {/* Close Button */}
        <button
className="mt-2 w-[40%] mx-auto flex justify-center bg-red-400 text-white p-2 rounded-md hover:bg-red-600"
onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewCV;
