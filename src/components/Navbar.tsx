
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-4 bg-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="font-serif text-2xl font-bold text-gray-800">
              Vinayak <span className="text-gold">Enterprises</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-gold transition-colors font-medium"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gold transition-colors font-medium"
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
            "md:hidden absolute top-full left-0 right-0 bg-gray-200 shadow-md transform transition-transform duration-200 ease-in-out z-30",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="flex flex-col space-y-4 py-6 px-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-gold transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-gray-700 hover:text-gold transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-gold transition-colors py-2 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsOpen(false)}
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
