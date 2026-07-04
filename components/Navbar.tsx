function Navbar() {
  return (
   

    <nav className="w-full bg-white sticky  shadow-sm z-50 top-0 border-b border-gray-100">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
    {/* logo | links | button go here */}
         <div className="text-lg font-bold text-[#192625]">
          POCAMDE INV
        </div>

        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-[#192625]">Home</a>
          <a href="#" className="hover:text-[#192625]">About</a>
          <a href="#" className="hover:text-[#192625]">Services</a>
          <a href="#" className="hover:text-[#192625]">Contact</a>
        </div>

       <button className="bg-[#D2FD9C] text-[#192625] rounded-[2px] px-6 py-2.5 font-semibold text-sm hover:bg-[#bff96f] transition-all duration-200 shadow-sm">
  Get Started
</button>
  </div>
</nav>
  )
}

export default Navbar