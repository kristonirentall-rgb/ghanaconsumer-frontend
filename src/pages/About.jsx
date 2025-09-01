import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Ghana Consumer
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to <span className="font-semibold text-gray-700">Ghana Consumer</span> — 
              your trusted hub for authentic information, product reviews, and consumer 
              advocacy in Ghana. Our goal is to empower everyday Ghanaians with the 
              knowledge they need to make informed decisions in the marketplace.
            </p>

            <p>
              On this platform, you’ll find insights about goods and services, 
              comparisons between local and international brands, and guides on 
              consumer rights in Ghana. We also share updates on regulations, 
              pricing trends, and tips for smart spending. 
            </p>

            <p>
              We strongly believe that an informed consumer is a protected consumer. 
              That’s why we encourage you to engage with our content by sharing 
              your experiences, leaving reviews, and contributing to discussions. 
              Together, we can raise awareness and build a stronger consumer 
              community in Ghana.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}
