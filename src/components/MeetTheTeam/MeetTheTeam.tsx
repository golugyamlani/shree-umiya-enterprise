import styles from './MeetTheTeam.module.css';

import sanjayPatel from '../../assets/images/persons/sanjay_patel.jpeg';
import geetabenPatel from '../../assets/images/persons/geetaben_patel.jpeg';
import dhavalPatel from '../../assets/images/persons/davel_patel.jpeg';
import kirtiDhavalPatel from '../../assets/images/persons/kirthi_davel_patel.jpeg';
import brijeshLadani from '../../assets/images/persons/brijesh_ladani.jpeg';
import ajayGohil from '../../assets/images/persons/ajay_gohil.jpeg';
import sanjayThakore from '../../assets/images/persons/sanjay_thakor.jpeg';
import anilRawat from '../../assets/images/persons/anil_rawat.jpeg';
import hariomChauhan from '../../assets/images/persons/hariom_chauhan.jpeg';

const teamMembers = [
  {
    name: 'Sanjay Patel',
    role: 'Founder & Managing Director',
    image: sanjayPatel,
  },
  {
    name: 'Geetaben Patel',
    role: 'Director ( Vasu Fabrication )',
    image: geetabenPatel,
  },
  {
    name: 'Dhaval Patel',
    role: 'Chief Marketing Head',
    image: dhavalPatel,
  },
  {
    name: 'Kirti Dhaval Patel',
    role: 'Production Head',
    image: kirtiDhavalPatel,
  },
  {
    name: 'Brijesh Ladani',
    role: 'Purchase Head',
    image: brijeshLadani,
  },
  {
    name: 'Ajay Gohil',
    role: 'Quality Assurance Head',
    image: ajayGohil,
  },
  {
    name: 'Sanjay Thakore',
    role: 'Quality Control Head',
    image: sanjayThakore,
  },
  {
    name: 'Anil Rawat',
    role: 'Production Head',
    image: anilRawat,
  },
  {
    name: 'Hariom Chauhan',
    role: 'Research & Development Head',
    image: hariomChauhan,
  },
];

export const MeetTheTeam = () => {
  return (
    <section className={styles.meetTheTeam}>
      <div className={styles.container}>
        <h2 className={styles.title}>Meet The Team</h2>
        <div className={styles.divider}></div>

        <div className={styles.grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.image}
                  alt={member.name}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
