import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const projects = [
  {
    id: 1,
    title: "CODEBUDDY",
    category: "Full Stack Application",
    description:"Built a Q&A web platform (CodeBuddy) with categorized questions and an interactive UI using React. Implemented dynamic question rendering with clean layouts for seamless browsing.",
    // image: project1,
    tech: ["React", "Node.js","Express", "Socket.IO", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  },
{
  id: 2,
  title: "SOCKET SPHERE",
  category: "Web Application",
  description: "An interactive real-time chat application with seamless messaging using Socket.IO. Features include instant communication, room-based chats, and a responsive interface.",
  // image: project2,
  tech: ["React", "Node.js", "Express", "Socket.IO", "MongoDB"],
  liveUrl: "#",
  githubUrl: "#"
},

  {
    id: 3,
    title: "QUANTUM COMMERCE",
    category: "E-commerce Platform",
    description: "A luxury e-commerce platform with advanced product customization, AR try-on features, and seamless payment integration. Built for scalability and performance.",
    // image: project3,
    tech: ["Next.js", "Stripe", "PostgreSQL", "Three.js"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-cinematic-red font-bold text-lg tracking-wider mb-4">
            FEATURED WORK
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            SELECTED
            <br />
            <span className="bg-gradient-to-r from-cinematic-red to-cinematic-red-glow bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cinematic-red to-transparent mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-lg card-cinematic border border-cinematic-red/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/90 via-cinematic-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-4">
                      <Button 
                        size="lg" 
                        className="btn-hero"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-5 w-5 mr-2" />
                        LIVE DEMO
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-black"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="h-5 w-5 mr-2" />
                        CODE
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Angular decoration */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-cinematic-red/20 transform rotate-45" />
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="text-cinematic-red font-bold text-sm tracking-wider mb-2">
                    {project.category}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black mb-4">
                    {project.title}
                  </h4>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 bg-cinematic-gray/20 border border-cinematic-red/30 rounded text-sm font-semibold text-cinematic-red hover:bg-cinematic-red/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="btn-hero"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    VIEW PROJECT
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-cinematic-red text-cinematic-red hover:bg-cinematic-red hover:text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    SOURCE CODE
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-1/3 h-32 bg-gradient-to-r from-cinematic-red/5 to-transparent section-angular transform -rotate-12" />
    </section>
  );
};

export default Projects;