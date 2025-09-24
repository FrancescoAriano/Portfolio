import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "../ui/Section";
import { ContactForm } from "../ui/ContactForm";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { InstagramIcon } from "../icons/InstagramIcon";
import { FacebookIcon } from "../icons/FacebookIcon";

export const ContactSection = () => {
  return (
    <Section id="contact">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        &lt;Get in <span className="text-primary">touch /&gt;</span>
      </h2>
      <p className="mt-4 font-medium text-foreground/75 max-w-2xl mx-auto text-center">
        Hai un progetto in mente o vuoi collaborare? Sentiti libero di
        contattarmi per discuterne, sono sempre aperto a nuove opportunita!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-8 text-left order-2 lg:order-1">
          <h3 className="text-2xl font-bold mb-6">Contact information</h3>
          <div className="space-y-6 justify-center">
            {/* Contact Items */}
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Email</h4>
                <a
                  href="mailto:franci.ariano@gmail.com"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  franci.ariano@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Phone className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Phone</h4>
                <a
                  href="tel:+393392350892"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  +39 3392350892
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Location</h4>
                <a
                  href="https://maps.app.goo.gl/W7ekP77uUnWiLnzd6"
                  target="_blank"
                  className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  Asti, AT, Italy
                </a>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h4 className="text-2xl font-bold mb-6">Connect with me</h4>
            <div className="flex space-x-8 text-foreground">
              {/* Social Icons */}
              <a
                href="https://github.com/FrancescoAriano"
                target="_blank"
                aria-label="Visualizza il profilo su Github"
              >
                <GitHubIcon className="hover:text-primary hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://it.linkedin.com/in/francesco-ariano-5196bb306?trk=people-guest_people_search-card"
                target="_blank"
                aria-label="Visualizza il profilo su Linkedin"
              >
                <LinkedInIcon className="hover:text-primary hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.instagram.com/francescoariano_?igsh=ZDlyM3Q5cnl6eWQ%3D&utm_source=qr"
                target="_blank"
                aria-label="Visualizza il profilo su Instagram"
              >
                <InstagramIcon className="hover:text-primary hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href="https://www.facebook.com/franci.ariano"
                target="_blank"
                aria-label="Visualizza il profilo su Facebook"
              >
                <FacebookIcon className="hover:text-primary hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
};
