export const SkillsSection = () => {
    const skills = [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "AWS", level: 78 }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive toolkit built through years of hands-on experience
                    </p>
                </div>

                <div className="bg-card/50 rounded-2xl p-8 border border-primary/10">
                    <div className="grid md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group p-4 bg-background/50 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                        {skill.name}
                                    </h4>
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {skill.level}%
                                    </span>
                                </div>
                                
                                <div className="w-full bg-border rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    {[
                        { number: "3+", label: "Years Experience" },
                        { number: "12+", label: "Projects Completed" },
                        { number: "10+", label: "Technologies" },
                        { number: "2", label: "Industries" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-card rounded-xl border border-primary/10 card-hover"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                {stat.number}
                            </div>
                            <div className="text-muted-foreground font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};