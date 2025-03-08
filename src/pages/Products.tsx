
import { Card, CardContent } from '@/components/ui/card';
import { Droplet, Lightbulb, Cable } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const productCategories = [
  {
    id: 'electrical',
    title: 'Electrical Products',
    icon: Lightbulb,
    description: 'Top brand switches, wires, and LED lighting solutions for residential and commercial spaces.',
    products: [
      'Wires & Cables',
      'Switches & Sockets',
      'MCBs & Distribution Boards',
      'LED Lights & Panels',
      'Fans & Exhausts',
      'Geysers & Water Heaters',
      'Switchgears',
      'Conduits & Accessories',
      'Inverters & Batteries',
      'Stabilizers'
    ],
    brands: ['Havells', 'V-Guard', 'Finolex', 'Bajaj', 'Western'],
    imageUrl: '/lovable-uploads/7e3c1515-d36d-4130-af7b-8d074841e924.png',
  },
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    icon: Droplet,
    description: 'High-quality pipes, fittings, and accessories for all your plumbing needs.',
    products: [
      'PVC Pipes & Fittings',
      'CPVC Pipes & Fittings',
      'UPVC Pipes & Fittings',
      'GI Pipes & Fittings',
      'PEX Pipes',
      'PPR Pipes',
      'Bathroom Fittings',
      'Valves & Controls',
      'Water Tanks',
      'Water Pumps'
    ],
    brands: ['Astral', 'Ashirvad', 'Finolex', 'Kisan'],
    imageUrl: '/lovable-uploads/e5469ed6-e032-4a70-bc9c-47db106508af.png',
  },
  {
    id: 'sanitary',
    title: 'Sanitary Ware',
    icon: Cable,
    description: 'Premium sanitary fittings, bathroom accessories, and related products.',
    products: [
      'Sanitaryware',
      'Bathroom Fittings',
      'Kitchen Sinks',
      'Shower Systems',
      'Water Closets',
      'Washbasins',
      'Bathroom Accessories',
      'Faucets & Taps',
      'Kitchen Fittings',
      'Waste Couplings'
    ],
    brands: ['Astral', 'Texmo', 'Western'],
    imageUrl: '/lovable-uploads/688b8e5c-2af4-4221-ad65-b86bd8d80dfb.png',
  },
];

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-200 text-gray-900 py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">Our Products</h1>
            <p className="max-w-2xl mx-auto text-gray-800">
              Explore our extensive collection of high-quality plumbing, sanitary, and electrical products from top brands.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            {productCategories.map((category) => (
              <div key={category.id} id={category.id} className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="sticky top-24">
                      <div className="aspect-square overflow-hidden rounded-lg mb-6 premium-card">
                        <img
                          src={category.imageUrl}
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-3 flex items-center">
                        <category.icon className="w-5 h-5 mr-2 text-gold" />
                        {category.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{category.description}</p>
                      
                      <div className="mt-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Featured Brands</h3>
                        <div className="flex flex-wrap gap-2">
                          {category.brands.map((brand) => (
                            <span 
                              key={brand} 
                              className="inline-block px-3 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <Card className="premium-card">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-gray-900 text-lg mb-4">Available Products</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.products.map((product, index) => (
                            <div 
                              key={index}
                              className="flex items-center p-3 border border-gray-300 bg-white rounded-md hover:border-gold/50 transition-colors"
                            >
                              <div className="h-2 w-2 rounded-full bg-gold mr-3"></div>
                              <span className="text-gray-800">{product}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
