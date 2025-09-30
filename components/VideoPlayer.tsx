interface VideoPlayerProps {
  src: string;
  title: string;
  description?: string;
}

export default function VideoPlayer({ src, title, description }: VideoPlayerProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-video bg-gray-900">
        <video
          controls
          className="w-full h-full"
          poster="/images/video-placeholder.jpg"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}