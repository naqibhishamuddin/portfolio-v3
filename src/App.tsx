import { AspectRatio } from "./components/ui/aspect-ratio";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { TooltipProvider } from "./components/ui/tooltip";
import {
  TypographyH3,
  TypographyH4,
  TypographyMuted,
} from "./components/ui/typography";
import ProfilePicture from "@/assets/profile.webp";
import GmailIcon from "./assets/gmail.webp";
import MapIcon from "./assets/map.webp";
import LinkedInLogo from "./assets/linkedin.webp";
import TwitterLogo from "./assets/twitter.webp";
import {
  Chrome,
  TabletSmartphone,
  Layers,
  Sparkles,
  ArrowUpRight,
  LucideProps,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Meteors } from "./components/ui/meteors";
import { GlowingStarsBackgroundCard } from "./components/ui/glowing-stars";

const ProjectCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
  url: string;
}) => {
  return (
    <CardHeader className="cursor-pointer">
      <TypographyH4 className="font-semibold text-lg flex flex-row items-center gap-2">
        {title} <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
      </TypographyH4>
      <TypographyMuted className="text-muted-foreground font-light">
        {description}
      </TypographyMuted>
    </CardHeader>
  );
};

const ExperienceCard = ({
  title,
  company,
  Icon,
  date,
}: {
  title: string;
  company: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  date: string;
}) => {
  return (
    <div className="flex flex-col text-center space-y-3 pt-6 items-center justify-center">
      <Icon className="w-9 h-9 text-gray-800" />
      <div className="flex flex-col space-y-1">
        <TypographyH4 className="text-sm font-semibold">{title}</TypographyH4>
        <TypographyMuted className="text-xs">{company}</TypographyMuted>
        <TypographyMuted className="text-xs font-extralight">
          {date}
        </TypographyMuted>
      </div>
    </div>
  );
};

const EducationCard = ({
  course,
  university,
  date,
}: {
  course: string;
  university: string;
  date: string;
}) => {
  return (
    <CardContent className="space-y-1.5 mt-6">
      <TypographyH4 className="text-sm font-semibold">{course}</TypographyH4>
      <TypographyMuted className="text-xs">{university}</TypographyMuted>
      <TypographyMuted className="text-xs font-extralight">
        {date}
      </TypographyMuted>
    </CardContent>
  );
};

function App() {
  return (
    <TooltipProvider>
      <div className="min-h-screen text-white px-4 py-16 light">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* About Me */}
          <Card className="md:col-span-8 border flex flex-col justify-end">
            <CardHeader className="space-y-6">
              <TypographyH3 className="text-4xl font-black text-neutral-900">
                Naqib Hishamuddin.
              </TypographyH3>
              <TypographyMuted className="text-muted-foreground font-light">
                A full stack developer with a strong focus on frontend
                development, particularly within the React and React Native
                ecosystem. With a solid foundation in Node.js for backend
                solutions, I am dedicated to creating dynamic and responsive web
                applications. My approach is driven by a passion for delivering
                intuitive and seamless user experiences, while constantly
                staying updated with the latest industry trends to bring fresh
                and effective ideas to every project.
              </TypographyMuted>
              <Button className="md:flex md:w-1/2 py-6 gap-2">
                Download Resume
                <ArrowUpRight className="w-4 h-4 text-gray-200" />
              </Button>
            </CardHeader>
          </Card>
          {/** Profile Picture */}
          <div className="md:col-span-4 grid grid-cols-12 gap-4 md:gap-3">
            <Card className="hidden md:flex md:col-span-12 overflow-hidden">
              <AspectRatio ratio={1}>
                <img
                  src={ProfilePicture}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </Card>
            {/* Email */}
            <Card
              onClick={() =>
                (window.location.href = "mailto:hello@naqibhishamuddin.com")
              }
              className="col-span-3 p-0 cursor-pointer mx-auto md:py-0 md:col-span-3  flex flex-col justify-center items-center"
            >
              <img
                src={GmailIcon}
                alt="Gmail Icon"
                className="h-12 w-12 rounded-sm object-cover"
              />
            </Card>

            {/** LinkedIn */}
            <Card
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/naqibhishamuddin/",
                  "_blank"
                )
              }
              className="col-span-3 p-0 cursor-pointer mx-auto md:py-0 md:col-span-3 flex flex-col justify-center items-center"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn Icon"
                className="h-12 w-12 rounded-sm object-cover"
              />
            </Card>

            {/** Twitter */}
            <Card
              onClick={() => window.open("https://x.com/qibbydev", "_blank")}
              className="md:col-span-3 py-6 md:py-0 col-span-3 p-0 cursor-pointer mx-auto flex-col justify-center items-center"
            >
              <img
                src={TwitterLogo}
                alt="Twitter Icon"
                className="h-12 w-12 rounded-sm object-cover"
              />
            </Card>

            {/** Location */}
            <Card
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/KkNAxvCBtM4emXvRA",
                  "_blank"
                )
              }
              className="md:col-span-3 py-6 md:py-0 col-span-3 p-0 cursor-pointer mx-auto flex-col justify-center items-center"
            >
              <img
                src={MapIcon}
                alt="Map Icon"
                className="h-12 w-12 rounded-sm object-cover"
              />
            </Card>
          </div>
          <Card className="md:hidden justify-end flex flex-col bg-primary overflow-hidden">
            <Meteors number={20} />
            <CardHeader className="space-y-2">
              <TypographyH4 className="text-gray-200">Experience.</TypographyH4>
              <TypographyMuted className="text-gray-300">
                Here is a summary of my professional journey, showcasing my
                expertise and contributions across various roles and industries.
              </TypographyMuted>
            </CardHeader>
          </Card>
          <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="md:col-span-6 border">
              <CardContent>
                <ExperienceCard
                  title="Business & Integration Architect Senior Analyst"
                  company="Accenture"
                  date="Mar 2022 - Present"
                  Icon={Chrome}
                />
              </CardContent>
            </Card>
            <Card className="md:col-span-6 border">
              <CardContent>
                <ExperienceCard
                  title="React Native Developer"
                  company="HAUZ Enterprise Sdn. Bhd"
                  date="Nov 2021 - Mar 2022"
                  Icon={TabletSmartphone}
                />
              </CardContent>
            </Card>
            <Card className="md:col-span-6 border">
              <CardContent>
                <ExperienceCard
                  title="Team Lead"
                  company="Lava X Technologies Sdn. Bhd"
                  date="Sept 2021 - Nov 2021"
                  Icon={Sparkles}
                />
              </CardContent>
            </Card>
            <Card className="md:col-span-6 border">
              <CardContent>
                <ExperienceCard
                  title="Full-Stack Developer"
                  company="Lava X Technologies Sdn. Bhd"
                  date="Mar 2021 - Sept 2021"
                  Icon={Layers}
                />
              </CardContent>
            </Card>
          </div>
          <Card className=" hidden md:col-span-5 justify-end md:flex flex-col bg-primary overflow-hidden">
            <Meteors number={20} />
            <CardHeader className="space-y-2">
              <TypographyH4 className="text-gray-200">Experience.</TypographyH4>
              <TypographyMuted className="text-gray-300">
                Encapsulating my professional journey, highlighting expertise
                and impactful contributions across diverse roles and industries.
              </TypographyMuted>
            </CardHeader>
          </Card>
          {/** Projects */}
          <Card className="md:col-span-8 bg-primary flex flex-col justify-end">
            <GlowingStarsBackgroundCard>
              <CardHeader className="max-w-md">
                <TypographyH4 className=" text-gray-200">Project.</TypographyH4>
                <TypographyMuted className="text-gray-300">
                  Explore a curated selection of my impactful projects,
                  showcasing innovative solutions and meticulous craftsmanship
                  across diverse domains and industries. Each project highlights
                  my commitment to excellence and creative problem-solving in
                  software development.
                </TypographyMuted>
              </CardHeader>
            </GlowingStarsBackgroundCard>
          </Card>

          <Card className="md:col-span-4 border">
            <CardHeader className="space-y-3">
              <TypographyH4>Tech Stack.</TypographyH4>
              <div className="flex flex-row flex-wrap items-center gap-2">
                {[
                  "HTML",
                  "CSS",
                  "React",
                  "Next.js",
                  "Nest.js",
                  "Jest",
                  "Typescript",
                  "Javascript",
                  "React Native",
                  "Playwright",
                  "React Testing Library",
                ].map((item) => (
                  <Badge variant="secondary">{item}</Badge>
                ))}
              </div>
            </CardHeader>
          </Card>

          <Card
            className="md:col-span-4 border"
            onClick={() => window.open("https://resitcukai.com", "_blank")}
          >
            <ProjectCard
              title="Resit Cukai"
              description="Simplify receipt storage and organization securely for seamless e-filing and easy access to purchase records."
              url=""
            />
          </Card>
          <Card
            className="md:col-span-4 border"
            onClick={() => window.open("https://www.encreept.com", "_blank")}
          >
            <ProjectCard
              title="Encreept"
              description="A one-click solution for securely hashing plaintext using SHA-256, ensuring data integrity and confidentiality with ease."
              url=""
            />
          </Card>
          <Card
            className="md:col-span-4 border"
            onClick={() =>
              window.open("https://webpee.naqibhishamuddin.com/", "_blank")
            }
          >
            <ProjectCard
              title="Webpee"
              description="Convert images to WebP format for optimized web use, improving performance and reducing file sizes effectively."
              url=""
            />
          </Card>
          <Card
            className="md:col-span-6 border"
            onClick={() => window.open("https://quurls.com", "_blank")}
          >
            <ProjectCard
              title="Quurls"
              description="Quick URL Shortener, efficiently shorten URLs to create compact links, enhancing readability and optimizing space in communications and online sharing."
              url=""
            />
          </Card>
          <Card
            className="md:col-span-6 border"
            onClick={() => window.open("https://nakmasakapa.com", "_blank")}
          >
            <ProjectCard
              title="Nak Masak Apa"
              description="Explore a curated collection of recipes crafted by Khairul Aming, featuring diverse culinary delights for every occasion and palate"
              url=""
            />
          </Card>

          {/** Education */}
          <Card className="md:col-span-4 bg-primary">
            <CardHeader>
              <TypographyH4 className=" text-gray-200">Education.</TypographyH4>
              <TypographyMuted className="text-gray-300">
                Summary of my academic journey, highlighting qualifications and
                areas of specialization.
              </TypographyMuted>
            </CardHeader>
          </Card>

          <Card className="md:col-span-4 border">
            <EducationCard
              course="Bachelor's Degree (Hons.) in Mobile Wireless and Technology"
              university="Management and Science University, Malaysia"
              date="Feb 2018 - May 2021"
            />
          </Card>

          <Card className="md:col-span-4 border">
            <EducationCard
              course="Sijil Tinggi Pelajaran Malaysia"
              university="Setapak High School, Malaysia"
              date="Mar 2016 - Feb 2018"
            />
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default App;

/**
 * TOOS:
 *
 * 1. Awards
 * 2. Research Paper
 * 3. Community (conference)
 */
