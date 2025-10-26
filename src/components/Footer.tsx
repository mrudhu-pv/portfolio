import { Github, Linkedin, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/mrudhu-pv",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mrudhul-ramachandran-87b189301",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:mrudhulramachandran181@gmail.com",
      label: "Email",
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/917558824371",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="py-12 section-bg border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Mrudhul Ramachandran</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              MERN Stack Developer creating modern web applications with clean code and intuitive interfaces.
            </p>
            
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <span>mrudhulramachandran181@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 7558824371</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Kannur, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg group"
                    aria-label={link.label}
                  >
                    <IconComponent className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <hr className="my-8 border-border" />
        
        <div className="text-center text-muted-foreground">
          <p>&copy; {currentYear} Mrudhul Ramachandran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;