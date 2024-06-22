import React, { useState, useEffect } from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const useTypewriter = (words, delay = 3000, typingSpeed = 150, deletingSpeed = 50) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
      } else {
        setText(currentWord.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words, delay, typingSpeed, deletingSpeed]);

  return text;
};

const roles = ["Your Friendly Developer! 🕸️", "Footballer ⚽", "Chef 👨‍🍳", "Part Time FIFA Player 🎮", "Stock Trader 📊 " ];

const Hero = (props) => {
  const typewriterText = useTypewriter(roles);

  const openResume = () => {
    // Replace this URL with your actual resume PDF URL
    const resumeUrl = 'https://www.dropbox.com/scl/fi/zl9wzi14tq8o40ucz6uqu/TanmayMandal_2024-Resume.pdf?rlkey=8qgrogdghtllq49fojo0i5lku&st=5fs9nnxl&dl=0';
    window.open(resumeUrl, '_blank');
  };

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            10mayHUB.com
          </SectionTitle>
          <SectionText>
            {typewriterText}
          </SectionText>
          <Button onClick={openResume}>Resume</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
