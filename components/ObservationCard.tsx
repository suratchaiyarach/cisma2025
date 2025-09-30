interface ObservationCardProps {
  title: string;
  description: string;
  type: 'observation' | 'improvement';
  icon?: string;
}

export default function ObservationCard({ title, description, type, icon }: ObservationCardProps) {
  const bgColor = type === 'observation'
    ? 'bg-blue-50 border-blue-200'
    : 'bg-green-50 border-green-200';

  const iconColor = type === 'observation' ? 'text-blue-600' : 'text-green-600';
  const titleColor = type === 'observation' ? 'text-blue-900' : 'text-green-900';

  return (
    <div className={`${bgColor} border-2 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow`}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className={`text-4xl ${iconColor} flex-shrink-0`}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className={`text-xl font-bold ${titleColor} mb-3`}>
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}