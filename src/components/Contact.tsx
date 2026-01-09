import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fadeInUp">
          <h2 className="text-cinematic-red font-bold text-lg tracking-wider mb-4">
            GET IN TOUCH
          </h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">
            LET'S BUILD
            <br />
            <span className="bg-gradient-to-r from-cinematic-red to-cinematic-red-glow bg-clip-text text-transparent">
              SOMETHING GREAT
            </span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cinematic-red to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let's discuss your next project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12 animate-slideInLeft">
            <div>
              <h4 className="text-2xl font-bold mb-8">Contact Information</h4>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-cinematic-red/10 border border-cinematic-red/30 rounded-lg group-hover:bg-cinematic-red/20 transition-colors">
                    <Mail className="h-6 w-6 text-cinematic-red" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-lg font-semibold">thamizhanban2006@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-cinematic-red/10 border border-cinematic-red/30 rounded-lg group-hover:bg-cinematic-red/20 transition-colors">
                    <Phone className="h-6 w-6 text-cinematic-red" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="text-lg font-semibold">+91 6380610185</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-cinematic-red/10 border border-cinematic-red/30 rounded-lg group-hover:bg-cinematic-red/20 transition-colors">
                    <MapPin className="h-6 w-6 text-cinematic-red" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-lg font-semibold">Chennai, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            {/* <div className="p-6 card-cinematic border border-cinematic-red/20 rounded-lg">
              <h5 className="text-xl font-bold mb-4 text-cinematic-red">Availability</h5>
              <p className="text-muted-foreground mb-4">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-400">Available for new projects</span>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          {/* <div className="animate-fadeInUp">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-cinematic-gray-light">
                    Full Name
                  </Label>
                  <Input 
                    id="name"
                    required
                    className="bg-cinematic-gray/10 border-cinematic-red/30 focus:border-cinematic-red text-white placeholder:text-cinematic-gray-light"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-cinematic-gray-light">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    required
                    className="bg-cinematic-gray/10 border-cinematic-red/30 focus:border-cinematic-red text-white placeholder:text-cinematic-gray-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-semibold text-cinematic-gray-light">
                  Subject
                </Label>
                <Input 
                  id="subject"
                  required
                  className="bg-cinematic-gray/10 border-cinematic-red/30 focus:border-cinematic-red text-white placeholder:text-cinematic-gray-light"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-semibold text-cinematic-gray-light">
                  Message
                </Label>
                <Textarea 
                  id="message"
                  required
                  rows={6}
                  className="bg-cinematic-gray/10 border-cinematic-red/30 focus:border-cinematic-red text-white placeholder:text-cinematic-gray-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full text-lg py-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    SENDING MESSAGE...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          </div> */}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-gradient-to-l from-cinematic-red/5 to-transparent section-angular" />
      <div className="absolute bottom-0 left-0 w-1/4 h-32 bg-gradient-to-r from-cinematic-red/5 to-transparent section-angular transform -rotate-12" />
    </section>
  );
};

export default Contact;