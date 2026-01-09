import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Section */}
          <div className="relative animate-slideInLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cinematic-red/30 to-transparent rounded-lg transform rotate-3 scale-105" />
              <div className="relative overflow-hidden rounded-lg border border-cinematic-red/20">
                <img 
                  // src={profilePhoto} 
                  alt="Thamizh Anban" 
                  className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black/80 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Angular accent */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cinematic-red transform rotate-45 opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-cinematic-red-dark transform rotate-45 opacity-30" />
          </div>

          {/* Content Section */}
          <div className="animate-fadeInUp space-y-8">
            <div>
              <h2 className="text-cinematic-red font-bold text-lg tracking-wider mb-4">
                ABOUT ME
              </h2>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                CREATING DIGITAL
                <br />
                <span className="bg-gradient-to-r from-cinematic-red to-cinematic-red-glow bg-clip-text text-transparent">
                  EXPERIENCES
                </span>
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer  crafting 
                immersive digital experiences. My approach combines technical precision with 
                creative vision to deliver solutions that don't just function—they inspire.
              </p>
              <p>
                Specializing in modern web technologies, I transform complex ideas into 
                elegant, user-centered applications. From concept to deployment, I ensure 
                every project tells a compelling story through code.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest in tech innovation, 
                or perfecting my craft in UI/UX design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-cinematic-gray/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-cinematic-red mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cinematic-red mb-2">1</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Year</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-cinematic-red mb-2">30+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Clients</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-1/4 h-64 bg-gradient-to-l from-cinematic-red/5 to-transparent section-angular" />
    </section>
  );
};

export default About;