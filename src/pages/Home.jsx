import { Link } from 'react-router-dom';
import { useEffect, useState, useCallback, useRef } from 'react';
import CallToAction from '../components/CallToAction';
import PostCard from '../components/PostCard';

// Import local images
import ncaImage from '../images/ncaImage.jpeg';
import industryImage from '../images/industryImage.jpeg';
import industryImage1 from '../images/industryImage1.jpeg';
import industryImage2 from '../images/industryImage2.jpeg';
import industryImage3 from '../images/industryImage3.jpeg';
import industryImage4 from '../images/industryImage4.jpeg';
import strengthImage from '../images/strenghtImage.jpeg';
import strengthImage2 from '../images/strenghtImage2.jpeg';
import strengthImage3 from '../images/strenghtImage3.jpeg';
import dstvImage from '../images/dstvImage.jpeg';

const mockPosts = [
  {
    id: '1',
    title: 'NCA and CPA Deepen Dialogue on Consumer Protection',
    excerpt:
      'August 14, 2025 – The Acting Director General of the National Communications Authority (NCA), Rev. Ing. Edmund Yirenkyi Fianko, has met the Chief Executive Officer of the Consumer Protection Agency (CPA)...',
    content: `
      <p class="mb-4">August 14, 2025 – The Acting Director General of the National Communications Authority (NCA), Rev. Ing. Edmund Yirenkyi Fianko, has met the Chief Executive Officer of the Consumer Protection Agency (CPA), Mr. Kofi Kapito, marking their first official meeting since his appointment.</p>
      <p class="mb-4">Rev. Ing. Fianko and Mr. Kofi Kapito discussed issues. The meeting provided an opportunity for the CEO of the CPA to congratulate the Ag. Director General on his appointment and to strengthen collaboration between the two institutions in addressing pressing consumer concerns within the communications sector.</p>
      <p class="mb-4">Their discussions focused on issues such as quality of service and the terms and conditions of telecom products and services. Rev. Ing. Fianko outlined interventions the NCA had implemented, reaffirming the Authority's commitment to safeguarding consumer interests and enhancing service delivery in the communications sector.</p>
      <p class="mb-4">Accompanying Mr. Kapito was Mr. Benjamin Akoto, Head of Complaints at the CPA.</p>
      <p class="mb-4">A group photograph of some NCA Management Staff and the CPA delegation.</p>
    `,
    category: 'Lifestyle',
    image: ncaImage,
    images: [ncaImage],
    slug: 'nca-cpa-dialogue',
    updatedAt: '2023-10-10T14:30:00.000Z',
  },
  {
    id: '2',
    title: 'NCA Meets with Consumer Protection Agency to Address Industry Concerns',
    excerpt:
      'The National Communications Authority (NCA) recently hosted a meeting with the Consumer Protection Agency (CPA) to discuss pressing issues and complaints within the telecoms and communications industry...',
    content: `
      <p class="mb-4">The National Communications Authority (NCA) recently hosted a meeting with the Consumer Protection Agency (CPA) to discuss pressing issues and complaints within the telecoms and communications industry. The CPA, a key stakeholder, represents consumer interests and works to ensure their rights are protected.</p>
      <p class="mb-4">During the meeting, the CPA congratulated Rev. Ing. Edmund Yirenkyi Fianko on his appointment as the Acting Director-General of the NCA. The agency also raised concerns about network congestion and the availability of pre-registered SIM cards on the open market.</p>
      <p class="mb-4">The CPA urged the NCA to resume publishing quarterly Quality of Service (QoS) reports to provide consumers with insights into service provider performance, enabling informed decisions about telecom services.</p>
      <p class="mb-4">The meeting highlights the NCA's commitment to collaborating with stakeholders to address consumer concerns and improve service quality.</p>
    `,
    category: 'Lifestyle',
    image: industryImage,
    images: [industryImage, industryImage1, industryImage2, industryImage3, industryImage4],
    slug: 'nca-cpa-industry-meeting',
    updatedAt: '2023-10-05T09:15:00.000Z',
  },
  {
    id: '3',
    title: 'CONSUMER PROTECTION AGENCY TELLS DSTV/GOtv SUBSCRIBERS TO #SwitchOffTheirDstv/Gotv',
    excerpt:
      'In a bold move, the Consumer Protection Agency (CPA) is urging all DSTV and GOtv subscribers to cancel their subscriptions in protest of the recent price hikes...',
    content: `
      <p class="mb-4">In a bold move, the Consumer Protection Agency (CPA) is urging all DSTV and GOtv subscribers to cancel their subscriptions in protest of recent price hikes, supporting Minister of Communications, Hon. Sam George, in a dispute with Multichoice Ghana over service costs.</p>
      <p class="mb-4">"We believe subscribers have the power to demand better services and fair prices," said the Head of CPA. "By exercising our purchasing power, we can send a strong message to Multichoice Ghana that we will no longer tolerate unfair pricing practices."</p>
      <p class="mb-4">The CPA's research indicates that most DSTV content is repetitive, making current prices unjustifiable. The agency urges subscribers to switch off their DSTV/GOtv subscriptions until Multichoice Ghana reduces prices.</p>
      <h2 class="text-xl font-semibold mt-6 mb-3">Join the movement:</h2>
      <h2 class="text-xl font-semibold mt-6 mb-3">#SwitchOffYourDstv/Gotv and demand fair prices for quality services!</h2>
      <h2 class="text-xl font-semibold mt-6 mb-3">What you can do:</h2>
      <p class="mb-4">- Cancel your DSTV/GOtv subscription if you're not satisfied with the current prices and service quality</p>
      <p class="mb-4">- Join the conversation on social media using #SwitchOffYourDstv/Gotv</p>
      <p class="mb-4">- Demand better services and fair prices from Multichoice Ghana</p>
      <h2 class="text-xl font-semibold mt-6 mb-3">The CPA's message is clear:</h2>
      <p class="mb-4">Consumers have the power to shape the market through their purchasing decisions. Will you join the movement and #SwitchOffYourDstv/Gotv?</p>
    `,
    category: 'Technology',
    image: dstvImage,
    images: [dstvImage],
    slug: 'cpa-dstv-protest',
    updatedAt: '2023-09-28T16:45:00.000Z',
  },
  {
    id: '4',
    title: 'Consumer Protection Agency Strengthens Ties with FDA',
    excerpt:
      'The CEO of the Consumer Protection Agency, Mr. Kofi Owusu Hene (popularly known as Kofi Kapito), paid a courtesy call on the FDA to discuss collaborative strategies...',
    content: `
      <p class="mb-4">In a bid to enhance consumer safety and well-being, the Chief Executive Officer of the Consumer Protection Agency (CPA), Mr. Kofi Owusu Hene (popularly known as Kofi Kapito), paid a courtesy call on the Food and Drugs Authority (FDA). The meeting aimed to explore collaborative strategies to protect the health and safety of Ghanaians.</p>
      <p class="mb-4">During the visit, Mr. Kofi Kapito and FDA officials discussed ways to intensify efforts in ensuring consumers have access to safe and quality products. The CPA and FDA are committed to working together to safeguard Ghanaian consumer interests and promote a healthier, safer marketplace.</p>
      <p class="mb-4">This development is expected to bolster the agencies' ongoing efforts to protect consumers from substandard products and services, contributing to the well-being of the Ghanaian populace.</p>
    `,
    category: 'Lifestyle',
    image: strengthImage,
    images: [strengthImage, strengthImage2, strengthImage3],
    slug: 'cpa-fda-collaboration',
    updatedAt: '2023-10-05T09:15:00.000Z',
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  useEffect(() => {
    // Load mock data (replace with API call in production)
    setPosts(mockPosts);
  }, []);

  useEffect(() => {
    // Manage body overflow for modal
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = useCallback((post) => {
    setSelectedPost(post);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedPost?.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedPost.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [selectedPost]);

  const prevImage = useCallback(() => {
    if (selectedPost?.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedPost.images.length - 1 : prevIndex - 1
      );
    }
  }, [selectedPost]);

  const selectImage = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === modalRef.current) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      } else if (e.key === 'ArrowRight' && isModalOpen && selectedPost?.images.length > 1) {
        nextImage();
      } else if (e.key === 'ArrowLeft' && isModalOpen && selectedPost?.images.length > 1) {
        prevImage();
      }
    },
    [isModalOpen, closeModal, nextImage, prevImage, selectedPost]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Welcome to Ghana Consumer
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Explore stories, insights, and tips crafted for the Ghanaian consumer. From managing
            finances and discovering local business opportunities to staying updated on lifestyle and
            technology trends.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              to="/search"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
              aria-label="View all posts"
            >
              View all posts
              <svg
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Posts Section */}
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Latest Updates for Ghana Consumers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <PostCard post={post} />
                <div className="p-4">
                  <button
                    onClick={() => openModal(post)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read Article
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-100 rounded-lg p-4 dark:bg-slate-700 mt-8">
            <CallToAction />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/search"
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-lg transition-colors"
              aria-label="View all posts"
            >
              View all posts
              <svg
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
          ref={modalRef}
          onClick={handleOverlayClick}
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
              <h2 id="modal-title" className="text-2xl font-bold text-gray-900 pr-4">
                {selectedPost.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 p-6">
              {/* Image Carousel */}
              {selectedPost.images?.length > 0 && (
                <div className="relative mb-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={selectedPost.images[currentImageIndex]}
                      alt={`${selectedPost.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  {selectedPost.images.length > 1 && (
                    <>
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        aria-label="Previous image"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                        aria-label="Next image"
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      {/* Image Indicators */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedPost.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => selectImage(index)}
                            className={`w-3 h-3 rounded-full ${
                              index === currentImageIndex ? 'bg-teal-500' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex justify-between items-center">
              <span className="text-sm text-gray-600 bg-teal-100 py-1 px-3 rounded-full">
                Category: {selectedPost.category}
              </span>
              <button
                onClick={closeModal}
                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center"
                aria-label="Close article"
              >
                Close Article
                <svg
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;