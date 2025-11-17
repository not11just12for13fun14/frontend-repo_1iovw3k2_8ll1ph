function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-gray-800 shadow-sm">
      {label}
    </span>
  )
}

function Skills() {
  const skills = [
    'After Effects',
    'Premiere Pro',
    'Photoshop',
    'ComfyUI',
    'AI Tools',
    'LLM Model Knowledge',
    'Color Grading',
    'Sound Design',
    'Motion Graphics',
  ]

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Core Skills</h2>
          <p className="text-gray-600 max-w-2xl">Tools and domains I use to deliver sharp edits, seamless motion and AI-accelerated workflows.</p>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {skills.map((s) => (
            <SkillBadge key={s} label={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
