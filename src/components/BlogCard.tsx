import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, category, date, readTime }: BlogCardProps) => {
  const categoryColors: Record<string, string> = {
    Romantic: "bg-accent text-accent-foreground",
    Philosophical: "bg-secondary text-secondary-foreground",
    Inspiring: "bg-primary text-primary-foreground",
    "Daily Blog": "bg-muted text-muted-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Card className="group hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer">
        <CardHeader className="space-y-3">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Badge className={`${categoryColors[category]} w-fit`}>
              {category}
            </Badge>
          </motion.div>
          <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
        </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
