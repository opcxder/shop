
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-100 text-gray-900 py-20 md:py-28 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in text-gray-800">
            Your Trusted Partner For 25+ Years
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Providing quality plumbing, sanitary, and electrical products from top brands to residential and commercial customers since 1997.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/products">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-gray-900 font-medium">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
