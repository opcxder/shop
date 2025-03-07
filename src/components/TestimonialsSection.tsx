
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    text: 'When renovating my home, I sourced all my plumbing materials from Vinayak Enterprises. Their product quality and customer service are unmatched in the region.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Homeowner',
    text: 'We needed quality electrical supplies for our new house. The team at Vinayak Enterprises guided us through the entire process, recommending the best products within our budget.',
  },
  {
    id: 3,
    name: 'Sunil Verma',
    role: 'Homeowner',
    text: 'For our bathroom renovation, we required various sanitary and plumbing items. Vinayak Enterprises delivered everything on time and at competitive prices. Highly recommended!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title text-center mx-auto mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-transparent hover:border-gold/30 transition-all duration-300">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-gold/40 mb-4" />
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-navy flex items-center justify-center text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-medium text-navy-dark">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
