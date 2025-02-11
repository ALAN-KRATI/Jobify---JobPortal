import React from 'react';
import { useState, useEffect } from "react";
import Navbar from './shared/Navbar';

document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/800359124/photo/online-stores-dont-have-a-closing-time.jpg?s=612x612&w=0&k=20&c=Oo5Euj7J5hw3gNLKwXu-xFI5ECGgsV07cFaYWKEwi8E=')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.imageRendering = "high";

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // Simulate loading time (2 seconds)

        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <div>
            {loading ? (

                // LOADING SCREEN

                <div className="flex flex-col justify-center items-center h-screen bg-white">
                      <img
                        src="https://th.bing.com/th/id/OIP.Uq-vGvpJuXfaBb4hdzq8GwHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7"
                        alt="Logo"
                        className="w-20 h-20 animate-bounce border rounded-full "
                    />  
                    <p className="text-lg text-c1 font-bold mt-4 animate-pulse">JOBIFY</p>
                </div>
            ) : (

                // NavBar

                <div>
                <Navbar />
                <div className="flex flex-col justify-center items-center h-[90vh]">
                    <div className="w-1/2 shadow-lg flex flex-col items-center">
                        <p className="text-xl md:text-4xl font-semibold text-white px-6 py-8 mb-8">
                            "Opportunities don't happen, you create them."<br />
                        </p>
                        <div className="w-full flex">
                            <input
                                type="text"
                                placeholder="Search for jobs..."
                                className="w-full px-6 py-4 text-lg border border-gray-300  rounded-l-lg focus:outline-none focus:border-transparent"
                            />
                            <button className="px-8 py-4 bg-c1 text-white text-lg font-semibold rounded-r-lg hover:bg-c2 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-8 text-white">
                                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
            )}
        </div>
    );
}

export default Home;