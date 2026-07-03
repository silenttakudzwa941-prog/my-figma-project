export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-black">
          POCAMDE INV
        </div>

        {/* Links */}
        <div className="hidden gap-8 md:flex">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <a href="#" className="text-gray-700 hover:text-black">Services</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </div>

        {/* Button */}
        <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
          Get Started
        </button>
      </div>
    </nav>
  );
}