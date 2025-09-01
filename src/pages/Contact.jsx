import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, FiPhone, FiMapPin, FiSend, 
  FiClock, FiMessageSquare, FiUser, FiAlertCircle,
  FiCheckCircle, FiTwitter, FiFacebook, FiInstagram,
  FiLinkedin, FiArrowRight
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "general"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "", category: "general" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl text-amber-600" />,
      title: "Email Us",
      details: "support@ghanaconsumer.com",
      description: "Send us an email anytime",
      action: "mailto:support@ghanaconsumer.com"
    },
    {
      icon: <FiPhone className="text-2xl text-green-600" />,
      title: "Call Us",
      details: "+233 20 123 4567",
      description: "Mon-Fri from 8AM to 5PM",
      action: "tel:+233201234567"
    },
    {
      icon: <FiMapPin className="text-2xl text-red-600" />,
      title: "Visit Us",
      details: "Accra, Ghana",
      description: "Liberty House, Accra Central",
      action: "https://maps.google.com/?q=Accra,Ghana"
    },
    {
      icon: <FiClock className="text-2xl text-blue-600" />,
      title: "Response Time",
      details: "Within 24 hours",
      description: "We value your time",
      action: null
    }
  ];

  const faqs = [
    {
      question: "What should I include in my message?",
      answer: "Please include your contact information, detailed description of your inquiry, and any relevant references or order numbers."
    },
    {
      question: "Do you have regional offices?",
      answer: "Our main office is in Accra, but we have representatives in Kumasi, Takoradi, and Tamale who can assist with local consumer issues."
    },
    {
      question: "Can I schedule a meeting?",
      answer: "Yes, please use our meeting request form and we'll coordinate a time that works for both parties."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-6"
          >
            <FiMessageSquare className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-green-600 to-red-600">
            Contact Ghana Consumer
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Have questions about consumer rights, product issues, or partnership opportunities? We're here to help you navigate the Ghanaian market.
          </p>
        </motion.header>

        {/* Contact Methods Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-gray-100 rounded-full mb-4">
                {method.icon}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{method.title}</h3>
              <p className="text-lg font-medium text-gray-900 mb-1">{method.details}</p>
              <p className="text-sm text-gray-600 mb-4">{method.description}</p>
              {method.action && (
                <a
                  href={method.action}
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
                >
                  Contact us <FiArrowRight className="ml-1" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-center"
              >
                <FiCheckCircle className="text-green-600 text-xl mr-3" />
                <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="complaint">Consumer Complaint</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="media">Media Inquiry</option>
                  <option value="suggestion">Suggestion/Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief subject of your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your inquiry in detail..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Location</h3>
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  title="Ghana Consumer Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31708.409969842244!2d-0.21354809999999998!3d5.56001465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c10b6d4dfb9%3A0x9b3c1d7d5e1a9bb0!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1697579399999!5m2!1sen!2sgh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center">
                Liberty House, Accra Central, Ghana
              </p>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Answers</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-l-4 border-amber-400 pl-4 py-2">
                    <h4 className="font-medium text-gray-800">{faq.question}</h4>
                    <p className="text-sm text-gray-600 mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Follow Us</h3>
              <p className="text-gray-600 mb-4">Stay updated with consumer news and alerts</p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors">
                  <FiFacebook className="text-xl" />
                </a>
                <a href="#" className="p-3 bg-blue-100 text-blue-400 rounded-xl hover:bg-blue-200 transition-colors">
                  <FiTwitter className="text-xl" />
                </a>
                <a href="#" className="p-3 bg-pink-100 text-pink-600 rounded-xl hover:bg-pink-200 transition-colors">
                  <FiInstagram className="text-xl" />
                </a>
                <a href="#" className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors">
                  <FiLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;