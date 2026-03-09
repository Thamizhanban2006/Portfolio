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
                  src={profilePhoto}
                  alt="Thamizh Anban" 
                  className="w-full h-[600px] object-cover brightness-[0.82] contrast-125 saturate-[0.78] hover:saturate-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-cinematic-red/20 mix-blend-multiply" />
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
I’m a driven Software Product Engineering student and full-stack developer who loves building real-world, impact-focused applications. From real-time coding battle platforms to offline-first education systems, I enjoy transforming ideas into scalable, production-ready products.
</p><p>
My strength lies in the MERN stack, real-time systems with Socket.IO, authentication flows, API architecture, and deployment pipelines. I focus on writing clean, structured code while ensuring performance, usability, and thoughtful UI design.
</p>
Beyond development, I constantly sharpen my problem-solving skills through DSA, system design thinking, and hands-on project building. I don’t just learn technologies — I implement, test, deploy, and iterate until they’re industry-ready.
<p>
I believe in building products that are not only functional but competitive, scalable, and meaningful.
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