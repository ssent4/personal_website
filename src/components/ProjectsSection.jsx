import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
    const projects = [
        {
            title: "HealthCare Management System",
            description: "Comprehensive patient management platform with real-time monitoring and appointment scheduling.",
            technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
            github: "https://github.com/yourusername/healthcare",
            live: "https://healthcare-demo.com"
        },
        {
            title: "Precision Agriculture Platform",
            description: "IoT-enabled farming solution with crop monitoring and yield prediction using machine learning.",
            technologies: ["Python", "React", "MongoDB", "TensorFlow"],
            github: "https://github.com/yourusername/agtech",
            live: "https://agtech-demo.com"
        },
        {
            title: "E-Commerce Analytics Dashboard",
            description: "Advanced analytics platform with real-time sales tracking and customer behavior analysis.",
            technologies: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
            github: "https://github.com/yourusername/analytics",
            live: "https://analytics-demo.com"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4 bg-card/30">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Real-world solutions that make a difference
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 border border-primary/10 card-hover"
                        >
                            <div className="mb-4">
                                <h3 className="text-xl font-bold mb-3 text-foreground">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-background border border-primary/20 rounded-full text-sm text-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    className="flex items-center gap-2 px-4 py-2 bg-background border border-primary/20 rounded-lg hover:border-primary/40 transition-colors text-foreground"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.live}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors cosmic-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};