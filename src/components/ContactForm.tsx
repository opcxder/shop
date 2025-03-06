
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([
          { 
            name: formData.name,
            phone: formData.phone,
            email: formData.email || null,
            message: formData.message
          }
        ]);
        
      if (error) throw error;
        
      console.log('Form submitted to Supabase:', data);
      toast({
        title: "Contact Request Sent",
        description: "We will get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <FormLabel htmlFor="name">Full Name</FormLabel>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="border-cream-dark focus-visible:ring-gold"
            required
          />
        </div>
        
        <div className="space-y-2">
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            value={formData.phone}
            onChange={handleChange}
            className="border-cream-dark focus-visible:ring-gold"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Your email address (optional)"
          value={formData.email}
          onChange={handleChange}
          className="border-cream-dark focus-visible:ring-gold"
        />
      </div>
      
      <div className="space-y-2">
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="border-cream-dark focus-visible:ring-gold"
          required
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-gold to-gold-light hover:from-gold-dark hover:to-gold text-burgundy-dark"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      <p className="text-sm text-gray-500 text-center">
        We'll get back to you as soon as possible.
      </p>
    </form>
  );
};

export default ContactForm;
