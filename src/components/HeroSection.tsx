import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-200 text-gray-900 py-12 md:py-20 lg:py-28 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-3 md:mb-4 animate-fade-in text-gray-800">
            Your Trusted Partner For 25+ Years
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Providing quality plumbing, sanitary, and electrical products from top brands to residential and commercial customers since 1996.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/products" className="w-full sm:w-auto">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-gray-900 font-medium w-full">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-gray-400 text-gray-800 hover:bg-gray-200 w-full">
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