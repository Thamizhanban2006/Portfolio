import { Progress } from "@/components/ui/progress";
import { Code, Database, Palette, Rocket, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    //   { name: "Three.js", level: 80 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "REST APIs", level: 95 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 }
    ]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 75 },
      { name: "iOS/Android", level: 70 },
      { name: "PWAs", level: 90 }
    ]
  },
  {
    title: "Design & UX",
    icon: Palette,
    skills: [
      { name: "Figma", level: 85 },
      { name: "UI/UX Design", level: 80 },
      { name: "Prototyping", level: 85 },
      { name: "Design Systems", level: 90 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Rocket,
    skills: [
      { name: "Git/GitHub", level: 95 },
      { name: "CI/CD", level: 85 },
      { name: "Testing", level: 80 },
      { name: "Performance", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-cinematic-red font-bold text-lg tracking-wider mb-4">
            TECHNICAL EXPERTISE
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            SKILLS &
            <br />
            <span className="bg-gradient-to-r from-cinematic-red to-cinematic-red-glow bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cinematic-red to-transparent mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-cinematic p-8 border border-cinematic-red/20 rounded-lg group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-cinematic-red/10 border border-cinematic-red/30 rounded-lg mr-4 group-hover:bg-cinematic-red/20 transition-colors">
                  <category.icon className="h-6 w-6 text-cinematic-red" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-cinematic-gray-light">
                        {skill.name}
                      </span>
                      <span className="text-xs text-cinematic-red font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-cinematic-gray/20"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Angular accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-cinematic-red/20 transform rotate-45 translate-x-4 -translate-y-4" />
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-black text-cinematic-red">5+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-cinematic-red">10+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Libraries</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-cinematic-red">50K+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Lines of Code</div>
          </div>
          {/* <div className="space-y-2">
            <div className="text-4xl font-black text-cinematic-red">24/7</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Learning</div>
          </div> */}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-1/2 h-40 bg-gradient-to-r from-cinematic-red/5 to-transparent section-angular" />
      <div className="absolute top-1/3 right-0 w-1/4 h-32 bg-gradient-to-l from-cinematic-red/5 to-transparent section-angular transform rotate-12" />
    </section>
  );
};

export default Skills;