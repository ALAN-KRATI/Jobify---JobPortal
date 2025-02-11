import Navbar from "./Navbar";  // Import Navbar
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/800359124/photo/online-stores-dont-have-a-closing-time.jpg?s=612x612&w=0&k=20&c=Oo5Euj7J5hw3gNLKwXu-xFI5ECGgsV07cFaYWKEwi8E=')", // Replace with your image URL
      }}
    >
      <Navbar />  {/* Navbar will be rendered ONCE on all pages */}
      <main className="p-6">  {/* Adds padding to avoid content sticking to edges */}
        <Outlet />  {/* Dynamically renders page content */}
      </main>
    </div>
  );
};

export default Layout;
