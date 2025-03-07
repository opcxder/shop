
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">Need Assistance with Your Project?</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Our team of experienced professionals is ready to help you find the right products for your needs. Get in touch with us today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/contact">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-gray-900 font-medium shadow-lg">
              Contact Us
            </Button>
          </Link>
          <a href="tel:+919753255523">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
