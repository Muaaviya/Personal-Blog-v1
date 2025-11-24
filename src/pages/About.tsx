import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  BookOpen,
  Pen,
  Instagram,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import authorProfile from "@/assets/author-profile.jpg";

const About = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/muaaviyaansari007",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/Muaaviya" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muaaviya-ansari-33b66b252/",
    },
    { icon: Mail, label: "Email", href: "muaaviyaansari007@gmail.com" },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Started Writing",
      description:
        "Began my journey with personal journaling and short stories",
    },
    {
      year: "2020",
      title: "First Publication",
      description: "Published my first article on philosophy and modern life",
    },
    {
      year: "2022",
      title: "Growing Community",
      description: "Built a community of readers who resonate with my thoughts",
    },
    {
      year: "2024",
      title: "This Blog",
      description:
        "Launched this space to share deeper reflections and connect",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <Avatar className="w-32 h-32 mx-auto border-4 border-primary/20">
                <AvatarImage src={authorProfile} alt="Author" />
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Writer. Thinker. Dreamer.
            </motion.p>
          </div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="h-6 w-6 text-primary" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    My Story
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Welcome to my corner of the internet. I'm a passionate
                    writer who believes in the power of words to inspire, heal,
                    and transform. Through my writing, I explore the depths of
                    human emotion, the complexities of modern life, and the
                    timeless questions that connect us all.
                  </p>
                  <p>
                    My journey with words began in quiet moments of reflection,
                    journaling thoughts that felt too big to keep inside. What
                    started as personal musings evolved into a calling—to share
                    stories and insights that might resonate with others walking
                    similar paths.
                  </p>
                  <p>
                    Here, you'll find a blend of romantic reflections,
                    philosophical inquiries, inspiring narratives, and glimpses
                    into my daily life. Each piece is crafted with care, hoping
                    to spark something meaningful in you—whether it's a moment
                    of clarity, a smile, or simply the comfort of knowing you're
                    not alone in your thoughts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Writing Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Writing Journey
              </h2>
            </div>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="font-bold text-primary">
                              {milestone.year}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Pen className="h-6 w-6 text-primary" />
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Let's Connect
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              I'd love to hear from you. Follow me on social media or drop me an
              email.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" size="lg" asChild className="gap-2">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
