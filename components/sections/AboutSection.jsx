import { Section } from "../ui/Section";

const EducationItem = ({ year, title, institution, description }) => (
  <div className="mb-6 last:mb-0">
    <div className="flex items-center mb-1">
      <span className="text-sm text-primary/80">{year}</span>
      <div className="h-px bg-primary/80 flex-grow ml-3"></div>
    </div>
    <h4 className="text-lg font-bold mb-1">{title}</h4>
    <h5 className="text-sm text-foreground/75 mb-2">{institution}</h5>
    <p className="text-foreground/50 text-sm">{description}</p>
  </div>
);

export const AboutSection = () => {
  return (
    <Section id="about">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        &lt;About <span className="text-primary">me /&gt;</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1 overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/profile.jpeg"
            alt="Francesco Ariano"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-2 bg-card rounded-2xl p-6 text-left text-foreground h-full flex flex-col justify-evenly shadow-lg">
          <div className="text-3xl lg:text-4xl font-bold mb-4 flex items-center">
            <span className="w-8 h-8 mr-4 inline-block text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
            </span>
            <h3>Francesco Ariano</h3>
          </div>
          <p className="mb-4 font-medium">
            Sono uno sviluppatore web con una passione per la creazione di
            interfacce utente intuitive ed esperienze digitali coinvolgenti.
            Attualmente sto completando la mia laurea in Informatica
            all'Università di Torino, mentre lavoro su progetti personali per
            approfondire le mie competenze.
          </p>
          <p className="mb-4 font-medium ">
            Mi piace affrontare sfide tecniche complesse e trasformare idee
            creative in soluzioni digitali funzionali. Quando non sto
            programmando, mi dedico alla lettura, fotografia e a lunghe
            escursioni nella natura.
          </p>
        </div>
      </div>
      <div className="bg-card rounded-2xl p-6 shadow-lg mt-8">
        <div className="text-3xl lg:text-4xl font-bold mb-6 flex items-center">
          <span className="w-10 h-8 mr-4 inline-block text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z" />
            </svg>
          </span>
          <h3>Istruzione</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div>
            <EducationItem
              year="2021"
              title="Diploma di Liceo Scientifico"
              institution="Liceo Scientifico Leonardo Cocito, Alba"
              description="Formazione scientifica con specializzazione in matematica, fisica e scienze naturali, sviluppando solide basi analitiche e capacità di problem solving."
            />
            <EducationItem
              year="In corso"
              title="Laurea Triennale in Informatica"
              institution="Università degli Studi di Torino (UniTo)"
              description="Formazione completa in programmazione, algoritmi, strutture dati e metodologie di sviluppo software con focus su tecnologie web e sistemi distribuiti."
            />
          </div>
          <div>
            <EducationItem
              year="2019"
              title="ECDL - Patente Europea del Computer"
              institution="AICA (Associazione Italiana per l'Informatica e il Calcolo Automatico)"
              description="Certificazione delle competenze digitali di base: utilizzo del computer, elaborazione testi, fogli di calcolo, database, presentazioni, internet e comunicazione."
            />
            <EducationItem
              year="2021"
              title="First - Certificate in English"
              institution="Cambridge Assessment English"
              description="Certificazione delle competenze linguistiche per vivere, lavorare e studiare in modo indipendente in un paese di lingua inglese."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
