function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#192625] mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-[#D2FD9C] w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-[#192625]">1</div>
            <h3 className="font-semibold text-[#192625] mt-4">Download App</h3>
            <p className="text-gray-600 text-sm mt-2">Get the app from Play Store or App Store</p>
          </div>
          <div>
            <div className="bg-[#D2FD9C] w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-[#192625]">2</div>
            <h3 className="font-semibold text-[#192625] mt-4">Create Account</h3>
            <p className="text-gray-600 text-sm mt-2">Sign up in less than 2 minutes</p>
          </div>
          <div>
            <div className="bg-[#D2FD9C] w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-[#192625]">3</div>
            <h3 className="font-semibold text-[#192625] mt-4">Start Using</h3>
            <p className="text-gray-600 text-sm mt-2">Send, receive and earn with ease</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HowItWorks