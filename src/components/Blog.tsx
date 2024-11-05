import React, { useState, useEffect, forwardRef } from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import BlogPostModal from './blog/BlogPostModal';
import BlogHeader from './blog/BlogHeader';
import FeaturedPost from './blog/FeaturedPost';
import BlogSlider from './blog/BlogSlider';
import BlogGrid from './blog/BlogGrid';
import BlogCategories from './blog/BlogCategories';
import BlogNewsletter from './blog/BlogNewsletter';
import { TranslationStrings } from '../i18n/types';
import { blogPosts } from '../data/blogPosts';

interface BlogProps {
  translations: TranslationStrings;
  initialSelectedPost?: number | null;
  onPostSelect?: (index: number | null) => void;
}

const Blog = forwardRef<HTMLElement, BlogProps>(({ translations, initialSelectedPost = null, onPostSelect }, ref) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<number | null>(initialSelectedPost);
  const [currentPage, setCurrentPage] = useState(1);
  const [featuredPostIndex, setFeaturedPostIndex] = useState(0);
  const postsPerPage = 6;

  // Handle post selection
  const handlePostSelect = (index: number) => {
    setSelectedPost(index);
    if (onPostSelect) {
      onPostSelect(index);
    }
  };

  // Handle post modal close
  const handleClosePost = () => {
    setSelectedPost(null);
    if (onPostSelect) {
      onPostSelect(null);
    }
  };

  // Rotate featured post every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setFeaturedPostIndex((prev) => (prev + 1) % blogPosts.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  // Extract unique categories
  const categories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = !selectedCategory || post.categories.includes(selectedCategory);
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Get all posts for the slider (all 6 posts)
  const sliderPosts = blogPosts.slice(0, 6);

  // Get the selected blog post
  const selectedBlogPost = selectedPost !== null ? blogPosts[selectedPost] : null;

  return (
    <section ref={ref} id="blog" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-default/80 to-background-light/90 backdrop-blur-sm" />
      
      {/* Featured Post - Full Width */}
      <FeaturedPost 
        post={blogPosts[featuredPostIndex]} 
        translations={translations} 
        onSelect={() => handlePostSelect(featuredPostIndex)} 
      />

      <Container maxWidth="lg" className="relative">
        {/* Section Header */}
        <BlogHeader translations={translations} />

        {/* Categories and Search */}
        <BlogCategories
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          translations={translations}
        />

        {/* Blog Posts Slider */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">{translations.trendingPosts}</h2>
          <BlogSlider 
            posts={sliderPosts} 
            translations={translations} 
            onSelect={handlePostSelect}
          />
        </div>

        {/* Latest Posts Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">{translations.latestPosts}</h2>
          <BlogGrid
            posts={currentPosts}
            translations={translations}
            onSelect={handlePostSelect}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-20">
          <BlogNewsletter translations={translations} />
        </div>

        {/* Blog Post Modal */}
        <BlogPostModal
          isOpen={selectedPost !== null}
          onClose={handleClosePost}
          post={selectedBlogPost}
          translations={translations}
        />
      </Container>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;