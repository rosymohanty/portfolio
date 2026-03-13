import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building complete MERN stack applications from responsive frontend interfaces to secure backend APIs and database integration.",
  },
  {
    icon: Rocket,
    title: "REST API Development",
    description:
      "Designing and implementing scalable RESTful APIs using Node.js and Express.js with proper authentication and validation.",
  },
  {
    icon: Users,
    title: "Internship Experience",
    description:
      "Worked as a MERN Stack Developer Intern at CodeBeat, gaining real-world experience in full-stack application development.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Growth",
    description:
      "Actively improving backend architecture, database optimization, and deployment strategies using modern tools.",
  },
];

const stats = [
  { number: "1+", label: "Internship Experience" },
  { number: "3+", label: "Full Stack Projects" },
  { number: "10+", label: "Technologies Used" },
  { number: "100%", label: "Dedication to Learning" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building scalable web applications,
              <span className="font-serif italic font-normal text-white">
                {" "}one project at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m a passionate MERN Stack Developer with hands-on experience
                in building full-stack web applications using MongoDB,
                Express.js, React.js, and Node.js. I enjoy transforming ideas
                into scalable and user-friendly digital solutions.
              </p>

              <p>
                During my internship as a MERN Stack Developer, I worked on
                developing RESTful APIs, implementing authentication systems
                using JWT, and designing responsive user interfaces using
                React and Bootstrap.
              </p>

              <p>
                I focus on writing clean, maintainable code and continuously
                improving my backend development, database management, and
                deployment skills using modern cloud platforms.
              </p>
            </div>

            {/* Premium Quote Card */}
            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build secure, scalable, and impactful web
                applications while continuously learning and growing as a
                full-stack developer."
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-5 text-center hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-2xl font-bold text-primary">
                    {item.number}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl hover:scale-105 hover:shadow-[0_0_25px_rgba(32,178,166,0.5)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};