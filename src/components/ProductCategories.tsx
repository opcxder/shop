
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Lightbulb, Cable } from 'lucide-react';

const categories = [
  {
    id: 'electrical',
    title: 'Electrical Products',
    icon: Lightbulb,
    description: 'Top brand switches, wires, and LED lighting solutions for residential and commercial spaces.',
    imageUrl: '/lovable-uploads/7e3c1515-d36d-4130-af7b-8d074841e924.png',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    icon: Droplet,
    description: 'High-quality pipes, fittings, and accessories for all your plumbing needs.',
    imageUrl: '/lovable-uploads/e5469ed6-e032-4a70-bc9c-47db106508af.png',
  },
  {
    id: 'sanitary',
    title: 'Sanitary Ware',
    icon: Cable,
    description: 'Premium sanitary fittings, bathroom accessories, and related products.',
    imageUrl: '/lovable-uploads/688b8e5c-2af4-4221-ad65-b86bd8d80dfb.png',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-champagne-light">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Our Product Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/products#${category.id}`} className="group">
              <Card className="overflow-hidden h-full premium-card">
                <div className="h-[280px] overflow-hidden">
                  <img 
                    src={category.imageUrl} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <CardContent className="p-6 bg-white">
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
