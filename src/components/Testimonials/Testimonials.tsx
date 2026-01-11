import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Dhaval Patel',
    company: 'Ox Hydraulics',
    location: 'Ndola, Zambia',
    quote:
      'We have received excellent services from Shree umiya enterprise and really appreciate the meticulous services.',
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'Hotel Grand',
    location: 'Dubai, UAE',
    quote:
      'Outstanding quality products and timely delivery. Shree Umiya Enterprise has been our trusted partner for years.',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    company: 'Luxury Resorts',
    location: 'Mumbai, India',
    quote:
      'Their attention to detail and commitment to excellence is unmatched. Highly recommend their services.',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <button className={styles.navBtn} onClick={goToPrevious} aria-label="Previous testimonial">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.content}>
          <p className={styles.author}>
            {currentTestimonial.name} - {currentTestimonial.company} ( {currentTestimonial.location} )
          </p>
          <div className={styles.divider}></div>
          <blockquote className={styles.quote}>"{currentTestimonial.quote}"</blockquote>
        </div>

        <button className={styles.navBtn} onClick={goToNext} aria-label="Next testimonial">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className={styles.dots}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
