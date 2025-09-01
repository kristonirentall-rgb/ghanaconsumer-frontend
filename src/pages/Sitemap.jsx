import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, FiInfo, FiUsers, FiTool, FiHelpCircle, 
  FiMail, FiSearch, FiMap, FiFileText, FiGrid,
  FiBook, FiShoppingBag, FiPieChart, FiTrendingUp,
  FiDollarSign, FiHeart, FiShield, FiAward, FiStar,
  FiCalendar, FiBookmark, FiArchive, FiLayers,FiArrowRight
} from "react-icons/fi";

const Sitemap = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const sections = useMemo(
    () => [
      {
        id: "core",
        title: "Core Pages",
        icon: <FiHome className="text-amber-600" />,
        links: [
          { label: "Home", to: "/", icon: <FiHome size={16} /> },
          { label: "About Ghana Consumer", to: "/about", icon: <FiInfo size={16} /> },
          { label: "Affiliate Program", to: "/affiliates", icon: <FiUsers size={16} /> },
          { label: "DIY Guides & Resources", to: "/diy", icon: <FiTool size={16} /> },
          { label: "Frequently Asked Questions", to: "/faq", icon: <FiHelpCircle size={16} /> },
          { label: "Contact Us", to: "/contact", icon: <FiMail size={16} /> },
          { label: "Search Content", to: "/search", icon: <FiSearch size={16} /> },
          { label: "Site Map", to: "/sitemap", icon: <FiMap size={16} /> },
        ],
      },
      {
        id: "consumer",
        title: "Consumer Resources",
        icon: <FiBook className="text-green-600" />,
        links: [
          { label: "Consumer Rights Guide", to: "/consumer-rights", icon: <FiShield size={16} /> },
          { label: "Product Reviews", to: "/reviews", icon: <FiStar size={16} /> },
          { label: "Price Comparison", to: "/price-comparison", icon: <FiDollarSign size={16} /> },
          { label: "Local Business Directory", to: "/business-directory", icon: <FiGrid size={16} /> },
          { label: "Consumer Alerts", to: "/alerts", icon: <FiHeart size={16} /> },
        ],
      },
      {
        id: "shopping",
        title: "Shopping & Deals",
        icon: <FiShoppingBag className="text-red-600" />,
        links: [
          { label: "Best Deals", to: "/deals", icon: <FiTrendingUp size={16} /> },
          { label: "Black Friday Ghana", to: "/black-friday", icon: <FiCalendar size={16} /> },
          { label: "Electronics Guide", to: "/electronics", icon: <FiArchive size={16} /> },
          { label: "Fashion & Apparel", to: "/fashion", icon: <FiBookmark size={16} /> },
          { label: "Supermarket Price Watch", to: "/supermarket-prices", icon: <FiPieChart size={16} /> },
        ],
      },
      {
        id: "financial",
        title: "Financial Guidance",
        icon: <FiDollarSign className="text-blue-600" />,
        links: [
          { label: "Personal Finance Tips", to: "/personal-finance", icon: <FiTrendingUp size={16} /> },
          { label: "Ghana Banking Comparison", to: "/banking", icon: <FiDollarSign size={16} /> },
          { label: "Mobile Money Guide", to: "/mobile-money", icon: <FiLayers size={16} /> },
          { label: "Investment Opportunities", to: "/investments", icon: <FiAward size={16} /> },
          { label: "Insurance Comparison", to: "/insurance", icon: <FiShield size={16} /> },
        ],
      },
      {
        id: "community",
        title: "Community & News",
        icon: <FiUsers className="text-purple-600" />,
        links: [
          { label: "Community Forum", to: "/forum", icon: <FiUsers size={16} /> },
          { label: "Consumer Stories", to: "/stories", icon: <FiBookmark size={16} /> },
          { label: "Latest News", to: "/news", icon: <FiFileText size={16} /> },
          { label: "Events & Workshops", to: "/events", icon: <FiCalendar size={16} /> },
          { label: "Volunteer Opportunities", to: "/volunteer", icon: <FiHeart size={16} /> },
        ],
      },
      {
        id: "legal",
        title: "Legal Resources",
        icon: <FiFileText className="text-gray-600" />,
        links: [
          { label: "Terms of Service", to: "/terms", icon: <FiFileText size={16} /> },
          { label: "Privacy Policy", to: "/privacy", icon: <FiShield size={16} /> },
          { label: "Cookie Policy", to: "/cookies", icon: <FiBookmark size={16} /> },
          { label: "Disclaimer", to: "/disclaimer", icon: <FiInfo size={16} /> },
          { label: "Advertising Policy", to: "/advertising", icon: <FiTrendingUp size={16} /> },
        ],
      },
    ],
    []
  );

  const categories = useMemo(() => [
    { id: "all", label: "All Sections" },
    ...sections.map(section => ({ id: section.id, label: section.title }))
  ], [sections]);

  const filtered = useMemo(() => {
    if (!query.trim() && activeCategory === "all") return sections;
    
    const q = query.toLowerCase();
    return sections
      .filter(section => activeCategory === "all" || section.id === activeCategory)
      .map((sec) => ({
        ...sec,
        links: sec.links.filter(
          (l) =>
            l.label.toLowerCase().includes(q) ||
            sec.title.toLowerCase().includes(q)
        ),
      }))
      .filter((sec) => sec.links.length > 0);
  }, [query, sections, activeCategory]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-6"
          >
            <FiMap className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-green-600 to-red-600">
            Ghana Consumer Sitemap
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Explore all resources, guides, and services available on Ghana's premier consumer platform
          </p>
        </motion.header>

        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-10 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full">
              <label htmlFor="filter" className="sr-only">Search sitemap</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="filter"
                  type="text"
                  placeholder="Search for pages, resources, or guides..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="category" className="sr-only">Filter by category</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGrid className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="category"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 dark:text-white"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sitemap Content */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.section
              key="sitemap-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((sec, i) => (
                <motion.div
                  key={sec.id}
                  variants={itemVariants}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg mr-3">
                      {sec.icon}
                    </div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {sec.title}
                    </h2>
                  </div>
                  <nav aria-labelledby={`nav-${sec.id}`}>
                    <ul className="space-y-2">
                      {sec.links.map((l) => (
                        <motion.li 
                          key={l.to}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Link
                            to={l.to}
                            className="group flex items-center rounded-lg px-3 py-3 hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all border border-transparent hover:border-amber-200 dark:hover:border-amber-700"
                          >
                            <span className="mr-3 text-amber-600 dark:text-amber-400">
                              {l.icon}
                            </span>
                            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-amber-300 flex-1">
                              {l.label}
                            </span>
                            <span aria-hidden className="opacity-0 group-hover:opacity-100 transition text-amber-600 dark:text-amber-400">
                              <FiArrowRight />
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              ))}
            </motion.section>
          ) : (
            <motion.div
              key="no-results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-sm"
            >
              <div className="inline-flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                <FiSearch className="text-gray-500 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                No pages found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                We couldn't find any pages matching "{query}". Try adjusting your search or filter.
              </p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("all"); }}
                className="mt-4 px-4 py-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="mb-2">
              For search engine optimization, access our XML sitemap at{" "}
              <code className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-amber-600 dark:text-amber-400 font-mono">
                /sitemap.xml
              </code>
            </p>
            <p>© {new Date().getFullYear()} Ghana Consumer. Empowering Ghanaian shoppers.</p>
          </div>
        </motion.footer>
      </div>
    </main>
  );
};

export default Sitemap;