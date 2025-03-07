
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 pb-2 border-b border-gray-200">
              Vinayak Enterprises
            </h3>
            <p className="text-gray-600 mb-4">
              Your trusted partner for plumbing, sanitary, and electrical solutions since 1996.
            </p>
            <div className="flex space-x-4">
              {/* Social icons can go here if needed */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 pb-2 border-b border-gray-200">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4 pb-2 border-b border-gray-200">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-600">
                  Infront of Bank of India, Main road Thikri, Dist. Barwani, Madhya Pradesh, 451660
                  <a 
                    href="https://maps.app.goo.gl/u7pNNDivRtJaiSBH7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gold hover:underline mt-1"
                  >
                    View on Google Maps (3C82+C3 Thikri)
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold" />
                <a href="tel:+919753255523" className="text-gray-600 hover:text-gold transition-colors">
                  +91 9753255523
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold" />
                <a href="mailto:contact@vinayakenterprises.com" className="text-gray-600 hover:text-gold transition-colors">
                  contact@vinayakenterprises.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gold" />
                <span className="text-gray-600">Mon - Sun: 9AM - 7PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Vinayak Enterprises. All rights reserved. Established 1996.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
