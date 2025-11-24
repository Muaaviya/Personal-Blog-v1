import { Button } from "@/components/ui/button";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url: string;
}

const SocialShare = ({ title, url }: SocialShareProps) => {
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://wa.me/?text=${shareTitle}%20${shareUrl}`,
  };

  const handleShare = (platform: string, link?: string) => {
    if (link) {
      window.open(link, "_blank", "width=600,height=400");
    } else {
      // For Instagram, copy link to clipboard
      navigator.clipboard.writeText(url);
      toast.success("Link copied! Share it on Instagram");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("twitter", shareLinks.twitter)}
          aria-label="Share on Twitter"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <Twitter className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("facebook", shareLinks.facebook)}
          aria-label="Share on Facebook"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <Facebook className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("linkedin", shareLinks.linkedin)}
          aria-label="Share on LinkedIn"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <Linkedin className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("instagram")}
          aria-label="Copy link for Instagram"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <Instagram className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => handleShare("whatsapp", shareLinks.whatsapp)}
          aria-label="Share on WhatsApp"
          className="hover:bg-accent hover:text-accent-foreground"
        >
          <MessageCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;
