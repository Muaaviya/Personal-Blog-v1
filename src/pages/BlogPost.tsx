import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import ReadingProgress from "@/components/ReadingProgress";
import SocialShare from "@/components/SocialShare";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

gsap.registerPlugin(ScrollTrigger);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const articleRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    if (!post || !articleRef.current) return;

    const ctx = gsap.context(() => {
      // Header parallax effect
      gsap.to(headerRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: articleRef.current,
          start: "top top",
          end: "30% top",
          scrub: 0.5
        }
      });

      // Content paragraphs scroll animation
      const paragraphs = contentRef.current?.querySelectorAll('.blog-paragraph');
      paragraphs?.forEach((para, index) => {
        gsap.fromTo(para,
          {
            opacity: 0,
            y: 40,
            filter: "blur(4px)"
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: para,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Back button at bottom animation
      gsap.fromTo('.bottom-back-btn',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: '.bottom-back-btn',
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, articleRef);

    return () => ctx.revert();
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
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

      <article ref={articleRef} className="container mx-auto px-4 pt-24 sm:pt-32 pb-12 sm:pb-20 max-w-4xl">
        {/* Header section with parallax */}
        <div ref={headerRef} className="mb-8 sm:mb-12">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/blogs")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blogs
            </Button>
          </div>

          {/* Category Badge */}
          <div className="mb-6">
            <Badge className={`${categoryColors[post.category]} text-sm px-4 py-1`}>
              {post.category}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-col gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-border">
            <div className="flex items-center gap-4 sm:gap-6 text-muted-foreground text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <SocialShare
              title={post.title}
              url={window.location.href}
            />
          </div>
        </div>

        {/* Content with scroll animations */}
        <div ref={contentRef} className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p
              key={index}
              className="blog-paragraph text-foreground leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Back Button at Bottom */}
        <div className="bottom-back-btn mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/blogs")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Posts
          </Button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
