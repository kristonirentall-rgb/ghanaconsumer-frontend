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
import controversy from '../images/controversy.jpeg';
import controversy1 from '../images/controversy1.jpeg';
import controversy2 from '../images/controversy2.jpeg';
import ncap from '../images/ncap.jpeg';
import ncap2 from '../images/ncap2.jpeg';

import hmm1 from '../images/hmm1.jpeg';
import hmm2 from '../images/hmm2.jpeg';

import joy1 from '../images/joy1.jpeg';
import dstvImage from '../images/dstvImage.jpeg';

// Import additional images for the slider
import consumerRights from '../images/consumer-rights.JPG';
import marketInsights from '../images/consumer-rights2.JPG';
import protectionUpdates from '../images/consumer-rights3.JPG';
import ghanaMarket from '../images/consumer-rights4.JPG';
import consumerGroup from '../images/consumer-rights5.JPG';

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
    updatedAt: '2025-08-14T14:30:00.000Z',
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
    updatedAt: '2025-08-10T09:15:00.000Z',
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
    updatedAt: '2025-08-05T16:45:00.000Z',
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
    updatedAt: '2025-08-01T09:15:00.000Z',
  },
  {
    id: '5',
    title: 'Goshers and the Star Oil Brouhaha: A Fuel Dispute',
    excerpt:
      'A controversy has erupted between Ghanaian musician Goshers and Star Oil, a prominent fuel station chain, over allegations of fuel dispensing discrepancies. Here is a breakdown of the situation',
    content: `
    <h1>Goshers' Allegations</h1>
      <p class="mb-4">Goshers claimed he was short-changed at a Star Oil fuel station in Anyinase, near Elubo, Ghana. He alleged that he expected to spend about GHS 150 to fill his motorbike but ended up spending GHS 190.</p>
      <h1>Star Oil's Response</h1>
      <p class="mb-4">Star Oil responded to Goshers' allegations, stating that they conducted an investigation into the matter. The investigation included a review of CCTV footage and a 10-litre can test conducted via video call. The test results showed the fuel dispenser was accurately calibrated with measurements of 10.02 L, 10.03 L, and 10.04 L. Star Oil claimed Goshers was unaware of the industry-standard method for verifying pump accuracy.</p>
      <h1>Goshers' Rebuttal</h1>
      <p class="mb-4">Goshers later updated his stance, stating that he had spoken with the National Petroleum Authority (NPA) and appreciated their representative's approach. Star Oil's team contacted him and resolved the matter. However, Goshers criticized one Star Oil representative for unprofessional behavior, specifically for making threats.
.</p>
<h1>Conclusion</h1>
<p>The dispute between Goshers and Star Oil highlights the importance of transparency and customer service in the fuel industry. While Star Oil's investigation suggests their fuel dispensers are accurately calibrated, Goshers' experience raises concerns about customer treatment and communication. The NPA's involvement and Goshers' appreciation for their approach suggest that regulatory bodies can play a crucial role in resolving such disputes.

In a related development, the NPA is working on a Consumer and Public Complaints Procedure Guidelines to standardize how Petroleum Service Providers (PSPs) handle consumer complaints. These guidelines aim to provide a unified framework for resolving grievances and enhancing service delivery. Once finalized, the guidelines will be gazetted and implemented across all PSPs nationwide, promoting transparency, consumer satisfaction, and accountability in Ghana's petroleum downstream industry.

The incident serves as a reminder for fuel stations to prioritize customer satisfaction and for customers to be aware of their rights and industry-standard practices. With the NPA's efforts to develop consumer guidelines, consumers can look forward to improved service delivery and dispute resolution mechanisms.</p>

    `,
    category: 'Lifestyle',
    image: controversy,
    images: [controversy, controversy1, controversy2],
    slug: 'goshers-star-oil-dispute',
    updatedAt: '2025-07-05T09:15:00.000Z',
  },
  {
    id: '6',
    title: 'NCA and Multichoice Ghana To Resolve DSTV Pricing Issue',
    excerpt:
      'Accra, Sept 7 - The National Communications Authority (NCA) has received a response from Multichoice Ghana regarding the companys notice of intention to suspend its authorization and request c ...',
    content: `
      <p class="mb-4">Key Developments:
- Stakeholder Committee Formation: Multichoice Ghana agrees to participate in a Stakeholder Committee to evaluate DSTV pricing in Ghana, as directed by the Minister for Communication, Digital Technology and Innovation.
- Outcome Determination: The outcome of the Stakeholder Committee's work will be determined upon completion.
- Respect for Laws: Multichoice Ghana has confirmed it will respect due process and Ghana's laws.
- First Meeting: The Stakeholder Committee's first meeting is scheduled for Monday, September 8, 2025.</p>

      <p class="mb-4">In a related development, the Consumer Protection Agency (CPA) had earlier called on customers to boycott DSTV and GoTV to pressure Multichoice Ghana to reduce its prices. The CPA's CEO, Kofi Kapito, urged subscribers to disconnect their subscriptions to send a strong message to the company.</p>

      <h1>Background:</h1>
      <p class="mb-4">The Ministry of Communications, Digital Technology and Innovation had given MultiChoice Ghana a 14-day ultimatum to resolve public concerns over the cost of its DSTV services. The Minister, Sam George, rejected MultiChoice's request for a 30-day extension, emphasizing that Ghanaian consumers couldn't continue to bear what many consider unfair charges.</p>
    `,
    category: 'Lifestyle',
    image: ncap,
    images: [ncap,ncap2],
    
    slug: 'nca-multichoice-resolution',
    updatedAt: '2025-09-07T09:15:00.000Z',
  },
  {
    id: '7',
    title: 'CPA SLAMS PURC OVER "UNREALISTIC" TARIFF HIKES',
    excerpt:
      'Accra, december 4- Consumer Protection Agency Demands Withdrawal of Water and Electricity Tariff Increases',
    content: `
      <p class="mb-4">The Consumer Protection Agency (CPA) has expressed shock and disappointment over the recent announcement by the Public Utilities Regulatory Commission (PURC) to increase water and electricity tariffs by 15.92% and 9.82% respectively, effective January 1, 2026.

In a statement, the CPA described the decision as "unrealistic" and questioned the rationale behind passing on the costs of galamsey cleanup to consumers. "It is shocking and bizarre that consumers are expected to bear the cost of addressing a problem caused by illegal mining activities, which is the government's responsibility to regulate," the statement read.

The CPA also criticized PURC for failing to address inefficiencies within utility service providers, citing ECG's overspending and transmission losses as examples. The agency expressed concern over the lack of plans to recover debts owed by state-owned institutions to ECG and Ghana Water, which affects their financial stability.

"We demand that PURC withdraw the announced tariff increases and engage stakeholders to find better solutions to the inefficiencies plating the sector," the CPA stated.

The agency highlighted the plight of consumers who continue to suffer from poor service delivery, including water rationing and lack of access to clean water in major cities.

The CPA has posed key questions to PURC, seeking clarification on how the agency plans to address the challenges facing the sector.

The statement concluded with a warning that consumers will not accept unjustified tariff increases without a comprehensive plan to improve service delivery.

</p>
     <h1>CPA DEMANDS:</h1>
      <p class="mb-4">

•⁠  ⁠Withdrawal of tariff increases
•⁠  ⁠Engagement with stakeholders to address inefficiencies
•⁠  ⁠Plans to recover debts owed by state-owned institutions
•⁠  ⁠Improved service delivery
</p>

      <h1>KEY ISSUES:</h1>
      <p class="mb-4">

•⁠  ⁠Unfair burden on consumers for galamsey cleanup costs
•⁠  ⁠Inefficiencies in utility service providers not addressed
•⁠  ⁠Lack of plans to recover debts owed by state-owned institutions</p>
    `,
    category: 'Lifestyle',
    image: hmm1,
    images: [hmm1,hmm2],
    slug: 'nca-multichoice-resolution',
    updatedAt: '2025-09-07T09:15:00.000Z',
  },
  {
    id: '8',
    title: 'FDA CALL ON BARN ON LEAD-LEAD DADESEN COOKING POTS OVER HEALTH CONCERN',
    excerpt:
      'Accra, december 4- Consumer Protection Agency Demands Withdrawal of Water and Electricity Tariff Increases',
    content: `
      <p class="mb-4">*FDA CALLS FOR BAN ON LEAD-LADEN "DADESEN" COOKING POTS OVER HEALTH CONCERNS*

The Food and Drugs Authority (FDA) is sounding the alarm on locally manufactured cooking pots, known as "Dadesen", due to high levels of lead used in their production. The FDA's Eastern Regional Manager, Mrs. Anita Owusu-Kuffour, revealed this during a stakeholder engagement in Somanya, warning that the lead poses serious health risks, including Parkinson's disease, kidney failure, and cancer.

The FDA's market surveillance found that some local metalworkers add lead to soften metals during production, often unaware of the health implications. Even coated versions are not safe, as the protective layer can wear off, exposing users to heavy metals.

Mrs. Owusu-Kuffour advised the public to switch to high-quality stainless steel cookware, citing its safety and durability. The FDA assures the public of its continued monitoring and engagement with local artisans to ensure compliance with safety standards.

*Dadesen pots may contain lead, posing health risks*
*Switch to stainless steel cookware, FDA advises*
*Coated pots not safe, warns FDA*
</p>
     <h1>CPA DEMANDS:</h1>
      <p class="mb-4">

•⁠  ⁠Withdrawal of tariff increases
•⁠  ⁠Engagement with stakeholders to address inefficiencies
•⁠  ⁠Plans to recover debts owed by state-owned institutions
•⁠  ⁠Improved service delivery
</p>

      <h1>KEY ISSUES:</h1>
      <p class="mb-4">

•⁠  ⁠Unfair burden on consumers for galamsey cleanup costs
•⁠  ⁠Inefficiencies in utility service providers not addressed
•⁠  ⁠Lack of plans to recover debts owed by state-owned institutions</p>
    `,
    category: 'Lifestyle',
    image: joy1,
    images: [joy1],
    slug: 'nca-multichoice-resolution',
    updatedAt: '2025-09-07T09:15:00.000Z',
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const modalRef = useRef(null);
  const sliderRef = useRef(null);
  
  // Slider images data
  const sliderImages = [
    {
      src: consumerRights,
      title: "Protecting Consumer Rights",
      subtitle: "Empowering Ghanaian consumers with knowledge and resources"
    },
    {
      src: marketInsights,
      title: "Market Insights",
      subtitle: "Stay informed about the latest market trends and developments"
    },
    {
      src: protectionUpdates,
      title: "Consumer Protection Updates",
      subtitle: "Latest news on policies and regulations affecting consumers"
    },
    {
      src: ghanaMarket,
      title: "Ghanaian Marketplace",
      subtitle: "Understanding your rights in the local market ecosystem"
    },
    {
      src: consumerGroup,
      title: "Community of Consumers",
      subtitle: "Join thousands of Ghanaiians standing up for their rights"
    }
  ];

  useEffect(() => {
    // Sort posts by ID in descending order (higher ID numbers first)
    const sortedPosts = [...mockPosts].sort((a, b) => 
      parseInt(b.id) - parseInt(a.id)
    );
    setPosts(sortedPosts);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Manual navigation for slider
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

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

  // Get the latest post for the hero section
  const latestPost = posts.length > 0 ? posts[0] : null;
  const otherPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header with Slider */}
      <header className="relative h-screen max-h-[800px] text-white overflow-hidden">
        {/* Slider container */}
        <div 
          ref={sliderRef}
          className="relative w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {sliderImages.map((image, index) => (
            <div 
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000"
              style={{ 
                left: `${index * 100}%`,
                opacity: currentSlide === index ? 1 : 0.7
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/70"></div>
              </div>
              
              {/* Text content for each slide */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-4xl px-4 transform transition-all duration-1000 delay-300"
                  style={{ 
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateY(${currentSlide === index ? '0' : '20px'})`
                  }}
                >
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
                    {image.title}
                  </h1>
                  <p className="text-xl max-w-3xl mx-auto mb-8">
                    {image.subtitle}
                  </p>
                  <div className="mt-10 flex justify-center">
                    <div className="inline-flex rounded-md shadow">
                      <Link
                        to="/search"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-900 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        Explore All Articles
                        <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </header>

      {/* Latest Post Hero Section */}
      {latestPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden h-80 lg:h-auto">
                <img 
                  src={latestPost.image} 
                  alt={latestPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white py-1 px-3 rounded-full text-sm font-medium">
                  {latestPost.category}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{new Date(latestPost.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>Latest Story</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {latestPost.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {latestPost.excerpt}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => openModal(latestPost)}
                    className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center transform hover:-translate-y-1"
                  >
                    Read Full Article
                    <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <Link
                    to="/search"
                    className="border border-teal-600 text-teal-600 hover:bg-teal-50 py-3 px-6 rounded-lg font-medium transition-all duration-300"
                  >
                    View All Stories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Stories Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recent Consumer Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest updates on consumer rights and market developments in Ghana
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white py-1 px-3 rounded-full text-xs font-medium">
                  {post.category}
                </div>
                <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 py-1 px-2 rounded text-xs">
                  {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 h-14">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 h-18">
                  {post.excerpt}
                </p>
                <button
                  onClick={() => openModal(post)}
                  className="text-teal-600 hover:text-teal-700 font-medium flex items-center transition-all duration-300 group-hover:translate-x-1"
                >
                  Read more
                  <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-center text-white shadow-xl">
          <CallToAction />
        </div>

        {/* View All Posts Link */}
        <div className="mt-12 text-center">
          <Link
            to="/search"
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-lg transition-all duration-300 hover:translate-x-1"
          >
            View all consumer stories
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          ref={modalRef}
          onClick={handleOverlayClick}
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 scale-95 animate-in fade-in-90 zoom-in-90">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b sticky top-0 bg-white z-10">
              <div>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                  {selectedPost.category}
                </span>
                <h2 id="modal-title" className="text-2xl font-bold text-gray-900 pr-4 mt-2">
                  {selectedPost.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(selectedPost.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto flex-1 p-6">
              {/* Image Carousel */}
              {selectedPost.images?.length > 0 && (
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={selectedPost.images[currentImageIndex]}
                      alt={`${selectedPost.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-80 object-cover transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                  {selectedPost.images.length > 1 && (
                    <>
                      {/* Navigation Arrows */}
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-700 p-3 rounded-full shadow-md hover:bg-teal-50 transition-all duration-300"
                        aria-label="Previous image"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-teal-700 p-3 rounded-full shadow-md hover:bg-teal-50 transition-all duration-300"
                        aria-label="Next image"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Image Indicators */}
                      <div className="flex justify-center mt-4 space-x-2">
                        {selectedPost.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => selectImage(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentImageIndex ? 'bg-teal-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
              <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50 flex justify-between items-center rounded-b-2xl">
              <span className="text-sm text-gray-600">
                Published on {new Date(selectedPost.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <button
                onClick={closeModal}
                className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-lg font-medium transition-colors flex items-center"
                aria-label="Close article"
              >
                Close Article
                <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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