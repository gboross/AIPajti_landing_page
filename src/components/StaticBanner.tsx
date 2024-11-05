import React from 'react';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', alt: 'OpenAI' },
  { src: 'https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg', alt: 'Google Cloud' },
  { src: 'https://www.gstatic.com/lamda/images/gemini_wordmark_light_v2_262a4aa6d6fab27f02a5.svg', alt: 'Gemini' },
  { src: 'https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png', alt: 'Runway' },
  { src: 'https://luma-api-production.s3.amazonaws.com/favicon-32x32-luma-website.png', alt: 'Luma AI' },
];

const StaticBanner: React.FC = () => {
  return (
    <div className="bg-gray-900 bg-opacity-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto filter brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticBanner;