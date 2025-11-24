import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/blogs")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    Romantic: "bg-accent text-accent-foreground",
    Philosophical: "bg-secondary text-secondary-foreground",
    Inspiring: "bg-primary text-primary-foreground",
    "Daily Blog": "bg-muted text-muted-foreground",
  };

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
      <Navigation />

      <article className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/blogs")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Button>
          </motion.div>

          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-6"
          >
            <Badge
              className={`${categoryColors[post.category]} text-sm px-4 py-1`}
            >
              {post.category}
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col gap-6 mb-12 pb-8 border-b border-border"
          >
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <SocialShare title={post.title} url={window.location.href} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="text-foreground leading-relaxed mb-6 text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Back Button at Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/blogs")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Posts
            </Button>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
