import React from "react";
import { useNavigate } from "react-router-dom";
import pitchers from './assets/pictures/pitchers.png';
import meal from './assets/pictures/meal.png';

const projects = [
    { 
        id: 1, 
        mockup: pitchers, 
        name: "Pitchers International",
        description: "A modern software development company website designed to showcase services, expertise, and portfolio. It features a clean UI, responsive design, and engaging content to attract potential clients and partners.",
        liveLink: "https://pitchers-frontend.vercel.app"
    },
    { 
        id: 2, 
        mockup: meal, 
        name: "Go-To Meal",
        description: "A meal discovery platform where users can search for meals based on categories, ingredients, cuisine, or even randomly. It provides detailed meal descriptions, recipes, and images to help users find the perfect dish",
        liveLink: "https://go-to-meal.vercel.app/"
    },
];

const FlexDisplay = () => {
    return (
        <div className="container bg-[#FFFAFA] mx-auto px-6 py-6">
            <div className="container mx-auto px-6 lg:px-10 ">
                {/* Title */}
                <h2 className="bebas-neue-goals text-left my-2 text-2xl font-bold text-black">
                    Projects
                </h2>

                {/* Line Section */}
                <div className="relative w-4/4 mx-auto">
                    <div className="w-full h-0.5 bg-gray-200"></div>
                    <div className="w-32 mb-0.5 h-0.5 bg-purple-500"></div>
                </div>
            </div>

            {/* Project Display */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div 
                        key={project.id} 
                        className="flex flex-col items-center shadow-md rounded-lg p-4"
                    >
                        {/* Project Image */}
                        <img
                            src={project.mockup}
                            alt={project.name}
                            className="w-full h-56 object-cover rounded-md"
                        />

                        {/* Project Name */}
                        <h3 className="text-lg font-semibold mt-3">{project.name}</h3>

                        {/* Project Description */}
                        <p className="text-gray-600 text-sm text-center px-4 mt-2">
                            {project.description}
                        </p>

                        {/* Preview Button */}
                        <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-2 w-[40%] mx-auto flex justify-center bg-purple-400 text-white p-2 rounded-full hover:bg-purple-600"
                            >
                            PREVIEW
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FlexDisplay;
