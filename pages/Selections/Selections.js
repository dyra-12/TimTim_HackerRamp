import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import ImageTile from './ImageTile';
import FormSection from './Measurements';
import BodySize from './bodySize';

const sections = [
  {
    id: 'section1',
    content: (
      <div className="image-gallery">
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Step 1: Your Personal Preference</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.4', marginBottom: '20px' }}>
          Select the images that best match your personal style preference.
        </p>
        <div className="gallery-grid">
          {Array.from({ length: 15 }).map((_, index) => (
            <ImageTile
              key={index}
              src={`Photos/c${index + 1}.jpeg`}
              alt={`Sample image ${index + 1}`}
              className={`image${index + 1}`}
            />
          ))}
        </div>
      </div>
    ),
  },
  { id: 'section2', content: <FormSection /> },
  { id: 'section3', content: <BodySize /> },
];

const ImageGallery = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [fade, setFade] = useSpring(() => ({
    opacity: 1,
    transform: 'translateX(0%)',
  }));

  const handleNextSection = () => {
    if (currentSection === sections.length - 1) {
      window.location.href = '';
    } else {
      setFade({ opacity: 0, transform: 'translateX(-100%)' });
      setTimeout(() => {
        setCurrentSection((prev) => (prev + 1) % sections.length);
        setFade({ opacity: 1, transform: 'translateX(0%)' });
      }, 300);
    }
  };

  return (
    <div className="page-container">
      <nav className="navbar">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`nav-link ${currentSection === index ? 'active' : ''}`}
          >
            {index + 1}
          </a>
        ))}
      </nav>
      <animated.div style={fade} className="section">
        {sections[currentSection].content}
      </animated.div>
      <button onClick={handleNextSection} className="arrow-button">
        →
      </button>
    </div>
  );
};

export default ImageGallery;
