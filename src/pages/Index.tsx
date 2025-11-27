import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Palette } from "lucide-react";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import Silk from "@/components/Silk";
import { useState } from "react";

const backgroundPresets = [
  {
    name: "Purple Silk",
    color: "#7B7481",
    speed: 5,
    scale: 1,
    noiseIntensity: 1.5,
    rotation: 0,
  },
  {
    name: "Ocean Wave",
    color: "#4A90E2",
    speed: 3,
    scale: 1.2,
    noiseIntensity: 2,
    rotation: 0.5,
  },
  {
    name: "Sunset Glow",
    color: "#E2774A",
    speed: 7,
    scale: 0.8,
    noiseIntensity: 1,
    rotation: -0.3,
  },
  {
    name: "Forest Dream",
    color: "#5E9B7E",
    speed: 4,
    scale: 1.5,
    noiseIntensity: 1.8,
    rotation: 0.2,
  },
];

const Index = () => {
  const [currentPreset, setCurrentPreset] = useState(0);
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* 3D Silk Background */}
        <Silk
          speed={backgroundPresets[currentPreset].speed}
          scale={backgroundPresets[currentPreset].scale}
          color={backgroundPresets[currentPreset].color}
          noiseIntensity={backgroundPresets[currentPreset].noiseIntensity}
          rotation={backgroundPresets[currentPreset].rotation}
        />

        {/* Background Preset Selector */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-24 right-4 z-20 bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border shadow-lg"
        >
          <div className="flex items-center gap-2 mb-2">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-foreground">
              Background
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {backgroundPresets.map((preset, index) => (
              <button
                key={preset.name}
                onClick={() => setCurrentPreset(index)}
                className={`text-xs px-3 py-1.5 rounded-md transition-all ${
                  currentPreset === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-accent text-foreground"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Welcome to my corner of the internet
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl font-bold leading-tight tracking-tight"
            >
              Where Words Find
              <span className="block text-primary mt-2">Their Purpose</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              A collection of thoughts, musings, and stories that explore the
              beauty of life, love, philosophy, and everything in between.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link to="/blogs">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="group text-lg px-8 py-6">
                    Start Reading
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "100+", label: "Stories Shared" },
              { number: "4", label: "Categories" },
              { number: "∞", label: "Ideas Explored" },
              { number: "1", label: "Passionate Writer" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center space-y-2"
              >
                <div className="font-serif text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
