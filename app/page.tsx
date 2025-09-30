'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import VideoPlayer from '@/components/VideoPlayer';
import ImageGallery from '@/components/ImageGallery';
import ObservationCard from '@/components/ObservationCard';
import exhibitionData from '@/content/exhibition-data.json';

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1e] relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 animated-grid-bg opacity-20 pointer-events-none"></div>

      <Hero />

      {/* Introduction Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="scroll-animate glass-card rounded-2xl p-10 neon-border">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">About This Exhibition</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {exhibitionData.introduction}
              </p>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="scroll-animate text-center mb-12">
          <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
            <span className="text-cyan-400 font-mono text-sm">📹 MEDIA</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Exhibition Videos</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-8">
          {exhibitionData.videos.map((video, index) => (
            <div key={index} className="scroll-animate">
              <VideoPlayer
                src={video.src}
                title={video.title}
                description={video.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <div className="scroll-animate text-center mb-12">
          <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
            <span className="text-purple-400 font-mono text-sm">📸 GALLERY</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Photo Gallery</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
        </div>
        <div className="scroll-animate">
          <ImageGallery images={exhibitionData.images} />
        </div>
      </section>

      {/* Observations Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="scroll-animate text-center mb-12">
            <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
              <span className="text-cyan-400 font-mono text-sm">🔍 INSIGHTS</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-white">
              Key Observations
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              What I discovered at CISMA 2025
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionData.observations.map((observation, index) => (
              <div key={index} className="scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <ObservationCard
                  title={observation.title}
                  description={observation.description}
                  type="observation"
                  icon={observation.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Improvements Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="scroll-animate text-center mb-12">
            <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
              <span className="text-green-400 font-mono text-sm">💡 OPPORTUNITIES</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 text-white">
              Improvement Opportunities
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
              Areas with potential for innovation and enhancement
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionData.improvements.map((improvement, index) => (
              <div key={index} className="scroll-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <ObservationCard
                  title={improvement.title}
                  description={improvement.description}
                  type="improvement"
                  icon={improvement.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 mt-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  CISMA Exhibition 2025
                </h3>
                <p className="text-gray-400">
                  Insights and Observations
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">Powered by</p>
                  <p className="text-white font-semibold">Next.js & AI Design</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700/50 text-center text-gray-500 text-sm">
              © 2025 - Deployed on GitHub Pages
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
