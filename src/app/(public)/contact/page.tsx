import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import MapSection from "@/components/contact/MapSection";
import NewsLetter from "@/components/NewsLetter";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contact@techfusion.com",
      link: "mailto:contact@techfusion.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      value: "123 Tech Street, Silicon Valley, CA 94043",
      link: "https://maps.google.com",
    },
  ];

  return (
    <div className="">
      <ContactHero />
      <div className="grid lg:grid-cols-3 gap-10 mb-16 container mx-auto px-4 mt-10">
        {contactInfo.map((item, index) => (
          <Card
            key={index}
            className="border shadow-md hover:shadow-lg transition-shadow"
          >
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <a
                href={item.link}
                className="text-muted-foreground hover:text-primary transition-colors"
                target={item.title === "Address" ? "_blank" : undefined}
                rel={
                  item.title === "Address" ? "noopener noreferrer" : undefined
                }
              >
                {item.value}
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
      <ContactSection />
      <MapSection />
      <NewsLetter />
    </div>
  );
}
