interface PhoneMockupProps {
  image: string;
  alt: string;
  className?: string;
}

export default function PhoneMockup({ image, alt, className = '' }: PhoneMockupProps) {
  return (
    <div className="pb-8">
      <img
        src={image}
        alt={alt}
        className={`w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto block ${className}`}
        style={{ backgroundColor: 'transparent' }}
        loading="lazy"
      />
    </div>
  );
}
