import { CrewSection, OurStory, MeetTheTeam } from '../../components';
import styles from './AboutPage.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.page}>
      <CrewSection />
      <OurStory />
      <MeetTheTeam />
    </div>
  );
};
