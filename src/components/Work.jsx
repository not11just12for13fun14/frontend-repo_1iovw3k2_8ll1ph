function WorkCard({ title, tags, thumb }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5">
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img src={thumb} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-xs text-gray-600">{tags}</p>
      </div>
    </div>
  )
}

function Work() {
  const items = [
    { title: 'Kinetic Promo Cut', tags: 'After Effects • Premiere', thumb: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1200&auto=format&fit=crop' },
    { title: 'Brand Teaser', tags: 'Motion Graphics • SFX', thumb: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop' },
    { title: 'AI Concept Short', tags: 'ComfyUI • Gen AI', thumb: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop' },
    { title: 'YT Video Edit', tags: 'Premiere • Color', thumb: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Work</h2>
            <p className="text-gray-600 mt-2">A quick taste of the pace, rhythm and polish I bring to every timeline.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-900">Request a Reel</a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <WorkCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
