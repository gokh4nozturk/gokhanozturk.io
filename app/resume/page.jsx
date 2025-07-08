import {
  Education,
  Experience,
  Header,
  OpenSourceContributions,
  Projects,
  ResumeFooter,
  Summary,
  TechnicalSkills,
} from '@components/resume';

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
      {/* <FeedbackRating className="-translate-x-1/2 fixed bottom-[5.5rem] left-1/2 backdrop-blur-sm sm:bottom-32" /> */}
    </div>
  );
}
