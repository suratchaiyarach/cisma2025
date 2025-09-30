'use client';

export default function Hero() {
  return (
    <section className="relative animated-gradient text-white py-32 px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 animated-grid-bg opacity-30"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400/20 rounded-lg rotate-45 float-animation"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 border-2 border-purple-400/20 rounded-full float-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-pink-400/20 rotate-12 float-animation" style={{animationDelay: '4s'}}></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <div className="inline-block mb-6 px-6 py-2 glass-card rounded-full">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">🤖 AI & Innovation Showcase</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up">
          <span className="gradient-text">CISMA</span>
          <br />
          <span className="text-white">Exhibition 2025</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto fade-in-up" style={{animationDelay: '0.2s'}}>
          Insights, Observations, and Improvement Opportunities
        </p>

        <div className="flex justify-center gap-4 mb-12 fade-in-up" style={{animationDelay: '0.4s'}}>
          <div className="glass-card px-6 py-3 rounded-lg">
            <div className="text-cyan-400 text-2xl font-bold">50+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="glass-card px-6 py-3 rounded-lg">
            <div className="text-purple-400 text-2xl font-bold">10+</div>
            <div className="text-gray-400 text-sm">Insights</div>
          </div>
          <div className="glass-card px-6 py-3 rounded-lg">
            <div className="text-pink-400 text-2xl font-bold">2025</div>
            <div className="text-gray-400 text-sm">Future Ready</div>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full glow-effect"></div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0f1e] to-transparent"></div>
    </section>
  );
}