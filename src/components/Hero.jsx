import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-8 py-16">
        <div className="flex flex-col items-start justify-center">
          <span className="inline-flex items-center rounded-full border border-black/10 bg-white/50 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 mb-4">
            Video Editor • Motion Designer • AI-native
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-gray-900">
            Adarsh Thakur
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Crafting cinematic stories</span>
          </h1>
          <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-xl">
            I bring ideas to life with edits that feel fast, clean and emotionally resonant. From YouTube to brand films—designed with motion, powered by AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow hover:opacity-90 transition">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold border border-black/10 bg-white/60 backdrop-blur hover:bg-white transition">
              Book a Project
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/80" />
    </section>
  )
}

export default Hero
