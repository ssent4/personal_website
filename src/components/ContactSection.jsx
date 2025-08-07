import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "your.email@example.com",
            href: "mailto:your.email@example.com"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "@yourusername",
            href: "https://github.com/yourusername"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "/in/yourprofile",
            href: "https://linkedin.com/in/yourprofile"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "San Francisco, CA",
            href: null
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-card/30">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                        Let's Work Together
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Ready to bring your next project to life? Let's connect and explore the possibilities.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground">
                                Get In Touch
                            </h3>
                            <p className="text-muted-foreground mb-8 leading-relaxed">
                                I'm always interested in new opportunities and exciting projects. 
                                Whether you're a company looking to hire, or you're a fellow developer 
                                wanting to collaborate, I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                const content = (
                                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-primary/10 hover:border-primary/30 transition-colors">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <IconComponent className="text-primary" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                {item.label}
                                            </p>
                                            <p className="text-foreground font-medium">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                );

                                return item.href ? (
                                    <a
                                        key={index}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block card-hover"
                                    >
                                        {content}
                                    </a>
                                ) : (
                                    <div key={index}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card rounded-2xl p-8 border border-primary/10">
                        <h3 className="text-2xl font-bold mb-6 text-foreground">
                            Send a Message
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 text-foreground"
                                    placeholder="Project collaboration"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 text-foreground resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cosmic-button"
                            >
                                <Send size={18} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};