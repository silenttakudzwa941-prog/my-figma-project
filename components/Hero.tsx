import Image from 'next/image';
function Hero() {
  return (
    <section className="bg-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-5xl font-bold text-[#192625] leading-tight">
            POCAMDE App <br /> Download
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Download our secure app and manage everything in one place. 
            Fast, reliable, and built for you.
          </p>

          <div className="flex gap-4 mt-8">
            {/* Green Button */}
            <button className="bg-[#D2FD9C] text-[#192625] rounded-[2px] px-8 py-3 text-sm font-medium h-11 flex items-center">
              Download App
            </button>
            
            {/* Outline Button */}
            <button className="border border-[#192625] text-[#192625] rounded-[2px] px-8 py-3 text-sm font-medium h-11 flex items-center hover:bg-[#192625] hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image */}
        {/* Right: Image */}
<div className="flex justify-center">
  <Image 
    src="/nature.jpeg" 
    alt="App Mockup" 
    width={320}
    height={600}
    className="object-contain"
  />
</div>

      </div>
    </section>
  )
}
export default Hero