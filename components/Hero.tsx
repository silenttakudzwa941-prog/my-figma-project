import Image from 'next/image'

function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-5xl font-bold text-[#192625] leading-tight">
            Trustworthy App <br /> Download
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Download our secure POCAMDE app and manage everything in one place. 
            Fast, reliable, and built for you.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-[#D2FD9C] text-[#192625] rounded-[2px] px-8 py-3 font-medium hover:bg-[#bff96f]">
              Download App
            </button>
            <button className="border border-[#192625] text-[#192625] rounded-[2px] px-8 py-3 font-medium hover:bg-gray-100">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Image */}
       <div className="flex justify-center">
  <div className="bg-white p-4 rounded-3xl shadow-2xl">
    <Image 
      src="/nature.jpeg" 
      alt="App Mockup" 
      width={300}
      height={600}
      className="object-contain rounded-2xl"
    />
  </div>
</div>


      </div>
    </section>
  )
}
export default Hero