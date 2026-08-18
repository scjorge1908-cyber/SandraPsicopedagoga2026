import React from 'react';

interface SandraAvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  customSrc?: string;
  alt?: string;
}

export const SandraAvatar: React.FC<SandraAvatarProps> = ({
  size = 'md',
  className = '',
  customSrc,
  alt = 'Sandra Regina Moraes dos Santos - Psicopedagoga Clínica',
}) => {
  const sizeClasses = {
    xs: 'w-9 h-9 text-xs',
    sm: 'w-11 h-11 text-sm',
    md: 'w-16 h-16 text-lg',
    lg: 'w-24 h-24 text-2xl',
    xl: 'w-32 h-32 text-3xl',
    hero: 'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 text-4xl',
  };

  // If user provided a custom uploaded data URL / image URL in drawer:
  if (customSrc && customSrc.trim() !== '') {
    // The "hero" variant shows a large, uncropped portrait next to the headline.
    // The source image already has its background removed and a soft alpha
    // gradient baked into its edges, so we deliberately avoid a circular crop,
    // borders or heavy shadows here — that soft edge blends straight into the
    // page background instead of looking like a pasted-on "logo".
    if (size === 'hero') {
      return (
        <div
          className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-[640/903] ${className}`}
        >
          <img
            src={customSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain object-center drop-shadow-xl"
          />
        </div>
      );
    }

    return (
      <div
        className={`relative inline-block rounded-full overflow-hidden shrink-0 border-2 border-[#E5E0D5] bg-[#F2EFE9] shadow-sm ${sizeClasses[size]} ${className}`}
      >
        <img
          src={customSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top"
        />
      </div>
    );
  }

  // High-fidelity Close-up Portrait representation focusing directly on Sandra Regina's face, smile, and Natural Tones branding
  return (
    <div
      className={`relative inline-block rounded-full overflow-hidden shrink-0 border-2 sm:border-3 border-[#E5E0D5] bg-[#F2EFE9] shadow-sm ring-4 ring-[#7E8C69]/10 ${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={alt}
      >
        {/* Soft Warm Neutral Gradient Background */}
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FAF7F2" />
            <stop offset="100%" stopColor="#EAE5DC" />
          </radialGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A3B32" />
            <stop offset="40%" stopColor="#B38B59" />
            <stop offset="70%" stopColor="#C9A874" />
            <stop offset="100%" stopColor="#3B2E26" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F5D0B5" />
            <stop offset="70%" stopColor="#EBBF9E" />
            <stop offset="100%" stopColor="#DFAD8B" />
          </linearGradient>
          <linearGradient id="burgundyLace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7A2234" />
            <stop offset="100%" stopColor="#5E1424" />
          </linearGradient>
        </defs>

        <rect width="200" height="200" fill="url(#bgGrad)" />

        {/* Back Hair Layer */}
        <path
          d="M50 85 C40 120 45 170 58 190 C70 190 78 175 75 140 Z"
          fill="url(#hairGrad)"
        />
        <path
          d="M150 85 C160 120 155 170 142 190 C130 190 122 175 125 140 Z"
          fill="url(#hairGrad)"
        />

        {/* Shoulders & Burgundy Blouse */}
        <path
          d="M35 200 C35 165 70 155 100 155 C130 155 165 165 165 200 Z"
          fill="url(#burgundyLace)"
        />
        {/* Blouse lace neckline */}
        <path
          d="M85 155 Q100 170 115 155 Q100 162 85 155 Z"
          fill="#4A0F1D"
          opacity="0.6"
        />

        {/* Gold Necklace */}
        <path
          d="M93 162 L100 182 L107 162"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="100" cy="183" r="2" fill="#D4AF37" />

        {/* Neck */}
        <path
          d="M86 130 C86 150 114 150 114 130 Z"
          fill="#DFAD8B"
        />

        {/* Face Oval */}
        <ellipse cx="100" cy="98" rx="42" ry="46" fill="url(#skinGrad)" />

        {/* Soft Blush */}
        <ellipse cx="73" cy="108" rx="8" ry="4.5" fill="#E28C8C" opacity="0.35" />
        <ellipse cx="127" cy="108" rx="8" ry="4.5" fill="#E28C8C" opacity="0.35" />

        {/* Eyebrows */}
        <path
          d="M68 80 Q80 75 91 80"
          stroke="#3B2A20"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M109 80 Q120 75 132 80"
          stroke="#3B2A20"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Eyes (Warm Brown, expressive, with eyelashes) */}
        <ellipse cx="79" cy="90" rx="6.5" ry="4.5" fill="#FFFFFF" />
        <circle cx="79" cy="90" r="3.8" fill="#3B2A20" />
        <circle cx="80.5" cy="88.5" r="1.3" fill="#FFFFFF" />
        <path
          d="M71 88 Q79 84 87 88"
          stroke="#2A1E17"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <ellipse cx="121" cy="90" rx="6.5" ry="4.5" fill="#FFFFFF" />
        <circle cx="121" cy="90" r="3.8" fill="#3B2A20" />
        <circle cx="122.5" cy="88.5" r="1.3" fill="#FFFFFF" />
        <path
          d="M113 88 Q121 84 129 88"
          stroke="#2A1E17"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Nose */}
        <path
          d="M100 90 L98 104 Q100 107 104 105"
          stroke="#C89170"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Bright Welcoming Smile & Teeth */}
        <path
          d="M80 114 Q100 134 120 114 Q100 117 80 114 Z"
          fill="#B8546A"
        />
        <path
          d="M84 116 Q100 126 116 116 Q100 118 84 116 Z"
          fill="#FFFFFF"
        />

        {/* Front Hair Strands (Honey highlights & framing) */}
        <path
          d="M58 85 C58 52 82 45 100 45 C122 45 142 55 142 85 C142 110 138 135 140 160 C134 160 130 130 132 100 C132 68 118 56 100 56 C82 56 68 68 68 100 C70 130 66 160 60 160 C62 135 58 110 58 85 Z"
          fill="url(#hairGrad)"
        />
        {/* Highlight strands */}
        <path
          d="M92 48 Q108 55 118 75 Q125 100 128 135"
          stroke="#E0C08D"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M85 52 Q74 65 72 95 Q70 120 68 140"
          stroke="#C9A874"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Subtle Brand Watermark Monogram */}
        <text
          x="100"
          y="194"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          letterSpacing="1"
          opacity="0.8"
        >
          SANDRA REGINA
        </text>
      </svg>
    </div>
  );
};
