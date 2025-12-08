import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Section {
    id: string;
    title: string;
    element: Element;
    level: "h2" | "h3";
}

interface TableOfContentsProps {
    contentRef: React.RefObject<HTMLDivElement>;
}

const TableOfContents = ({ contentRef }: TableOfContentsProps) => {
    const [sections, setSections] = useState<Section[]>([]);
    const [activeSection, setActiveSection] = useState<string>("");
    const [isExpanded, setIsExpanded] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const tocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Wait for next frame to ensure DOM is painted
        const timer = setTimeout(() => {
            if (!contentRef.current) return;

            // Get all headings (h2, h3) from the blog content
            const headings = contentRef.current.querySelectorAll('.blog-heading, .blog-subheading');
            if (headings.length < 2) return;

            const extractedSections: Section[] = [];

            headings.forEach((heading, index) => {
                const text = heading.textContent || "";
                const id = `section-${heading.id?.split('-')[1] || index}`;
                const isSubheading = heading.classList.contains('blog-subheading');

                extractedSections.push({
                    id: heading.id || id,
                    title: text,
                    element: heading,
                    level: isSubheading ? "h3" : "h2"
                });
            });

            setSections(extractedSections);
            setIsReady(true);

            // Set up ScrollTrigger for each section
            const triggers: ScrollTrigger[] = [];

            extractedSections.forEach((section) => {
                const trigger = ScrollTrigger.create({
                    trigger: section.element,
                    start: "top 40%",
                    end: "bottom 40%",
                    onEnter: () => setActiveSection(section.id),
                    onEnterBack: () => setActiveSection(section.id),
                });
                triggers.push(trigger);
            });

            // Animate TOC on load
            if (tocRef.current) {
                gsap.fromTo(tocRef.current,
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" }
                );
            }

            return () => {
                triggers.forEach(trigger => trigger.kill());
            };
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
        setIsExpanded(false);
    };

    if (!isReady || sections.length < 2) return null;

    return (
        <>
            {/* Desktop TOC - Fixed sidebar */}
            <div
                ref={tocRef}
                className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40"
            >
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 max-w-[220px] shadow-lg">
                    <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
                        <List className="h-4 w-4" />
                        <span>Contents</span>
                    </div>
                    <nav className="space-y-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    "block w-full text-left text-xs py-1.5 px-2 rounded transition-all duration-300",
                                    "hover:bg-accent/50",
                                    section.level === "h3" && "pl-4",
                                    activeSection === section.id
                                        ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Mobile TOC - Expandable button */}
            <div className="lg:hidden fixed bottom-20 right-4 z-40">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={cn(
                        "bg-primary text-primary-foreground rounded-full p-3 shadow-lg",
                        "transition-transform duration-200 hover:scale-110",
                        isExpanded && "rotate-45"
                    )}
                >
                    <List className="h-5 w-5" />
                </button>

                {isExpanded && (
                    <div className="absolute bottom-14 right-0 bg-card border border-border rounded-lg p-3 w-56 shadow-xl animate-fade-in">
                        <div className="text-sm font-medium mb-2 text-foreground">Contents</div>
                        <nav className="space-y-1 max-h-60 overflow-y-auto">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={cn(
                                        "block w-full text-left text-xs py-1.5 px-2 rounded transition-all",
                                        "hover:bg-accent/50",
                                        section.level === "h3" && "pl-4",
                                        activeSection === section.id
                                            ? "bg-primary/10 text-primary font-medium"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </>
    );
};

export default TableOfContents;