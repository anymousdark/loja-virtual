import React from 'react';
import { Footer } from './Footer';
import { ArrowLeftIcon, BriefcaseIcon, UsersIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
interface AboutPageProps {
  onBackClick: () => void;
}
export function AboutPage({
  onBackClick
}: AboutPageProps) {
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
        <div className="relative bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#9FEF00] mb-4">
              About Tech Nexus
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pioneering the future of home technology since 2015. We're on a
              mission to make cutting-edge electronics accessible to everyone.
            </p>
          </div>
        </div>
        {/* Our Story Section */}
        <div className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#9FEF00] mb-6">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-4">
                  Tech Nexus was founded in 2015 by a group of technology
                  enthusiasts who saw a gap in the market for high-quality,
                  innovative home electronics at reasonable prices.
                </p>
                <p className="text-gray-300 mb-4">
                  What began as a small online store has now grown into a
                  leading retailer of cutting-edge home appliances, electronics,
                  and smart home solutions.
                </p>
                <p className="text-gray-300">
                  Our commitment to quality, innovation, and customer
                  satisfaction has remained unwavering throughout our journey.
                  We carefully select each product in our catalog to ensure it
                  meets our high standards for performance, durability, and
                  value.
                </p>
              </div>
              <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Team working on tech" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        {/* Our Values Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#9FEF00] mb-12 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6 text-center">
                <div className="bg-[#9FEF00]/10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <AwardIcon className="h-8 w-8 text-[#9FEF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Quality</h3>
                <p className="text-gray-400">
                  We never compromise on quality, selecting only the best
                  products for our customers.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6 text-center">
                <div className="bg-[#9FEF00]/10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <TrendingUpIcon className="h-8 w-8 text-[#9FEF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Innovation
                </h3>
                <p className="text-gray-400">
                  We stay ahead of the curve, bringing you the latest
                  advancements in technology.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6 text-center">
                <div className="bg-[#9FEF00]/10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <UsersIcon className="h-8 w-8 text-[#9FEF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Customer Focus
                </h3>
                <p className="text-gray-400">
                  Your satisfaction is our priority. We go above and beyond to
                  meet your needs.
                </p>
              </div>
              <div className="bg-black border border-[#9FEF00]/20 rounded-lg p-6 text-center">
                <div className="bg-[#9FEF00]/10 p-3 rounded-full inline-flex items-center justify-center mb-4">
                  <BriefcaseIcon className="h-8 w-8 text-[#9FEF00]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-gray-400">
                  We operate with honesty and transparency in all our business
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Team Section */}
        <div className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#9FEF00] mb-12 text-center">
              Meet Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(member => <div key={member} className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg overflow-hidden">
                  <img src={`https://randomuser.me/api/portraits/${member % 2 === 0 ? 'women' : 'men'}/${member + 10}.jpg`} alt={`Team member ${member}`} className="w-full h-64 object-cover" />
                  <div className="p-4 text-center">
                    <h3 className="text-white font-bold">Executive Name</h3>
                    <p className="text-[#9FEF00] text-sm">Position Title</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to experience the future?
            </h2>
            <p className="text-gray-300 mb-8">
              Browse our collection of cutting-edge electronics and transform
              your home today.
            </p>
            <button className="bg-[#9FEF00] text-black font-medium py-3 px-8 rounded-md hover:bg-[#9FEF00]/80 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}