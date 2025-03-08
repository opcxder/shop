
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="py-4 bg-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="font-serif text-xl md:text-2xl font-bold text-gray-800">
              Vinayak <span className="text-gold">Enterprises</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors font-medium",
                isActive('/') && "text-gold font-semibold"
              )}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors font-medium",
                isActive('/products') && "text-gold font-semibold"
              )}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors font-medium",
                isActive('/about') && "text-gold font-semibold"
              )}
            >
              About Us
            </Link>
            <Link to="/contact">
              <Button className="bg-gold hover:bg-gold-dark text-gray-900">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "fixed md:hidden top-[60px] left-0 right-0 bg-gray-200 shadow-md z-40 transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              to="/" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors py-2 px-4 rounded-md font-medium",
                isActive('/') && "bg-gray-300 text-gold"
              )}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors py-2 px-4 rounded-md font-medium",
                isActive('/products') && "bg-gray-300 text-gold"
              )}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "text-gray-700 hover:text-gold transition-colors py-2 px-4 rounded-md font-medium",
                isActive('/about') && "bg-gray-300 text-gold"
              )}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2"
            >
              <Button className="w-full bg-gold hover:bg-gold-dark text-gray-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
