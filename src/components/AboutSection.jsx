import { Code, Database, Globe } from "lucide-react";

export const AboutSection = () => {
    const highlights = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Building end-to-end solutions with modern technologies"
        },
        {
            icon: Database,
            title: "Data Engineering",
            description: "Designing scalable data pipelines and analytics systems"
        },
        {
            icon: Globe,
            title: "Cloud Solutions",
            description: "Deploying and managing applications on cloud platforms"
        }
    ];

    return (
        <section id="about" className="py-20 px-4 bg-card/50">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                        About Me
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Passionate software developer with expertise in healthcare and agriculture technology, 
                        dedicated to creating innovative solutions that make a real-world impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary">
                            Transforming Ideas into Digital Solutions
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            With a strong foundation in computer science and hands-on experience in both healthcare and 
                            agriculture sectors, I specialize in developing robust, scalable applications that solve 
                            real-world problems.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-4">
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                                Problem Solver
                            </span>
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                                Tech Enthusiast
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-gradient-to-br from-primary/20 to-transparent p-8 rounded-2xl border border-primary/20">
                            <div className="text-center space-y-4">
                                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                    <Code className="w-10 h-10 text-primary" />
                                </div>
                                <h4 className="text-xl font-semibold">Clean Code Philosophy</h4>
                                <p className="text-muted-foreground">
                                    Writing maintainable, testable, and scalable code
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => (
                        <div
                            key={index}
                            className="p-6 bg-card rounded-xl border border-primary/10 card-hover group"
                        >
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                                <highlight.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-lg font-semibold mb-2 text-foreground">
                                {highlight.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};