import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Sun } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useBackgroundPreset,
  backgroundPresets,
} from "@/contexts/BackgroundPresetContext";

const Navigation = () => {
  const location = useLocation();
  const { currentPreset, setCurrentPreset } = useBackgroundPreset();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <BookOpen className="h-6 w-6 text-primary transition-transform" />
          </motion.div>
          <span className="font-serif text-xl font-bold text-foreground">
            Thoughts & Musings
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              About
            </Link>
          </motion.div>

          {/* Background Preset Dropdown */}
          {location.pathname === "/" && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Sun className="h-4 w-4" />
                  <span>Background</span>
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-primary" />
                  Background
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {backgroundPresets.map((preset, index) => (
                  <DropdownMenuItem
                    key={preset.name}
                    onClick={() => setCurrentPreset(index)}
                    className={
                      currentPreset === index
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {preset.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <Link to="/blogs">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={location.pathname === "/blogs" ? "default" : "outline"}
                size="sm"
              >
                Explore Blogs
              </Button>
            </motion.div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
