import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiArrowRight, FiUsers, FiDollarSign, FiTrendingUp, 
  FiPieChart, FiGlobe, FiShield, FiClock, FiAward,
  FiCheckCircle, FiStar, FiBarChart2, FiLink
} from "react-icons/fi";

const Affiliates = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState([
    { value: 2500, label: "Active Affiliates", icon: <FiUsers /> },
    { value: "₵1.2M", label: "Total Paid", icon: <FiDollarSign /> },
    { value: "15%", label: "Avg. Commission", icon: <FiTrendingUp /> },
    { value: "98%", label: "Satisfaction Rate", icon: <FiStar /> }
  ]);

  useEffect(() => {
    // Animation for counter stats
    const interval = setInterval(() => {
      setStats(prev => prev.map(stat => ({
        ...stat,
        value: typeof stat.value === 'number' 
          ? stat.value + Math.floor(Math.random() * 10) 
          : stat.value
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Kofi Mensah",
      role: "Lifestyle Blogger",
      content: "GhanaConsumer's affiliate program has transformed my blog into a revenue-generating platform. The commissions are generous and the support team is always helpful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Ama Serwaa",
      role: "Instagram Influencer",
      content: "As a micro-influencer focusing on Ghanaian products, I've found GhanaConsumer to be the most reliable affiliate program. Timely payments and great conversion rates!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Kwame Adjei",
      role: "YouTuber",
      content: "My tech review channel has benefited immensely from the GhanaConsumer affiliate program. The product variety and competitive commissions make it my top choice.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const faqs = [
    {
      question: "How often are commissions paid out?",
      answer: "Commissions are paid monthly on the 15th of each month for all sales that occurred in the previous month."
    },
    {
      question: "Is there a cost to join the affiliate program?",
      answer: "No, joining our affiliate program is completely free. We believe in creating mutual growth opportunities."
    },
    {
      question: "What is the cookie duration for tracking?",
      answer: "We offer a 45-day cookie window, meaning you'll earn commission on any sale made within 45 days of a customer clicking your referral link."
    },
    {
      question: "Are there any minimum payout thresholds?",
      answer: "Yes, the minimum payout threshold is ₵200. Once you reach this amount, you'll receive your earnings via your preferred payment method."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 right-0 -mt-16 mr-16 opacity-20">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path fill="currentColor" d="M45.2,-58.3C63.4,-46.3,85.5,-40,95.1,-25.3C104.7,-10.7,101.8,12.3,91.7,30.3C81.6,48.3,64.4,61.3,45.7,69.8C27,78.3,6.7,82.3,-9.1,78.6C-24.9,74.9,-36.1,63.4,-49.3,50.3C-62.5,37.2,-77.7,22.5,-82.5,4.3C-87.3,-13.9,-81.7,-35.6,-69.1,-49.7C-56.5,-63.8,-36.9,-70.3,-17.3,-67.5C2.3,-64.7,4.6,-52.6,12.7,-42.2C20.8,-31.8,34.7,-23.1,45.2,-12.7C55.7,-2.4,62.8,9.6,67.2,23.2C71.6,36.8,73.4,52,66.7,62.2C60,72.4,44.9,77.6,29.9,79.9C14.9,82.3,0,81.8,-12.8,77.9C-25.6,74,-36.1,66.8,-47.4,58.1C-58.7,49.4,-70.7,39.2,-76.1,25.6C-81.5,12,-80.3,-5.1,-74.3,-19.2C-68.3,-33.4,-57.5,-44.7,-45.1,-57.2C-32.7,-69.7,-18.7,-83.5,-1.7,-81.1C15.3,-78.7,30.7,-60.2,45.2,-45.8Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">GhanaConsumer Affiliate Program</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Ghana's leading consumer platform and earn competitive commissions while promoting products that empower Ghanaian consumers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center mx-auto"
              onClick={() => setIsModalOpen(true)}
            >
              Join Our Affiliate Program <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Brands Choose GhanaConsumer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-green-600 text-3xl mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our straightforward process makes it easy to start earning commissions with GhanaConsumer
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-6">
                <FiLink />
              </div>
              <h3 className="font-semibold text-xl mb-4">1. Sign Up & Get Links</h3>
              <p className="text-gray-600">Register for our affiliate program and get access to your personalized dashboard with unique tracking links.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-6">
                <FiGlobe />
              </div>
              <h3 className="font-semibold text-xl mb-4">2. Promote Products</h3>
              <p className="text-gray-600">Share GhanaConsumer products across your platforms - social media, blog, website, or YouTube channel.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mx-auto mb-6">
                <FiDollarSign />
              </div>
              <h3 className="font-semibold text-xl mb-4">3. Earn Commissions</h3>
              <p className="text-gray-600">Get paid for every sale made through your referral links. Track your earnings in real-time.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Program Benefits</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We've designed our affiliate program to help you succeed and grow with us
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiDollarSign size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Competitive Commissions</h3>
                <p className="text-gray-600">Earn up to 20% commission on every sale with our tiered structure.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiBarChart2 size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Track clicks, conversions, and earnings with our advanced dashboard.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiClock size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Timely Payments</h3>
                <p className="text-gray-600">Receive your earnings reliably every month through multiple payment options.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiShield size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Get assistance from our affiliate managers and marketing team.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiPieChart size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Marketing Resources</h3>
                <p className="text-gray-600">Access banners, product feeds, and content to help you promote.</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start"
            >
              <div className="bg-green-100 p-3 rounded-lg text-green-600 mr-4">
                <FiAward size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Performance Bonuses</h3>
                <p className="text-gray-600">Earn additional bonuses for top performers each quarter.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Affiliates Say</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Hear from successful affiliates who are growing with GhanaConsumer
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-green-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex text-amber-400 mt-4">
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                  <FiStar className="fill-current" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
          <p className="text-green-100 max-w-2xl mx-auto mb-10">
            Join hundreds of successful affiliates who are earning with GhanaConsumer. 
            Whether you're a content creator, influencer, or website owner, our program offers great earning potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              Join Now - It's Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Find answers to common questions about our affiliate program
          </p>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 border-b border-gray-200 pb-6"
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <FiCheckCircle className="text-green-600 mr-2" /> {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4">Join GhanaConsumer Affiliates</h3>
              <p className="text-gray-600 mb-6">Enter your details to get started with our affiliate program.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Website or Social Media</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="URL(s) where you'll promote" />
                </div>
                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm">I agree to the terms and conditions</span>
                  </label>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Submit Application
                </button>
              </form>
              
              <button 
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsModalOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Affiliates;