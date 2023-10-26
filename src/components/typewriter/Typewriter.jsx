import React, { useEffect } from "react";
import "./typewriter.css";

const Typewriter = () => {
  useEffect(() => {
    const dynamicText = document.querySelector(".typewriter span");
    const words = [
      "Therapy",
      "Chai",
      "Patience",
      "Magic",
      "Love",
      "Dedication",
    ];

    // Variables to track the position and deletion status of the word
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        // If word is deleted then switch to the next word
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
      }
    };

    typeEffect();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className="typewriter">
      <h1>
        Coding is <span></span>
      </h1>
    </div>
  );
};

export default Typewriter;
