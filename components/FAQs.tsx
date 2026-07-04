function FAQ() {
  const faqs = [
    { q: "Is POCAMDE safe to use?", a: "Yes. We use bank-level encryption and 2FA to keep your money and data secure." },
    { q: "How long do withdrawals take?", a: "Instant. You can withdraw your money to your bank anytime, 24/7." },
    { q: "Are there any fees?", a: "Account creation is free. We only charge small fees for specific transactions." },
    { q: "How do I earn interest?", a: "Simply keep a balance in your POCAMDE wallet and we pay you monthly interest." }
  ]

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#192625] mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-[#192625] text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FAQ