function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      text: "POCAMDE made sending and receiving payments so easy. The withdrawal is instant!",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "Freelancer",
      text: "I earn interest on money that just sits in my wallet. This app is a game changer.",
      rating: 5
    },
    {
      name: "Aisha Patel",
      role: "Student",
      text: "The app is so simple to use. Signed up in 2 minutes and started using it immediately.",
      rating: 5
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#192625] mb-4">
          What Our Users Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by thousands of users worldwide
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
              <div className="flex text-[#D2FD9C] mb-4">
                {'★'.repeat(review.rating)}
              </div>
              <p className="text-gray-700 mb-6">{review.text}</p>
              <div>
                <h4 className="font-semibold text-[#192625]">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Testimonials