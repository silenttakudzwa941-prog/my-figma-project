function Features() {
  const features = [
    {
      title: "Fast Withdrawal",
      desc: "Withdraw your money anytime, anywhere. No delays.",
      icon: "⚡"
    },
    {
      title: "E-Wallet",
      desc: "Manage all your transactions in one secure wallet.",
      icon: "💼"
    },
    {
      title: "Earn Interest",
      desc: "Grow your money while it sits safely with us.",
      icon: "%"
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#192625] mb-2">
          Our Offerings
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to manage your money
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div 
              key={i}
              className="bg-[#D2FD9C] rounded-[8px] p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#192625] mb-2">{item.title}</h3>
              <p className="text-[#192625] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Features