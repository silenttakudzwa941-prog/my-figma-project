function Footer() {
  return (
    <footer className="bg-[#192625] text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">POCAMDE</h3>
            <p className="text-gray-400 text-sm">
              Secure wallet and financial services for everyone.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#D2FD9C]">About</a></li>
              <li><a href="#" className="hover:text-[#D2FD9C]">Services</a></li>
              <li><a href="#" className="hover:text-[#D2FD9C]">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#D2FD9C]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#D2FD9C]">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get the App</h4>
            <button className="bg-[#D2FD9C] text-[#192625] rounded-[2px] px-6 py-2 font-medium">
              Download
            </button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2026 POCAMDE. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
export default Footer