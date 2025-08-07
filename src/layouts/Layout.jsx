// src/components/Layout.jsx
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {
  return (
    <div>
       <ToastContainer
        position="top-right"      // you can change position like 'bottom-left', etc
        autoClose={3000}          // auto close after 3 seconds
        hideProgressBar={true}    // hide progress bar for cleaner look
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"             
      />
    
     <Navbar/>

     
      <main className="min-h-screen">
        <Outlet />
      </main>

    
      <Footer/>
    </div>
  );
};

export default Layout;
