
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-burgundy via-burgundy-dark to-burgundy text-cream-light py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 animate-fade-in">
            Your Trusted Partner For 25+ Years
          </h2>
          <p className="text-lg md:text-xl mb-8 text-cream-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Providing quality plumbing, sanitary, and electrical products from top brands to residential and commercial customers since 1997.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/products">
              <Button size="lg" className="bg-gold hover:bg-gold-dark text-burgundy-dark font-medium">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-cream-light text-cream-light hover:bg-cream-light/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
