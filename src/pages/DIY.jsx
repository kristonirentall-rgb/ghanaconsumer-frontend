import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, FiTool, FiSmartphone, FiCoffee, 
  FiScissors, FiDroplet, FiSettings, FiBookOpen,
  FiSearch, FiFilter, FiClock, FiUser,
  FiHeart, FiBookmark, FiShare2, FiArrowRight
} from "react-icons/fi";

const DIY = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const categories = [
    {
      id: "home",
      title: "Home Repairs & Maintenance",
      icon: <FiHome className="text-amber-600" />,
      color: "bg-amber-50 border-amber-200",
      guides: [
        { 
          title: "Fixing a Leaking Tap Ghana-Style", 
          description: "Learn how to fix common tap leaks using locally available materials",
          duration: "30 mins",
          difficulty: "Beginner",
          likes: 124,
          saved: 56
        },
        { 
          title: "Replacing Broken Window Screens", 
          description: "Keep mosquitoes out with this simple screen replacement guide",
          duration: "45 mins",
          difficulty: "Intermediate",
          likes: 89,
          saved: 43
        },
        { 
          title: "Installing Energy-Saving Lights", 
          description: "Reduce your electricity bill with proper LED lighting installation",
          duration: "1 hour",
          difficulty: "Beginner",
          likes: 203,
          saved: 98
        }
      ]
    },
    {
      id: "electronics",
      title: "Electronics & Gadgets",
      icon: <FiSmartphone className="text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      guides: [
        { 
          title: "Replacing Phone Battery Safely", 
          description: "Extend your phone's life with this battery replacement tutorial",
          duration: "45 mins",
          difficulty: "Intermediate",
          likes: 167,
          saved: 72
        },
        { 
          title: "Cleaning Laptop Fan for Better Performance", 
          description: "Prevent overheating with proper laptop maintenance",
          duration: "30 mins",
          difficulty: "Beginner",
          likes: 95,
          saved: 38
        },
        { 
          title: "Setting Up Solar Phone Charger", 
          description: "Harness Ghana's sunshine for mobile charging",
          duration: "1 hour",
          difficulty: "Intermediate",
          likes: 145,
          saved: 67
        }
      ]
    },
    {
      id: "crafts",
      title: "Ghanaian Crafts & Creativity",
      icon: <FiScissors className="text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      guides: [
        { 
          title: "Creating Kente-Inspired Wall Art", 
          description: "Traditional patterns with modern materials",
          duration: "2 hours",
          difficulty: "Intermediate",
          likes: 212,
          saved: 104
        },
        { 
          title: "Making Shea Butter Candles", 
          description: "Natural candles using local shea butter",
          duration: "1.5 hours",
          difficulty: "Beginner",
          likes: 178,
          saved: 89
        },
        { 
          title: "Adinkra Symbol Stamping Techniques", 
          description: "Create beautiful fabrics with traditional symbols",
          duration: "1 hour",
          difficulty: "Beginner",
          likes: 156,
          saved: 76
        }
      ]
    },
    {
      id: "cooking",
      title: "Ghanaian Cooking & Kitchen Hacks",
      icon: <FiCoffee className="text-red-600" />,
      color: "bg-red-50 border-red-200",
      guides: [
        { 
          title: "Making Natural Fruit Juices", 
          description: "Preserve seasonal fruits as delicious drinks",
          duration: "45 mins",
          difficulty: "Beginner",
          likes: 245,
          saved: 123
        },
        { 
          title: "Baking Perfect Ghanaian Bread", 
          description: "Traditional bread recipe with modern techniques",
          duration: "2 hours",
          difficulty: "Intermediate",
          likes: 189,
          saved: 94
        },
        { 
          title: "Preserving Vegetables for Off-Season", 
          description: "Make your harvest last longer with these methods",
          duration: "1 hour",
          difficulty: "Beginner",
          likes: 134,
          saved: 67
        }
      ]
    },
    {
      id: "fashion",
      title: "Fashion & Textiles",
      icon: <FiBookmark className="text-pink-600" />,
      color: "bg-pink-50 border-pink-200",
      guides: [
        { 
          title: "Simple Sewing Fixes for Traditional Wear", 
          description: "Repair and maintain your favorite Ghanaian outfits",
          duration: "30 mins",
          difficulty: "Beginner",
          likes: 112,
          saved: 54
        },
        { 
          title: "Creating Modern Accessories with Local Beads", 
          description: "Contemporary designs using traditional beads",
          duration: "1.5 hours",
          difficulty: "Intermediate",
          likes: 167,
          saved: 82
        }
      ]
    },
    {
      id: "garden",
      title: "Gardening & Urban Farming",
      icon: <FiDroplet className="text-green-600" />,
      color: "bg-green-50 border-green-200",
      guides: [
        { 
          title: "Container Gardening in Small Spaces", 
          description: "Grow food even in urban apartments",
          duration: "1 hour",
          difficulty: "Beginner",
          likes: 198,
          saved: 102
        },
        { 
          title: "Composting Kitchen Waste", 
          description: "Turn food scraps into rich fertilizer",
          duration: "30 mins",
          difficulty: "Beginner",
          likes: 176,
          saved: 88
        }
      ]
    }
  ];

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800"
  };

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
            <FiTool className="text-white text-2xl" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-green-600 to-red-600">
            Ghana Consumer DIY Guides
          </h1>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Step-by-step tutorials to help you save money, learn practical skills, and embrace the DIY spirit with Ghanaian ingenuity
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
              <label htmlFor="search" className="sr-only">Search DIY guides</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="search"
                  type="text"
                  placeholder="Search for DIY guides, techniques, or materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <label htmlFor="filter" className="sr-only">Filter by category</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiFilter className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="filter"
                  value={activeFilter}
                  onChange={(e) => setActiveFilter(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-2xl shadow-sm overflow-hidden ${category.color}`}
            >
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-gray-800 hover:bg-opacity-50 transition-colors"
              >
                <div className="flex items-center">
                  <span className="mr-3">{category.icon}</span>
                  <span className="text-lg">{category.title}</span>
                  <span className="ml-3 text-sm font-normal text-gray-500 bg-white px-2 py-1 rounded-full">
                    {category.guides.length} guides
                  </span>
                </div>
                <span className="text-xl">
                  {openCategory === category.id ? "−" : "+"}
                </span>
              </button>
              
              <AnimatePresence>
                {openCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {category.guides.map((guide, guideIndex) => (
                        <motion.div
                          key={guideIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: guideIndex * 0.1 }}
                          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <h3 className="font-semibold text-gray-800 mb-2">{guide.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                            <div className="flex items-center">
                              <FiClock className="mr-1" />
                              <span>{guide.duration}</span>
                            </div>
                            <span className={`px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
                              {guide.difficulty}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-4">
                              <button className="flex items-center text-gray-500 hover:text-amber-600 transition-colors">
                                <FiHeart className="mr-1" />
                                <span>{guide.likes}</span>
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-amber-600 transition-colors">
                                <FiBookmark className="mr-1" />
                                <span>{guide.saved}</span>
                              </button>
                              <button className="flex items-center text-gray-500 hover:text-amber-600 transition-colors">
                                <FiShare2 className="mr-1" />
                              </button>
                            </div>
                            <button className="text-amber-600 hover:text-amber-700 font-medium flex items-center">
                              View Guide <FiArrowRight className="ml-1" />
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Share Your DIY Knowledge</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Have a great DIY idea or solution that could help other Ghanaians? Share your expertise with our community.
          </p>
          <button className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Submit Your Guide
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default DIY;