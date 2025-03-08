
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
        <div className="bg-gray-200 text-gray-900 py-12">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-gray-800">
              Get in touch with us for all your plumbing, sanitary, and electrical product needs.
            </p>
          </div>
        </div>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <Card className="h-full premium-card">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-serif font-semibold text-gray-900">Contact Information</h2>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">Address</h3>
                          <p className="text-gray-700">
                            Infront of Bank of India, Main road Thikri, Dist. Barwani, Madhya Pradesh, 451660
                          </p>
                          <a 
                            href="https://maps.app.goo.gl/u7pNNDivRtJaiSBH7" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gold hover:underline text-sm mt-1 inline-block"
                          >
                            View on Google Maps (3C82+C3 Thikri)
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Phone className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">Phone</h3>
                          <p className="text-gray-700">
                            <a href="tel:+918889371921" className="hover:text-gold">
                              +91 8889371921
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Mail className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">Email</h3>
                          <p className="text-gray-700">
                            <a href="mailto:contact@vinayakenterprises.com" className="hover:text-gold">
                              contact@vinayakenterprises.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-gold shrink-0 mt-1" />
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">Business Hours</h3>
                          <p className="text-gray-700">Monday - Sunday: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-2">
                <Card className="premium-card">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-serif font-semibold text-gray-900 mb-6">Send Us a Message</h2>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <div className="w-full h-[400px] relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.7075831853813!2d75.39742799999999!3d22.218611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962021f3e6a43c1%3A0xc1bb0c1c7f35e30c!2s3C82%2BC3%20Thikri%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717175001234!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Vinayak Enterprises Location"
            className="absolute inset-0"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
