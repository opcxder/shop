
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About Vinayak Enterprises</h2>
            <p className="text-gray-600 mb-4">
              For over 25 years, Vinayak Enterprises has been the trusted name in plumbing, sanitary, and electrical supplies in Thikri and surrounding areas. Our journey began in 1997, and we have since grown to become a premier destination for quality hardware products.
            </p>
            <p className="text-gray-600 mb-6">
              We take pride in our extensive inventory of high-quality products from renowned brands and our commitment to outstanding customer service. Our experienced team is always ready to assist you with product selection, technical advice, and after-sales support.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-gray-500 text-gray-700 hover:bg-gray-100">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-gold rounded-lg"></div>
              <img
                src="/about-image.jpeg"
                alt="Vinayak Enterprises Store"
                className="rounded-lg relative z-10 w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
