import { Link } from 'react-router-dom';
import { Droplet, Lightbulb, Cable } from 'lucide-react';

const categories = [
  {
    id: 'electrical',
    title: 'Electrical Products',
    icon: Lightbulb,
    description: 'Quality electrical supplies including switches, wires, MCBs, bulbs, fans, and complete electrical solutions for homes and businesses.',
    imageUrl: '/electric_solution.png', 
  },
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    icon: Droplet,
    description: 'Comprehensive plumbing materials including pipes, fittings, taps, valves, and accessories for all your water supply and drainage needs.',
    imageUrl: '/pluming_solution.png', 
  },
  {
    id: 'sanitary',
    title: 'Sanitary Ware',
    icon: Cable,
    description: 'Modern sanitary products including toilets, washbasins, bathroom accessories, and fixtures to enhance your bathroom experience.',
    imageUrl: '/sanotary_solution.png', 
  },
];

const ProductCategories = () => {
  return (
    <section className="py-12 md:py-16 bg-champagne-dark">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-8 md:mb-12">Our Product Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/products#${category.id}`} className="group block bg-white">
              <div className="w-full h-auto overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-2 md:mb-3">
                  <category.icon className="w-4 h-4 md:w-5 md:h-5 mr-2 text-gold" />
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-navy-dark">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;