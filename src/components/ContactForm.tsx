import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '../integrations/supabase/client';
import type { TablesInsert } from '../integrations/supabase/types';

type ContactFormData = TablesInsert<"contact_inquiries">;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([formData]);
        
      if (error) throw error;
      
      toast({
        title: "Form submitted successfully",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name*
          </label>
          <Input 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text" 
            placeholder="Your name" 
            required 
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <Input 
            id="phone" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel" 
            placeholder="Your phone number"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message*
          </label>
          <Textarea 
            id="message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?" 
            rows={4} 
            required 
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gold hover:bg-gold-dark text-gray-900"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;