interface VideoPlayerProps {
  src: string;
  title: string;
  description?: string;
}

export default function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300 neon-border">
      {/* Video Container */}
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {/* Decorative Corner Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/50"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-400/50"></div>

        <video
          controls
          className="w-full h-full relative z-10"
          poster="/images/video-placeholder.jpg"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        <div className="flex items-start gap-3 mb-3">
          {/* Play Icon Indicator */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-gray-300 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Decorative Element */}
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Ready to play</span>
        </div>
      </div>
    </div>
  );
}