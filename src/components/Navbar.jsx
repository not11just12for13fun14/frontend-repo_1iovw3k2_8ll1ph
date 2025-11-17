import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold tracking-tight">
          <span className="text-black">Adarsh</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">.Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#work" className="hover:text-black">Work</a>
          <a href="#skills" className="hover:text-black">Skills</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-sm hover:opacity-90 transition">
          Let’s Collaborate
        </a>
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
