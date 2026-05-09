import {
  Education,
  Experience,
  Header,
  OpenSourceContributions,
  Projects,
  ResumeFooter,
  Summary,
  TechnicalSkills,
} from "@components/resume";

export default function ResumePage() {
  return (
    <div className="relative mx-auto max-w-2xl">
      <article className="prose prose-slate dark:prose-invert max-w-none">
        <Header />
        <Summary />
        <Experience />
        <Projects />
        <OpenSourceContributions />
        <Education />
        <TechnicalSkills />
        <ResumeFooter />
      </article>
    </div>
  );
}
