import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font border-t mt-10">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Categories</h2>
            <nav className="list-none">
              <li><Link to="/men" className="text-gray-600 hover:text-gray-800">Clothes</Link></li>
              <li><Link to="/women" className="text-gray-600 hover:text-gray-800">Electronics</Link></li>
              <li><Link to="/electronics" className="text-gray-600 hover:text-gray-800">Shoes</Link></li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Support</h2>
            <nav className="list-none">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
            </nav>
          </div>

          <div className="lg:w-1/2 md:w-full w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Subscribe</h2>
            <p className="text-gray-500 text-sm mb-4">Stay up to date with offers and new products</p>
            <div className="flex flex-wrap items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto bg-gray-100 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base px-4 py-2 mr-2"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} OpenBazaar — All rights reserved.</p>
          <span className="inline-flex mt-2 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-800 mr-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800 mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
