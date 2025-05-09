import React from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">L’Essence Verte</h1>
          <p className="text-sm text-gray-400">
            We are dedicated to providing the best products and services to our customers.
            Quality and customer satisfaction are at the heart of everything we do.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>123 Main Street, Cityville, Country</li>
            <li>Phone: +1 234 567 890</li>
            <li>Email: info@mycompany.com</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/shop/home" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/shop/listing" className="hover:text-gray-300">Products</Link></li>
            <li><Link to="/shop/search?keyword=" className="hover:text-gray-300">Search</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} L’Essence Verte. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;