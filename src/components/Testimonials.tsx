import React, { useRef } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { TranslationStrings } from '../i18n/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, image }) => (
  <Card className="h-full bg-gray-800 flex-shrink-0 w-80 mx-2">
    <CardMedia
      component="img"
      height="140"
      image={image}
      alt={author}
      className="rounded-full w-32 h-32 mx-auto mt-4 object-cover border-4 border-primary"
    />
    <CardContent>
      <Typography variant="body1" className="text-gray-300 mb-4 italic h-24 overflow-hidden">
        "{quote}"
      </Typography>
      <Typography variant="subtitle1" className="text-primary font-semibold">
        {author}
      </Typography>
      <Typography variant="body2" className="text-gray-400">
        {role}
      </Typography>
    </CardContent>
  </Card>
);

interface TestimonialsProps {
  translations: TranslationStrings;
}

const Testimonials: React.FC<TestimonialsProps> = ({ translations }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote: "AIPajti's Manager Mode and voice cloning are game-changers! I can create content in multiple languages using my own voice, and the Manager Mode handles all the complex processing automatically.",
      author: "Julia P.",
      role: "Creative Director",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMUJiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--5dacb296de26ced10dc9c472259395a156009593/Testimonial_1_dw.jpg"
    },
    {
      quote: "The video generation and Manager Mode combination is incredible! We input our requirements, and the AI handles everything from script creation to final video production. It's revolutionized our workflow.",
      author: "Alex T.",
      role: "Content Creator",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMU5iRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6a3b69a24c7c1bcb0632ca1238762ba383d130ad/Testimonial_3_dw.jpg"
    },
    {
      quote: "Using the voice cloning with Manager Mode has transformed our localization process. We can now create authentic-sounding content in multiple languages while maintaining our brand voice.",
      author: "Nora V.",
      role: "International Marketing Manager",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVpiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--55eb1e13711e795f3217654fc591c79ffa4ffcf4/Testimonial_2_dw.jpg"
    },
    {
      quote: "The combination of video generation and voice cloning is unbeatable. We create professional videos with perfect voiceovers in multiple languages - all from a single prompt!",
      author: "Zsófia N.",
      role: "Video Production Director",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVJiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--edb6582a97ac264a34d7e2665782200f6c1d1b4d/Testimonial_6_dw.jpg"
    },
    {
      quote: "Manager Mode's integration with video and voice features is brilliant. One prompt creates our video content, clones voices for different languages, and handles all the complex processing.",
      author: "Attila K.",
      role: "Project Manager",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDViRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--3c4a8f104d86cdbd7657a3f5f7c60132a4b50f1c/Testimonial_8_dw.jpg"
    },
    {
      quote: "The voice cloning quality is outstanding, and when combined with video generation, it's magical. We create multilingual content that feels authentic and engaging.",
      author: "Maria I.",
      role: "Creative Producer",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMVZiRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--719096826b92b708cdcaaba7660a970cc6d8c9df/Testimonial_5_dw.jpg"
    },
    {
      quote: "Manager Mode seamlessly coordinates video creation and voice cloning. It's transformed how we produce content - from ideation to final multilingual videos, everything is automated!",
      author: "Andrei P.",
      role: "Content Strategy Director",
      image: "https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMDliRWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6a20471d39af01a6ebe73c097188edb9a968ed2a/Testimonial_12_dw.jpg"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900 relative">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" component="h2" className="text-primary text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
            {translations.testimonialsTitle}
          </Typography>
          <div className="relative">
            <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="snap-center">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
            <IconButton
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-primary"
              aria-label="scroll left"
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-primary"
              aria-label="scroll right"
            >
              <ChevronRight />
            </IconButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;