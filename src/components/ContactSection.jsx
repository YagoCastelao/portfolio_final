import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init("tTpNUocwJwuhtIQGD");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuração do EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Yago Castelao",
      };

      await emailjs.send("service_4607px9", "template_8o295lq", templateParams);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Limpar formulário
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error sending message",
        description:
          "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="flex justify-start pl-50 text-2xl font-semibold mb-6 mt-16">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 pl-50">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium text-foreground mb-1">Email</h4>
                  <a
                    href="mailto:yago.castelao@icloud.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    yago.castelao@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium text-foreground mb-1">
                    Phone & Whatsapp
                  </h4>
                  <a
                    href="tel:+34692289484"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    +34 692 289 484
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-medium text-foreground mb-1">Location</h4>
                  <span className="text-muted-foreground text-sm">
                    Valencia, Spain
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 pl-57">
              <h4 className="flex font-medium mb-4 justify-start pl-2">
                {" "}
                Connect With Me
              </h4>
              <div className="flex space-x-4 justify-start">
                <a
                  href="https://www.linkedin.com/in/yagocimacastelao/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/yagocastelau" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/yagocastelao"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a href="https://github.com/YagoCastelao" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-3 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Yago Cima Castelao..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="yago.castelao@icloud.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <div className="flex items-center justify-center pb-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-[200px] flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
