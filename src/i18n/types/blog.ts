export interface BlogTranslations {
  [key: string]: {
    // Section Titles
    blogTitle: string;
    blogSubtitle: string;
    featuredPost: string;
    trendingPosts: string;
    latestPosts: string;
    
    // Actions
    readMore: string;
    loadMore: string;
    searchPosts: string;
    
    // Categories
    allPosts: string;
    categories: string;
    
    // Post Meta
    author: string;
    date: string;
    readTime: string;
    share: string;
    
    // Newsletter
    newsletterTitle: string;
    newsletterDescription: string;
    emailPlaceholder: string;
    subscribeButton: string;
    subscriptionSuccess: string;
    
    // Modal
    closeModal: string;
    relatedPosts: string;
    sharePost: string;
  };
}