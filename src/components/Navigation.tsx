import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Sun, Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useBackgroundPreset, backgroundPresets } from "@/contexts/BackgroundPresetContext";
import { useGalaxy } from "@/contexts/GalaxyContext";

const Navigation = () => {
    const location = useLocation();
    const { currentPreset, setCurrentPreset } = useBackgroundPreset();
    const { galaxyEnabled, toggleGalaxy } = useGalaxy();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const showGalaxyToggle = location.pathname === "/blogs" || location.pathname === "/about";

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-border"
        >
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                    <motion.div whileHover={{ rotate: 15 }} transition={{ duration: 0.2 }}>
                        <BookOpen className="h-6 w-6 text-primary transition-transform" />
                    </motion.div>
                    <span className="font-serif text-lg sm:text-xl font-bold text-foreground">Thoughts & Musings</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                                }`}
                        >
                            Home
                        </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/about"
                            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
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
                                        className={currentPreset === index ? "bg-primary text-primary-foreground" : ""}
                                    >
                                        {preset.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}

                    {/* Galaxy Toggle Button */}
                    {showGalaxyToggle && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={toggleGalaxy}
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${galaxyEnabled ? "text-primary" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            <Sparkles className={`h-4 w-4 ${galaxyEnabled ? "fill-primary" : ""}`} />
                            <span>Galaxy {galaxyEnabled ? "On" : "Off"}</span>
                        </motion.button>
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
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            <Link
                                to="/"
                                onClick={closeMobileMenu}
                                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/" ? "text-primary" : "text-muted-foreground"
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={closeMobileMenu}
                                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/about" ? "text-primary" : "text-muted-foreground"
                                    }`}
                            >
                                About
                            </Link>
                            <Link
                                to="/blogs"
                                onClick={closeMobileMenu}
                                className={`text-base font-medium py-2 transition-colors ${location.pathname === "/blogs" ? "text-primary" : "text-muted-foreground"
                                    }`}
                            >
                                Explore Blogs
                            </Link>

                            {/* Background Preset for Mobile */}
                            {location.pathname === "/" && (
                                <div className="py-2 border-t border-border">
                                    <p className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
                                        <Sun className="h-4 w-4" />
                                        Background
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {backgroundPresets.map((preset, index) => (
                                            <Button
                                                key={preset.name}
                                                variant={currentPreset === index ? "default" : "outline"}
                                                size="sm"
                                                onClick={() => {
                                                    setCurrentPreset(index);
                                                }}
                                            >
                                                {preset.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Galaxy Toggle for Mobile */}
                            {showGalaxyToggle && (
                                <div className="py-2 border-t border-border">
                                    <button
                                        onClick={toggleGalaxy}
                                        className={`flex items-center gap-2 text-base font-medium py-2 transition-colors ${galaxyEnabled ? "text-primary" : "text-muted-foreground"
                                            }`}
                                    >
                                        <Sparkles className={`h-4 w-4 ${galaxyEnabled ? "fill-primary" : ""}`} />
                                        <span>Galaxy {galaxyEnabled ? "On" : "Off"}</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navigation;
