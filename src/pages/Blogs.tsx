import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts, Category } from "@/data/blogPosts";
import { Search } from "lucide-react";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const categories: Category[] = [
    "All",
    "Romantic",
    "Philosophical",
    "Inspiring",
    "Daily Blog",
  ];

  const filteredPosts = blogPosts
    .filter(
      (post) => selectedCategory === "All" || post.category === selectedCategory
    )
    .filter((post) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    });

  return (
    <div
      className="min-h-screen bg-background"
      style={{ scrollBehavior: "smooth" }}
    >
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold">
            Explore <span className="text-primary">My Thoughts</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into a curated collection of stories, reflections, and ideas
            across different themes of life.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search by title, content, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                className="min-w-[120px]"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))
              : filteredPosts.map((post, index) => (
                  <Link to={`/blog/${post.slug}`} key={post.id}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <BlogCard
                        title={post.title}
                        excerpt={post.excerpt}
                        category={post.category}
                        date={post.date}
                        readTime={post.readTime}
                      />
                    </motion.div>
                  </Link>
                ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Blogs;
