interface ObservationCardProps {
  title: string;
  description: string;
  type: 'observation' | 'improvement';
  icon?: string;
}

export default function ObservationCard({ title, description, type, icon }: ObservationCardProps) {
  const accentColor = type === 'observation'
    ? 'from-cyan-400 to-blue-500'
    : 'from-green-400 to-emerald-500';

  const iconBg = type === 'observation'
    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20'
    : 'bg-gradient-to-br from-green-500/20 to-emerald-500/20';

  const iconColor = type === 'observation' ? 'text-cyan-400' : 'text-green-400';
  const borderGradient = type === 'observation'
    ? 'before:bg-gradient-to-r before:from-cyan-400 before:to-blue-500'
    : 'before:bg-gradient-to-r before:from-green-400 before:to-emerald-500';

  return (
    <div className={`
      glass-card rounded-xl p-6
      relative overflow-hidden
      group
      hover:scale-[1.02] hover:shadow-2xl
      transition-all duration-300
      before:absolute before:inset-0 before:opacity-0 before:transition-opacity
      hover:before:opacity-10
      ${borderGradient}
    `}>
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor}`}></div>

      <div className="flex items-start gap-4 relative z-10">
        {icon && (
          <div className={`
            ${iconBg} ${iconColor}
            text-4xl
            w-16 h-16
            flex items-center justify-center
            rounded-xl
            flex-shrink-0
            group-hover:scale-110
            transition-transform duration-300
          `}>
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className={`
        absolute -bottom-10 -right-10 w-40 h-40
        bg-gradient-to-br ${accentColor}
        opacity-0 group-hover:opacity-20
        blur-3xl
        transition-opacity duration-500
        rounded-full
      `}></div>
    </div>
  );
}