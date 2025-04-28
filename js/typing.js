const texts = [
    "Hello there!",
    "Welcome to the typing effect demo.",
    "Enjoy watching this animation.",
    "Made with pure JavaScript!"
  ];
  
  const target = document.getElementById('Welcome');
  
  let textIndex = 0; 
  let charIndex = 0; 
  
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseAfterTyping = 1000;
  
  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (charIndex < currentText.length) {
      target.textContent += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(eraseText, pauseAfterTyping);
    }
  }
  
  function eraseText() {
    if (charIndex > 0) {
      target.textContent = target.textContent.slice(0, -1);
      charIndex--;
      setTimeout(eraseText, deletingSpeed);
    } else {
      // Move to the next text
      textIndex++;
      if (textIndex >= texts.length) {
        textIndex = 0; // Loop back to the first text
      }
      setTimeout(typeWriter, typingSpeed);
    }
  }
  
  window.onload = typeWriter;