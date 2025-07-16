import React, { useState } from 'react';
import { Footer } from './Footer';
import { ArrowLeftIcon, MapPinIcon, PhoneIcon, MailIcon, ClockIcon, SendIcon } from 'lucide-react';
interface ContactPageProps {
  onBackClick: () => void;
}
export function ContactPage({
  onBackClick
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the form data to your backend
    alert('Message sent! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  return <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="bg-gray-900 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBackClick} className="flex items-center text-[#9FEF00] hover:text-[#9FEF00]/80">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to home
          </button>
        </div>
      </div>
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#9FEF00] mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out
              to our team using any of the methods below.
            </p>
          </div>
        </div>
        {/* Contact Info & Form Section */}
        <div className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#9FEF00] mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#9FEF00]/10 p-3 rounded-full mr-4">
                      <MapPinIcon className="h-6 w-6 text-[#9FEF00]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Our Location
                      </h3>
                      <p className="text-gray-400">
                        123 Tech Boulevard, Innovation District
                      </p>
                      <p className="text-gray-400">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#9FEF00]/10 p-3 rounded-full mr-4">
                      <PhoneIcon className="h-6 w-6 text-[#9FEF00]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Phone Number
                      </h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                      <p className="text-gray-400">+1 (555) 765-4321</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#9FEF00]/10 p-3 rounded-full mr-4">
                      <MailIcon className="h-6 w-6 text-[#9FEF00]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Email Address
                      </h3>
                      <p className="text-gray-400">info@technexus.com</p>
                      <p className="text-gray-400">support@technexus.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#9FEF00]/10 p-3 rounded-full mr-4">
                      <ClockIcon className="h-6 w-6 text-[#9FEF00]" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-400">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                {/* Map Placeholder */}
                <div className="mt-8 bg-gray-900 border border-[#9FEF00]/20 rounded-lg h-64 w-full">
                  <div className="h-full w-full flex items-center justify-center bg-gray-800">
                    <p className="text-gray-400">Map Location</p>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#9FEF00] mb-8">
                  Send Us a Message
                </h2>
                <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg p-6">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Full Name
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-black border border-gray-700 text-white rounded-md block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-black border border-gray-700 text-white rounded-md block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" required />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                        Subject
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="bg-black border border-gray-700 text-white rounded-md block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" required>
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Returns">Returns & Exchanges</option>
                        <option value="Technical Support">
                          Technical Support
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                        Message
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="bg-black border border-gray-700 text-white rounded-md block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#9FEF00] text-black font-medium py-3 px-4 rounded-md hover:bg-[#9FEF00]/80 transition-colors flex items-center justify-center">
                      <SendIcon className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#9FEF00] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  What are your shipping options?
                </h3>
                <p className="text-gray-400">
                  We offer standard shipping (3-5 business days), express
                  shipping (1-2 business days), and same-day delivery in select
                  areas. Shipping costs vary based on your location and chosen
                  method.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  What is your return policy?
                </h3>
                <p className="text-gray-400">
                  We accept returns within 30 days of purchase for most items.
                  Products must be in their original packaging and in resalable
                  condition. Some items may have special return conditions.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-400">
                  Yes, we ship to most international locations. Delivery times
                  and costs vary by destination. Additional customs fees may
                  apply depending on your country's regulations.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  How can I track my order?
                </h3>
                <p className="text-gray-400">
                  Once your order ships, you'll receive a confirmation email
                  with tracking information. You can also track your order by
                  logging into your account on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}