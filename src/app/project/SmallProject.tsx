import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function SmallProject() {
  const testimonials = [
    {
      quote: "Scooter sharing made simple.",
      name: "Scoot",
      designation: "Mini Project",
      src: "/scootin.png",
    },
    {
      quote:
        "Award-winning custom designs and digital branding solutions,With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
      name: "Designo",
      designation: "Mini Project",
      src: "designo.png",
    },
    {
      quote: "With the search u can find all the users in github",
      name: "Github",
      designation: "Mini Project",
      src: "githubapi.png",
    },
    {
      quote:
        "Group Chat for Everyone Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.",
      name: "Meet",
      designation: "Mini Project",
      src: "meet.png",
    },
    {
      quote: "Here u can find weather in your country or city",
      name: "Weather Api",
      designation: "Mini Project",
      src: "weatherapi.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
