import { Section } from "../ui/Section";
import { techColors } from "../../data/techColors";

const TechBadge = ({ tech }) => {
  return (
    <span
      className="bg-primary/20 font-medium py-1.5 px-4 rounded-full transition-all duration-300"
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = tech.color;
        e.currentTarget.style.boxShadow = `0 0 10px ${tech.color}80`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {tech.name}
    </span>
  );
};

export const SkillSection = () => {
  const frontendSkills = [
    { name: "React", color: techColors.React },
    { name: "TailwindCSS", color: techColors.TailwindCSS },
    { name: "Bootstrap", color: techColors.Bootstrap },
    { name: "Handlebars", color: techColors.Handlebars },
  ];
  const backendSkills = [
    { name: "SpringBoot", color: techColors.SpringBoot },
    { name: "NodeJS", color: techColors.NodeJS },
    { name: "MongoDB", color: techColors.MongoDB },
    { name: "PostgreSQL", color: techColors.PostgreSQL },
  ];
  const languageSkills = [
    { name: "Java", color: techColors.Java },
    { name: "C", color: techColors.C },
    { name: "C++", color: techColors["C++"] },
    { name: "Python", color: techColors.Python },
    { name: "HTML", color: techColors.HTML },
    { name: "CSS", color: techColors.CSS },
    { name: "JavaScript", color: techColors.JavaScript },
  ];

  return (
    <Section id="skills">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        My <span className="text-primary">skills</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 text-left">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <div className="text-3xl lg:text-4xl font-bold mb-4 flex items-center">
              <span className="w-8 h-8 mr-4 inline-block text-[#61DAFB]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg>
              </span>
              <h3>Frontend</h3>
            </div>
            <p className="text-foreground/80 font-medium mb-6">
              Utilizzo{" "}
              <span className="font-bold text-foreground">
                HTML, CSS e JavaScript
              </span>{" "}
              per sviluppare strutture solide e dinamiche. Sfrutto{" "}
              <span className="font-bold text-foreground">React</span> per
              applicazioni interattive e performanti, affiancandolo a{" "}
              <span className="font-bold text-foreground">
                TailwindCSS e Bootstrap
              </span>{" "}
              per un design efficiente e intuitivo.
            </p>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>
          </div>
          <div className="bg-card rounded-2xl p-6 flex-1 shadow-lg">
            <div className="text-3xl lg:text-4xl font-bold mb-4 flex items-center">
              <span className="w-8 h-7 mr-4 inline-block text-[#6DB33F]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z" />
                </svg>
              </span>
              <h3>Backend</h3>
            </div>
            <p className="text-foreground/80 font-medium mb-8">
              Sviluppo API robuste e scalabili con{" "}
              <span className="font-bold text-foreground">
                Spring Boot e Node.js
              </span>
              , garantendo elevate prestazioni e sicurezza. Gestisco database
              relazionali e NoSQL con{" "}
              <span className="font-bold text-foreground">
                MongoDB e PostgreSQL
              </span>
              , ottimizzando le query e la struttura dei dati per una gestione
              efficiente.
            </p>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map((tech, index) => (
                <TechBadge key={index} tech={tech} />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 bg-card rounded-2xl p-6 shadow-lg">
          <div className="text-3xl lg:text-4xl font-bold mb-4 flex items-center">
            <span className="w-8 h-8 mr-4 inline-block text-[#ED8B00]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                fill="currentColor"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </span>
            <h3>Full-Stack Dev</h3>
          </div>
          <p className="text-foreground/80 font-medium mb-8">
            Sviluppo applicazioni scalabili e performanti con{" "}
            <span className="font-bold text-foreground">
              Java, C, C++ e Python
            </span>
            , utilizzando paradigmi orientati agli oggetti e strutture dati
            efficienti. Per il frontend, creo interfacce moderne e responsive
            con{" "}
            <span className="font-bold text-foreground">
              HTML, CSS e JavaScript
            </span>
            , garantendo un'esperienza utente intuitiva e dinamica.
          </p>
          <div className="flex flex-wrap gap-2">
            {languageSkills.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
