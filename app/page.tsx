export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            IARAEC
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://opencxms.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition"
            >
              OCF
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            International Association for the Recognition of Alternative Education Credentialing
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-400 font-medium mb-8">
            &ldquo;Talent Beyond the Transcript&rdquo;
          </p>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Creating equitable pathways that validate real-world skills and experience,
            enabling individuals without traditional degrees to access meaningful career opportunities.
          </p>

          {/* Mission Box */}
          <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-slate-700 text-left max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-emerald-400 mb-4">Our Vision</h2>
            <p className="text-slate-300 mb-6">
              A future where talent and competence are recognized beyond the degree,
              and lifelong learning is accessible to all.
            </p>
            <h3 className="text-lg font-semibold text-white mb-3">We believe:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Skills and demonstrated competence should matter more than credentials</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Alternative pathways deserve equal recognition to traditional degrees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Lifelong learners, self-taught professionals, and those with disabilities deserve access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">&#10003;</span>
                <span>Employers benefit from skills-based hiring practices</span>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2">50%+</div>
              <div className="text-slate-400 text-sm">of IBM&apos;s new hires selected on skills, not degrees</div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2">82%</div>
              <div className="text-slate-400 text-sm">of Google Career Certificate grads report positive outcomes</div>
            </div>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-emerald-400 mb-2">44%</div>
              <div className="text-slate-400 text-sm">of job postings now require degrees (down from 51%)</div>
            </div>
          </div>

          {/* Who We Serve */}
          <div className="bg-emerald-900/30 rounded-2xl p-8 border border-emerald-500/30 mb-12 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-white mb-4">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Self-taught professionals
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Veterans transitioning careers
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Individuals with disabilities
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Career changers
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Lifelong learners
              </div>
              <div className="text-slate-300">
                <span className="text-emerald-400">&#8594;</span> Anyone whose talent exceeds their transcript
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-12">
            <p className="text-slate-400 mb-4">Interested in our mission?</p>
            <a
              href="mailto:opencxms@proton.me?subject=IARAEC%20Interest"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Connection to OCF */}
          <div className="text-slate-500 text-sm">
            <p>
              IARAEC is a sister organization to the{" "}
              <a href="https://opencxms.org" className="text-emerald-400 hover:underline">
                Open AI Context Foundation
              </a>
            </p>
            <p className="mt-2">
              Founded by Robert S Briggs II
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-700">
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; 2026 International Association for the Recognition of Alternative Education Credentialing</p>
          <p className="mt-2">&ldquo;Talent Beyond the Transcript&rdquo;</p>
        </div>
      </footer>
    </div>
  );
}
