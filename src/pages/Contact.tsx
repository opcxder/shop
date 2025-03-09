import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Toaster } from '@/components/ui/toaster';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Navbar />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">Contact Us</h1>
            <p className="text-lg text-gray-800 mb-8">
              Have questions about our products or services? Fill out the form below and our team will get back to you as soon as possible.
            </p>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Contact;