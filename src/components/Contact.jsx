function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s cut something great</h2>
        <p className="mt-3 text-gray-600">Ready to move fast? Tell me about your project and timeline—I'll get back within 24 hours.</p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          <a href="mailto:adarsh@example.com" className="rounded-xl border border-black/10 bg-white p-5 hover:shadow-md transition">
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-semibold">adarsh@example.com</p>
          </a>
          <a href="https://cal.com" target="_blank" rel="noreferrer" className="rounded-xl border border-black/10 bg-white p-5 hover:shadow-md transition">
            <p className="text-xs text-gray-500">Book a call</p>
            <p className="font-semibold">cal.com/adarsh</p>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
