
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Award, Clock, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const features = [
  {
    icon: CheckCircle2,
    title: 'Quality Products',
    description: 'We source our products directly from top manufacturers to ensure authentic and high-quality materials.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Our knowledgeable staff provides professional advice to help you find the right products for your projects.',
  },
  {
    icon: Award,
    title: 'Trusted Reputation',
    description: 'With over 25 years in business, we have built a solid reputation for reliability and excellence.',
  },
  {
    icon: Clock,
    title: 'Timely Service',
    description: 'We pride ourselves on our prompt service, from inquiry to delivery, ensuring your projects stay on schedule.',
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-200 text-gray-900 py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">About Us</h1>
            <p className="max-w-2xl mx-auto text-gray-800">
              Learn about our journey, mission, and what makes Vinayak Enterprises the trusted name in plumbing and electrical supplies.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="section-title text-gray-900">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Vinayak Enterprises was established in 1997 with a simple vision: to provide high-quality plumbing, sanitary, and electrical products to the people of Thikri and surrounding areas. What began as a small shop has now grown into a trusted destination for both residential and commercial customers seeking quality hardware solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  For over 25 years, we have maintained our commitment to excellence, building lasting relationships with our customers and suppliers. Our founder's dedication to customer satisfaction and product quality continues to guide our business philosophy today.
                </p>
                <p className="text-gray-700">
                  As we have grown, we have expanded our product range to include the latest innovations in plumbing and electrical technologies, while maintaining our core values of integrity, quality, and exceptional service.
                </p>
              </div>
              
              <div>
                <div className="relative">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-gold rounded-lg"></div>
                  <img
                    src="/lovable-uploads/7adc536f-2487-4073-b895-5157564f41d8.png"
                    alt="Vinayak Enterprises Store"
                    className="rounded-lg relative z-10 w-full h-auto object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="section-title text-center mx-auto mb-12 text-gray-900">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border-transparent hover:border-gold/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="h-12 w-12 text-gold mx-auto mb-4" />
                      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="section-title text-center mx-auto mb-12 text-gray-900">Our Mission</h2>
              <Card>
                <CardContent className="p-8 text-center">
                  <p className="text-xl text-gray-700 italic max-w-3xl mx-auto">
                    "To provide our customers with the highest quality plumbing, sanitary, and electrical products, backed by exceptional service, expert advice, and competitive pricing."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
