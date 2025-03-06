
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-navy text-white py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-gray-200">
              Get in touch with us for all your plumbing, sanitary, and electrical product needs.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="h-full">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-serif font-semibold text-navy-dark">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-navy-dark">Address</h3>
                          <p className="text-gray-600">
                            Infront of Bank of India, Main road Thikri, Dist. Barwani, Madhya Pradesh, 451660
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-navy-dark">Phone</h3>
                          <p className="text-gray-600">
                            <a href="tel:+918889371921" className="hover:text-gold">
                              +91 8889371921
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-navy-dark">Email</h3>
                          <p className="text-gray-600">
                            <a href="mailto:contact@vinayakenterprises.com" className="hover:text-gold">
                              contact@vinayakenterprises.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-navy-dark">Business Hours</h3>
                          <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p className="text-gray-600">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-semibold text-navy-dark mb-6">Send Us a Message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
