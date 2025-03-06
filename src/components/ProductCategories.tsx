
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Lightbulb, Cable } from 'lucide-react';

const categories = [
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    icon: Droplet,
    description: 'High-quality pipes, fittings, and accessories for all your plumbing needs.',
    imageUrl: '/lovable-uploads/feaa011b-3316-4692-9640-c61b45de2d20.png',
  },
  {
    id: 'electrical',
    title: 'Electrical Products',
    icon: Lightbulb,
    description: 'Top brand switches, wires, and LED lighting solutions for residential and commercial spaces.',
    imageUrl: '/lovable-uploads/76385446-71dc-4e69-9bb2-750921b30769.png',
  },
  {
    id: 'sanitary',
    title: 'Sanitary Ware',
    icon: Cable,
    description: 'Premium sanitary fittings, bathroom accessories, and related products.',
    imageUrl: '/lovable-uploads/2870c2e9-a273-4a27-89b4-d5773b346d5b.png',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Our Product Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/products#${category.id}`} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-transparent hover:border-gold/30">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <category.icon className="w-5 h-5 mr-2 text-gold" />
                    <h3 className="font-serif text-xl font-semibold text-navy-dark">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
