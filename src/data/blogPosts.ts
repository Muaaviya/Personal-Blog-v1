export type Category = "All" | "Romantic" | "Philosophical" | "Inspiring" | "Daily Blog";

export interface ContentBlock {
  type: "paragraph" | "heading" | "subheading" | "image";
  content?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: ContentBlock[];
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "the-art-of-loving-deeply",
    title: "The Art of Loving Deeply",
    excerpt: "Love is not just a feeling; it's a commitment to see beauty in the ordinary moments we share. Every glance, every touch, every word spoken in tenderness builds a cathedral of memories that time cannot erode.",
    content: [
      { type: "heading", content: "The Essence of Love" },
      { type: "paragraph", content: "Love is not just a feeling; it's a commitment to see beauty in the ordinary moments we share. Every glance, every touch, every word spoken in tenderness builds a cathedral of memories that time cannot erode." },
      { type: "heading", content: "Finding Love in Small Gestures" },
      { type: "paragraph", content: "In the rush of modern life, we often forget that love thrives in the smallest gestures. It's in the morning coffee made just right, the text message sent during a busy day, the hand that reaches out in the darkness. These moments may seem insignificant, but they are the threads that weave the tapestry of a deep, enduring love." },
      { type: "subheading", content: "The Power of Presence" },
      { type: "paragraph", content: "True love requires presence. It asks us to be fully there, not just physically but emotionally and spiritually. To love deeply is to witness another person's life with reverence, to celebrate their joys as if they were our own, and to hold space for their sorrows without trying to fix them." },
      { type: "heading", content: "Embracing Imperfection" },
      { type: "paragraph", content: "The art of loving deeply also means accepting imperfection. Both our own and our partner's. It's understanding that growth is not linear, that some days will be harder than others, and that's okay. Love doesn't demand perfection; it invites authenticity." },
    ],
    category: "Romantic",
    date: "March 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "existentialism-in-modern-times",
    title: "Existentialism in Modern Times",
    excerpt: "In a world dominated by algorithms and artificial intelligence, what does it mean to be authentically human? We explore the essence of existence and the responsibility of freedom in our contemporary digital age.",
    content: [
      { type: "heading", content: "The Digital Age and Human Authenticity" },
      { type: "paragraph", content: "In a world dominated by algorithms and artificial intelligence, what does it mean to be authentically human? We explore the essence of existence and the responsibility of freedom in our contemporary digital age." },
      { type: "heading", content: "Existence Precedes Essence" },
      { type: "paragraph", content: "Existentialism reminds us that existence precedes essence. We are not born with a predetermined purpose; instead, we create our meaning through the choices we make. In an era where AI can predict our preferences and automate our decisions, this philosophy becomes more relevant than ever." },
      { type: "subheading", content: "The Paradox of Connection" },
      { type: "paragraph", content: "The digital age presents us with a paradox. While technology connects us to billions of people, it can also isolate us from authentic human connection. We curate perfect online personas while struggling with the messy reality of being human. Existentialism challenges us to embrace this messiness, to accept our freedom and the anxiety that comes with it." },
      { type: "heading", content: "Condemned to Be Free" },
      { type: "paragraph", content: "Sartre wrote that we are 'condemned to be free.' This freedom is both our greatest gift and our heaviest burden. In a world of infinite choices and curated realities, how do we choose authentically? How do we live in bad faith versus authentic existence?" },
    ],
    category: "Philosophical",
    date: "March 12, 2024",
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "rising-above-the-storm",
    title: "Rising Above the Storm",
    excerpt: "Every setback is a setup for a comeback. Learn how embracing adversity can transform your perspective and unlock potential you never knew existed within you.",
    content: [
      { type: "heading", content: "Setbacks as Setups" },
      { type: "paragraph", content: "Every setback is a setup for a comeback. Learn how embracing adversity can transform your perspective and unlock potential you never knew existed within you." },
      { type: "heading", content: "Life Happens For Us" },
      { type: "paragraph", content: "Life doesn't happen to us; it happens for us. This simple shift in perspective can transform how we experience challenges. When we view obstacles as opportunities for growth rather than barriers to success, we unlock a resilience we never knew we had." },
      { type: "subheading", content: "When the Storm Comes" },
      { type: "paragraph", content: "The storm will come. It's not a matter of if, but when. What defines us is not the absence of struggles but how we rise when we fall. Every person who has achieved something meaningful has faced rejection, failure, and doubt. The difference is they chose to continue." },
      { type: "heading", content: "Unlocking Your Potential" },
      { type: "paragraph", content: "Your potential is not determined by your current circumstances but by your response to them. When you embrace adversity as a teacher rather than an enemy, you begin to see possibilities where others see dead ends. You develop strength in broken places and wisdom in moments of confusion." },
    ],
    category: "Inspiring",
    date: "March 10, 2024",
    readTime: "4 min read",
  },
  {
    id: 4,
    slug: "coffee-and-contemplation",
    title: "Coffee and Contemplation",
    excerpt: "Today's musings over my morning coffee: the simple pleasure of watching steam rise from a cup, the quiet before the world awakens, and finding gratitude in small moments.",
    content: [
      { type: "heading", content: "Morning Rituals" },
      { type: "paragraph", content: "Today's musings over my morning coffee: the simple pleasure of watching steam rise from a cup, the quiet before the world awakens, and finding gratitude in small moments." },
      { type: "heading", content: "The Sacred Hours" },
      { type: "paragraph", content: "There's something sacred about the early morning hours. The world is still asleep, the notifications haven't started flooding in, and it's just you, your thoughts, and a warm cup of coffee. In these quiet moments, I find a kind of meditation." },
      { type: "subheading", content: "Lessons from Steam" },
      { type: "paragraph", content: "Watching the steam rise from my cup, I'm reminded of the Buddhist concept of impermanence. Nothing lasts forever—not the warmth of this coffee, not this peaceful moment, not even our troubles. Everything is in constant flux, and there's a strange comfort in that." },
      { type: "heading", content: "Gratitude in Small Things" },
      { type: "paragraph", content: "Today, I'm grateful for small things. The comfortable chair I'm sitting in. The book waiting to be read. The friend who texted last night. The ability to have this moment of peace before the day begins. Gratitude doesn't have to be about big achievements; sometimes it's about recognizing the everyday magic." },
    ],
    category: "Daily Blog",
    date: "March 8, 2024",
    readTime: "3 min read",
  },
  {
    id: 5,
    slug: "unspoken-promises",
    title: "Unspoken Promises",
    excerpt: "There are promises we make without words—in the way we hold hands, in the silence we share, in the dreams we build together. These are the promises that last forever.",
    content: [
      { type: "heading", content: "Beyond Words" },
      { type: "paragraph", content: "There are promises we make without words—in the way we hold hands, in the silence we share, in the dreams we build together. These are the promises that last forever." },
      { type: "heading", content: "The Power of Unspoken Bonds" },
      { type: "paragraph", content: "Words can be beautiful, but sometimes they're not enough to capture what we truly mean. The unspoken promises we make are often the most powerful—they're the ones we keep not because we said we would, but because they're woven into the fabric of who we are with each other." },
      { type: "subheading", content: "Promise to See You" },
      { type: "paragraph", content: "I promise to see you. Not just to look at you, but to truly see you—your struggles, your triumphs, your fears, your dreams. To witness your life with reverence and to hold space for all that you are and all that you're becoming." },
      { type: "heading", content: "A Safe Harbor" },
      { type: "paragraph", content: "I promise to be your safe harbor. When the world feels too much, when the weight becomes too heavy, I'll be the place where you can rest without explanation or apology. Your pain will not be a burden to me; it will be an honor to carry it with you." },
    ],
    category: "Romantic",
    date: "March 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "the-paradox-of-choice",
    title: "The Paradox of Choice",
    excerpt: "With infinite possibilities at our fingertips, why do we often find ourselves paralyzed? A deep dive into how abundance can lead to anxiety and how limitation can foster creativity.",
    content: [
      { type: "heading", content: "Drowning in Options" },
      { type: "paragraph", content: "With infinite possibilities at our fingertips, why do we often find ourselves paralyzed? A deep dive into how abundance can lead to anxiety and how limitation can foster creativity." },
      { type: "heading", content: "The Age of Unprecedented Choice" },
      { type: "paragraph", content: "We live in an age of unprecedented choice. From streaming services with thousands of shows to dating apps with endless potential matches, we're drowning in options. Yet research shows that too much choice doesn't make us happier—it makes us anxious." },
      { type: "subheading", content: "Barry Schwartz's Insight" },
      { type: "paragraph", content: "Barry Schwartz called this the Paradox of Choice. When we have too many options, we become paralyzed by the fear of making the wrong decision. We spend more time deliberating and end up less satisfied with our choices because we can't help but wonder about the roads not taken." },
      { type: "heading", content: "The Liberation of Constraints" },
      { type: "paragraph", content: "Constraints, paradoxically, can be liberating. When we have fewer options, we make decisions faster and feel more confident about them. Artists often say that limitations breed creativity—having infinite possibilities can be overwhelming, but having specific constraints forces us to innovate within boundaries." },
    ],
    category: "Philosophical",
    date: "March 3, 2024",
    readTime: "7 min read",
  },
  {
    id: 7,
    slug: "your-story-matters",
    title: "Your Story Matters",
    excerpt: "In a sea of billions, your unique narrative has the power to inspire, heal, and transform. Never underestimate the impact of sharing your authentic truth with the world.",
    content: [
      { type: "heading", content: "Your Unique Narrative" },
      { type: "paragraph", content: "In a sea of billions, your unique narrative has the power to inspire, heal, and transform. Never underestimate the impact of sharing your authentic truth with the world." },
      { type: "heading", content: "No One Has Your Story" },
      { type: "paragraph", content: "You might think your story isn't special enough to share. You might believe that someone else has already said what you want to say, done what you want to do, or lived what you've lived. But here's the truth: no one has your exact combination of experiences, perspectives, and insights." },
      { type: "subheading", content: "A Roadmap for Others" },
      { type: "paragraph", content: "Your story—with all its messy chapters, unexpected plot twists, and unresolved questions—is exactly what someone else needs to hear. The struggles you've overcome, the lessons you've learned, the mistakes you've made and survived—these are not just your story; they're a roadmap for someone else who's walking a similar path." },
      { type: "heading", content: "The Courage to Share" },
      { type: "paragraph", content: "Sharing your authentic truth is an act of courage. It means being vulnerable, risking judgment, and showing up as your real self. But in doing so, you give others permission to do the same. You create connection in a world that often feels isolating. You remind people that they're not alone." },
    ],
    category: "Inspiring",
    date: "March 1, 2024",
    readTime: "5 min read",
  },
  {
    id: 8,
    slug: "rainy-day-reflections",
    title: "Rainy Day Reflections",
    excerpt: "There's something therapeutic about rain. Today I sat by the window, watched the droplets race down the glass, and thought about all the ways water teaches us about resilience and flow.",
    content: [
      { type: "heading", content: "The Poetry of Rain" },
      { type: "paragraph", content: "There's something therapeutic about rain. Today I sat by the window, watched the droplets race down the glass, and thought about all the ways water teaches us about resilience and flow." },
      { type: "heading", content: "Finding Beauty in Gray Skies" },
      { type: "paragraph", content: "Rain has always been my favorite weather. While others complain about gray skies, I find myself drawn to the window, mesmerized by the rhythmic pattern of drops hitting the glass. There's a poetry in rain that speaks to something deep within us." },
      { type: "subheading", content: "Water as Teacher" },
      { type: "paragraph", content: "Water is perhaps nature's greatest teacher about resilience. It doesn't fight obstacles; it flows around them. It doesn't resist gravity; it works with it. When blocked, it finds another way. When frozen, it waits patiently for the thaw. This is the kind of resilience we need in our lives—not rigid, fighting against every challenge, but fluid, adaptive, persistent." },
      { type: "heading", content: "Storms Always Pass" },
      { type: "paragraph", content: "As I watch the rain today, I'm reminded that storms pass. The rain that seems endless eventually stops. The clouds that block the sun eventually move. Nothing is permanent, not even our darkest moments. And just like the rain nourishes the earth, our difficult times can nourish our growth if we let them." },
    ],
    category: "Daily Blog",
    date: "February 28, 2024",
    readTime: "4 min read",
  },
];