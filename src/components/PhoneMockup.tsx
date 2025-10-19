interface PhoneMockupProps {
  image: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ image, alt, className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative mx-auto" style={{ width: '280px' }}>
        {/* Phone bezel */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>

            {/* Screenshot */}
            <img
              src={image}
              alt={alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-blue/30 blur-3xl -z-10 scale-110"></div>
      </div>
    </div>
  );
}
