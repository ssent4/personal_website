import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/yourusername",
            label: "GitHub"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com/in/yourprofile",
            label: "LinkedIn"
        },
        {
            icon: Mail,
            href: "mailto:your.email@example.com",
            label: "Email"
        }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-4 bg-card border-t border-primary/10">
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo/Name */}
                    <div className="text-2xl font-bold text-foreground">
                        Your Name
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-background border border-primary/20 rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-colors group"
                                    aria-label={social.label}
                                >
                                    <IconComponent 
                                        className="text-muted-foreground group-hover:text-primary transition-colors" 
                                        size={20} 
                                    />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span>© {currentYear} Made with</span>
                        <Heart className="text-red-500" size={16} fill="currentColor" />
                        <span>by Your Name</span>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                    <p className="text-muted-foreground text-sm">
                        Built with React, Tailwind CSS, and a lot of ☕
                    </p>
                </div>
            </div>
        </footer>
    );
};