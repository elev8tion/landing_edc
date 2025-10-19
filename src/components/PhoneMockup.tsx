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
        {/* Phone bezel with realistic metallic frame */}
        <div className="relative rounded-[3rem] p-3 shadow-2xl" style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 25%, #1a1a1a 50%, #0a0a0a 75%, #1a1a1a 100%)',
          boxShadow: `
            0 20px 60px rgba(0, 0, 0, 0.5),
            0 10px 30px rgba(0, 0, 0, 0.3),
            0 5px 15px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5)
          `
        }}>
          {/* Side buttons */}
          <div className="absolute left-0 top-24 w-1 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm" style={{
            boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.5)'
          }}></div>
          <div className="absolute left-0 top-40 w-1 h-16 bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-sm" style={{
            boxShadow: 'inset 1px 0 2px rgba(0,0,0,0.5)'
          }}></div>
          <div className="absolute right-0 top-32 w-1 h-14 bg-gradient-to-b from-gray-700 to-gray-900 rounded-r-sm" style={{
            boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.5)'
          }}></div>

          {/* Screen */}
          <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{
            boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.8)'
          }}>
            {/* Screenshot */}
            <img
              src={image}
              alt={alt}
              className="w-full h-auto relative"
              loading="lazy"
            />

            {/* Notch overlay (appears on top of screenshot) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20 flex items-center justify-center gap-2" style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
            }}>
              {/* Speaker grill */}
              <div className="w-10 h-0.5 bg-gray-800 rounded-full"></div>
              {/* Camera lens */}
              <div className="w-2 h-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full" style={{
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8), 0 0 3px rgba(99, 102, 241, 0.3)'
              }}></div>
            </div>

            {/* Screen glass reflection overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none" style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.05) 100%)',
              mixBlendMode: 'overlay'
            }}></div>

            {/* Subtle edge highlight */}
            <div className="absolute inset-0 rounded-[2.5rem] z-10 pointer-events-none" style={{
              boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}></div>
          </div>
        </div>

        {/* Enhanced ambient glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-indigo/40 to-brand-purple/40 blur-3xl -z-10 scale-110 opacity-60"></div>
      </div>
    </div>
  );
}
