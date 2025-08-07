import { Calendar, Building, Award } from "lucide-react";

export const ExperienceSection = () => {
    const experiences = [
        {
            title: "Senior Frontend Developer",
            company: "Tech Solutions Inc.",
            location: "San Francisco, CA",
            period: "2023 - Present",
            description: [
                "Led development of customer-facing React applications serving 100K+ users",
                "Architected and implemented design system reducing development time by 40%",
                "Mentored junior developers and conducted code reviews",
                "Collaborated with UX team to improve user experience metrics by 30%"
            ],
            technologies: ["React", "TypeScript", "Node.js", "AWS"]
        },
        {
            title: "Full Stack Developer",
            company: "Innovation Labs",
            location: "Austin, TX",
            period: "2021 - 2023",
            description: [
                "Built scalable web applications using modern JavaScript frameworks",
                "Implemented CI/CD pipelines reducing deployment time by 60%",
                "Developed RESTful APIs handling 1M+ requests daily",
                "Optimized database queries improving application performance by 50%"
            ],
            technologies: ["React", "Python", "PostgreSQL", "Docker"]
        },
        {
            title: "Software Engineer Intern",
            company: "StartupXYZ",
            location: "Remote",
            period: "2020 - 2021",
            description: [
                "Contributed to core product features used by thousands of customers",
                "Participated in agile development process and daily standups",
                "Wrote comprehensive unit tests achieving 95% code coverage",
                "Collaborated with cross-functional teams on product roadmap"
            ],
            technologies: ["JavaScript", "Vue.js", "MongoDB", "Express"]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="container max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Building impactful solutions across diverse industries
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-8 border border-primary/10 card-hover"
                        >
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Building className="text-primary" size={20} />
                                        <h3 className="text-xl font-bold text-foreground">
                                            {exp.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-muted-foreground mb-2">
                                        {exp.company}
                                    </p>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        {exp.location}
                                    </p>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Calendar className="text-primary" size={16} />
                                        <span className="text-sm text-muted-foreground">
                                            {exp.period}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 bg-background border border-primary/20 rounded text-xs text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="lg:col-span-2">
                                    <ul className="space-y-3">
                                        {exp.description.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-3 text-muted-foreground"
                                            >
                                                <Award className="text-primary mt-1 flex-shrink-0" size={16} />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};