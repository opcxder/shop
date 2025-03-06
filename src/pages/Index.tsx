
import HeroSection from '@/components/HeroSection';
import ProductCategories from '@/components/ProductCategories';
import BrandShowcase from '@/components/BrandShowcase';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProductCategories />
        <AboutSection />
        <BrandShowcase />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
