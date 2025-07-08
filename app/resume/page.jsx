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
import { articleVariants, containerVariants } from '@lib/resume-styles';

export default function ResumePage() {
  return (
    <div className={containerVariants()}>
      <Article />
      {/* <FeedbackRating className="-translate-x-1/2 fixed bottom-[5.5rem] left-1/2 backdrop-blur-sm sm:bottom-32" /> */}
    </div>
  );
}

function Article() {
  return (
    <article className={articleVariants()}>
      <Header />
      <Summary />
      <Experience />
      <Projects />
      <OpenSourceContributions />
      <Education />
      <TechnicalSkills />
      <ResumeFooter />
    </article>
  );
}
