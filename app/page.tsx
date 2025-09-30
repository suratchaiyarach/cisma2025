import Hero from '@/components/Hero';
import VideoPlayer from '@/components/VideoPlayer';
import ImageGallery from '@/components/ImageGallery';
import ObservationCard from '@/components/ObservationCard';
import exhibitionData from '@/content/exhibition-data.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {exhibitionData.introduction}
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Exhibition Videos
        </h2>
        <div className="space-y-8">
          {exhibitionData.videos.map((video, index) => (
            <VideoPlayer
              key={index}
              src={video.src}
              title={video.title}
              description={video.description}
            />
          ))}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Photo Gallery
        </h2>
        <ImageGallery images={exhibitionData.images} />
      </section>

      {/* Observations Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Key Observations
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            What I discovered at CISMA 2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionData.observations.map((observation, index) => (
              <ObservationCard
                key={index}
                title={observation.title}
                description={observation.description}
                type="observation"
                icon={observation.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Improvements Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Improvement Opportunities
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Areas with potential for innovation and enhancement
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exhibitionData.improvements.map((improvement, index) => (
              <ObservationCard
                key={index}
                title={improvement.title}
                description={improvement.description}
                type="improvement"
                icon={improvement.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            CISMA Exhibition 2025 - Insights and Observations
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Presented with Next.js and deployed on GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}
