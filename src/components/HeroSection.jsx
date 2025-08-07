import { ArrowDown, Download, Mail } from "lucide-react";

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-5xl mx-auto text-center z-10">
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <br className="md:hidden" />
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}Siva
                        </span>
                        <span className="text-glow ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}Senthil Kumar
                        </span>
                    </h1>

                    <div className="space-y-4 opacity-0 animate-fade-in-delay-3">
                        <h2 className="text-xl md:text-3xl font-semibold text-primary">
                            Full-Stack Developer & Innovation Catalyst
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Transforming ideas into powerful digital solutions that make a real-world impact. 
                            Specializing in <span className="text-primary font-medium">healthcare technology</span> and 
                            <span className="text-primary font-medium"> precision agriculture</span>, 
                            I build scalable applications that solve complex problems and improve lives.
                        </p>
                    </div>

                    {/* Key Stats */}
                    <div className="flex flex-wrap justify-center gap-8 py-6 opacity-0 animate-fade-in-delay-4">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">3+</div>
                            <div className="text-sm text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
                            <div className="text-sm text-muted-foreground">Projects Delivered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                            <div className="text-sm text-muted-foreground">Users Impacted</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="cosmic-button flex items-center gap-2 text-lg px-8 py-4"
                        >
                            <span>View My Work</span>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
                        >
                            <Mail size={20} />
                            <span>Let's Talk</span>
                        </a>
                        <a
                            href="/resume.pdf"
                            className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#about"
                            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                        >
                            <span className="text-sm">Scroll to explore</span>
                            <ArrowDown 
                                size={20} 
                                className="animate-bounce group-hover:translate-y-1 transition-transform" 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};