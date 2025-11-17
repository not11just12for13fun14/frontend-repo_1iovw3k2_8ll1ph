import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Skills />
      <Work />
      <Contact />
      <footer className="py-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Adarsh Thakur — All rights reserved.</p>
          <p className="opacity-80">Available for freelance and collaborations.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
