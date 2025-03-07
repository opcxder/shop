
import { Card, CardContent } from '@/components/ui/card';

const brands = [
  { name: 'Astral', logo: '/public/lovable-uploads/39a5d452-7310-44f3-a0eb-1708c8ebf922.png' },
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
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <div className="flex items-center justify-center h-16 w-full mb-3">
                    {typeof brand.logo === 'string' && brand.logo.startsWith('/') ? (
                      <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
                    ) : (
                      <div className="bg-navy-light/10 text-navy px-4 py-2 rounded-md font-semibold">
                        {brand.logo}
                      </div>
                    )}
                  </div>
                  <p className="text-navy-dark font-medium text-center">{brand.name}</p>
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
