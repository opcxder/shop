
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const brands = [
  { name: 'Astral', logo: 'Astral' },
  { name: 'Havells', logo: 'Havells' },
  { name: 'V-Guard', logo: 'V-Guard' },
  { name: 'Finolex', logo: 'Finolex' },
  { name: 'Western', logo: 'Western' },
  { name: 'Bajaj', logo: 'Bajaj' },
  { name: 'Ashirvad', logo: 'Ashirvad' },
  { name: 'Texmo', logo: 'Texmo' },
  { name: 'Kisan', logo: 'Kisan' },
];

const BrandShowcase = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">Brands We Trust</h2>
        
        <Card className="border border-champagne-dark shadow-md">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center h-16 w-full">
                    <h3 className="text-xl font-serif font-semibold text-navy">{brand.logo}</h3>
                  </div>
                  <Separator className="my-2 bg-champagne-dark" />
                  <p className="text-gray-600 text-sm mt-2">{brand.name}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 italic">
                We partner with the most reliable brands to ensure that you get nothing but the best quality products.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BrandShowcase;
