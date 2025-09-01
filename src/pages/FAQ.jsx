import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiSearch, FiChevronDown, FiChevronUp, 
  FiMail, FiUsers, FiBook, FiDollarSign,
  FiShield, FiHeart, FiHelpCircle, FiMessageSquare,
  FiThumbsUp, FiStar, FiClock, FiUser
} from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: "all", name: "All Questions", icon: <FiHelpCircle /> },
    { id: "general", name: "General", icon: <FiUsers /> },
    { id: "account", name: "Account & Profile", icon: <FiUser /> },
    { id: "content", name: "Content & Contributions", icon: <FiBook /> },
    { id: "financial", name: "Financial", icon: <FiDollarSign /> },
    { id: "safety", name: "Safety & Privacy", icon: <FiShield /> }
  ];

  const faqs = [
    {
      question: "What is Ghana Consumer and how does it help Ghanaian shoppers?",
      answer: "Ghana Consumer is Ghana's premier consumer empowerment platform dedicated to providing reliable product reviews, price comparisons, shopping guides, and consumer rights information specifically tailored for the Ghanaian market. We help you make informed purchasing decisions, save money, and understand your rights as a consumer in Ghana.",
      category: "general",
      likes: 42,
      featured: true
    },
    {
      question: "How do I contact Ghana Consumer for support or inquiries?",
      answer: "You can reach our support team through multiple channels: 1) Email us at support@ghanaconsumer.com, 2) Use the contact form on our Contact Us page, 3) Call our helpline at 0302-XXXXXX during business hours (8AM-5PM GMT), or 4) Message us on our social media platforms (@GhanaConsumer on Facebook, Twitter, and Instagram).",
      category: "general",
      likes: 28
    },
    {
      question: "Can I contribute content, reviews, or articles to Ghana Consumer?",
      answer: "Absolutely! We welcome contributions from knowledgeable consumers across Ghana. You can: 1) Submit product reviews through your account dashboard, 2) Apply to become a regular contributor through our Affiliates page, 3) Share your DIY guides and money-saving tips, or 4) Participate in our community forum. All submissions are reviewed by our editorial team to maintain quality standards.",
      category: "content",
      likes: 35
    },
    {
      question: "Is Ghana Consumer completely free to use?",
      answer: "Yes, access to all our consumer resources, product reviews, price comparisons, and educational content is completely free for all users. We are funded through ethical advertising, affiliate partnerships with Ghanaian businesses, and sponsored content that is always clearly marked as such. We never charge consumers for access to basic information.",
      category: "financial",
      likes: 56,
      featured: true
    },
    {
      question: "How do I create an account and what are the benefits?",
      answer: "Creating an account is simple: click 'Sign Up' in the top navigation, provide your email address, create a password, and verify your email. Account benefits include: saving favorite products, contributing reviews, receiving personalized deal alerts, participating in our community forum, and tracking your consumer rights inquiries.",
      category: "account",
      likes: 31
    },
    {
      question: "How does Ghana Consumer ensure the accuracy of product reviews?",
      answer: "We maintain rigorous review standards through: 1) Verification of purchase for product reviews, 2) Expert evaluation of technical products, 3) Regular price accuracy checks across major Ghanaian retailers, 4) User rating system that promotes helpful reviews, and 5) Clear disclosure of sponsored content. We also collaborate with the Ghana Standards Authority for product testing when possible.",
      category: "safety",
      likes: 47
    },
    {
      question: "What should I do if I have a consumer rights issue in Ghana?",
      answer: "If you encounter issues with a product or service: 1) Document everything (receipts, photos, communications), 2) Contact the seller/service provider directly, 3) If unresolved, file a report through our Consumer Assistance portal, 4) We can help mediate with the business, 5) For serious issues, we'll connect you with the Ghana Consumer Protection Council or relevant regulatory body.",
      category: "safety",
      likes: 39,
      featured: true
    },
    {
      question: "How often is price information updated on Ghana Consumer?",
      answer: "We update prices regularly through: 1) Automated tracking of major Ghanaian e-commerce sites (daily updates), 2) Manual verification of physical store prices (weekly), 3) User-submitted price reports (verified within 24 hours), and 4) Seasonal market surveys. All price listings include a 'last updated' timestamp so you know how current the information is.",
      category: "general",
      likes: 27
    },
    {
      question: "Does Ghana Consumer cover products and services across all regions of Ghana?",
      answer: "Yes, we strive to cover consumer issues and products available throughout Ghana, including Accra, Kumasi, Takoradi, Tamale, and rural areas. However, availability of certain products or services may vary by region. Our platform allows users to filter information by region to see what's available in their specific location.",
      category: "general",
      likes: 22
    },
    {
      question: "How can businesses partner with Ghana Consumer?",
      answer: "We offer several ethical partnership options for Ghanaian businesses: 1) Sponsored content and product features (clearly marked), 2) Advertising opportunities, 3) Participation in our trusted merchant program, 4) Collaboration on consumer education initiatives, and 5) Response platform for addressing customer feedback. Businesses can contact us through our Enterprise Partnerships page.",
      category: "content",
      likes: 19
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredFaqs = filteredFaqs.filter(faq => faq.featured);
  const regularFaqs = filteredFaqs.filter(faq => !faq.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
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
            <FiHelpCircle className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-green-600 to-red-600">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Find answers to common questions about Ghana Consumer and how we empower shoppers across Ghana
          </p>
        </motion.header>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-10 border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <label htmlFor="search" className="sr-only">Search FAQs</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id 
                    ? "bg-amber-500 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured FAQs */}
        {featuredFaqs.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FiStar className="text-amber-500 mr-2" />
              Popular Questions
            </h2>
            <div className="space-y-4">
              {featuredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(`featured-${index}`)}
                    className="w-full text-left p-6 flex justify-between items-center font-semibold text-gray-800"
                  >
                    <span>{faq.question}</span>
                    {openIndex === `featured-${index}` ? (
                      <FiChevronUp className="flex-shrink-0 ml-4" />
                    ) : (
                      <FiChevronDown className="flex-shrink-0 ml-4" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === `featured-${index}` && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                        <div className="flex items-center mt-4 text-sm text-gray-500">
                          <button className="flex items-center mr-4 hover:text-amber-600">
                            <FiThumbsUp className="mr-1" />
                            <span>{faq.likes} helpful</span>
                          </button>
                          <button className="flex items-center hover:text-amber-600">
                            <FiMessageSquare className="mr-1" />
                            <span>Comment</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular FAQs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4">All Questions</h2>
          <div className="space-y-4">
            {regularFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(`regular-${index}`)}
                  className="w-full text-left p-6 flex justify-between items-center font-medium text-gray-800"
                >
                  <span>{faq.question}</span>
                  {openIndex === `regular-${index}` ? (
                    <FiChevronUp className="flex-shrink-0 ml-4" />
                  ) : (
                    <FiChevronDown className="flex-shrink-0 ml-4" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === `regular-${index}` && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                      <div className="flex items-center mt-4 text-sm text-gray-500">
                        <button className="flex items-center mr-4 hover:text-amber-600">
                          <FiThumbsUp className="mr-1" />
                          <span>{faq.likes} helpful</span>
                        </button>
                        <button className="flex items-center hover:text-amber-600">
                          <FiMessageSquare className="mr-1" />
                          <span>Comment</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-2xl shadow-sm"
          >
            <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-4">
              <FiSearch className="text-gray-500 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No questions found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn't find any questions matching "{searchQuery}". Try adjusting your search or filter.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help you with any questions about consumer rights in Ghana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <FiMail className="mr-2" />
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Visit Community Forum
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;