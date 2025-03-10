import { Card, CardContent } from '@/components/ui/card';

const brands = [
  { name: 'Havells', logo: '/havells.png' },
  { name: 'Astral', logo: '/astral.png' },
  { name: 'V-Guard', logo: '/v-guard.png' },
  { name: 'Finolex', logo: '/finolex.png' },
  { name: 'Western', logo: '/western.jpeg' },
  { name: 'Bajaj', logo: '/bajaj.png' },
  { name: 'Ashirvad', logo: '/ashirvad.png' },
  { name: 'Texmo', logo: '/texmo.jpeg' },
  { name: 'Kisan', logo: '/kisan.png' },
  { name: 'Parcos', logo: '/parcos.png' },
];

const BrandShowcase = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-8 md:mb-12">Brands We Trust</h2>
        
        <Card className="border border-champagne-dark shadow-md">
          <CardContent className="p-4 md:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {brands.map((brand, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center bg-white rounded-lg p-3 md:p-5 transition-all duration-300 hover:shadow-md hover:scale-105"
                >
                  <div className="flex items-center justify-center h-20 md:h-24 w-full mb-3">
                    {typeof brand.logo === 'string' && brand.logo.startsWith('/') ? (
                      <img src={brand.logo} alt={brand.name} className="h-16 md:h-20 object-contain" />
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
            
            <div className="mt-8 md:mt-10 text-center">
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