import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Resume } from "@/components/site/Resume";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Muhammad Riaz | Full Stack Developer | MERN & Next.js Portfolio";
const description =
  "Portfolio of Muhammad Riaz, a full stack developer building real-time and AI-integrated applications with the MERN stack, Next.js, ASP.NET Core, and Azure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main id="main-content">
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Resume />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
