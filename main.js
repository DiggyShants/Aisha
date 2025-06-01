// main.js

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Scene container references
  const scenes = {
    1: document.getElementById("scene-1"),
    2: document.getElementById("scene-2"),
    3: document.getElementById("scene-3"),
    4: document.getElementById("scene-4"),
    5: document.getElementById("scene-5"),
    6: document.getElementById("scene-6"),
    7: document.getElementById("scene-7"),
    8: document.getElementById("scene-8"),
    9: document.getElementById("scene-9"),
  };

  // Scene 1 → Scene 2
  document.getElementById("start-button").addEventListener("click", () => {
    scenes[1].style.display = "none";
    scenes[2].style.display = "block";
    playNotificationSound();
  });

  // Scene 2 → Scene 3
  document.getElementById("scene2-next").addEventListener("click", () => {
    scenes[2].style.display = "none";
    scenes[3].style.display = "block";
  });

  // Scene 3 → Scene 4
  document.getElementById("scene3-next").addEventListener("click", () => {
    scenes[3].style.display = "none";
    scenes[4].style.display = "block";
  });

  // Scene 4 → Scene 5
  document.getElementById("scene4-next").addEventListener("click", () => {
    scenes[4].style.display = "none";
    scenes[5].style.display = "block";
  });

  // Scene 5: Temperature slider logic
  const tempSlider = document.getElementById("temp-slider");
  const tempLabel = document.getElementById("temp-label");
  const tempExample = document.getElementById("temp-example");
  const scene5NextButton = document.getElementById("scene5-next");

  // Update label and example text based on slider value
  tempSlider.addEventListener("input", () => {
    const val = parseInt(tempSlider.value, 10);
    if (val <= 33) {
      tempLabel.textContent = "Low (Predictable)";
      tempExample.textContent = "The sky is blue.";
    } else if (val <= 66) {
      tempLabel.textContent = "Medium (Balanced)";
      tempExample.textContent = "The sky today is clear and bright.";
    } else {
      tempLabel.textContent = "High (Creative)";
      tempExample.textContent = "The sky whispers secrets in shades of sapphire.";
    }

    // Enable "Understood" once the user interacts
    scene5NextButton.disabled = false;
  });

  // Scene 5 → Scene 6
  scene5NextButton.addEventListener("click", () => {
    scenes[5].style.display = "none";
    scenes[6].style.display = "block";
  });

  // Scene 6 → Scene 7
  document.getElementById("scene6-next").addEventListener("click", () => {
    scenes[6].style.display = "none";
    scenes[7].style.display = "block";
  });

  // Scene 7: Quiz logic
  const quizButtons = document.querySelectorAll(".quiz-answer");
  const quizFeedback = document.getElementById("quiz-feedback");
  const scene7NextButton = document.getElementById("scene7-next");

  quizButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.getAttribute("data-answer");
      quizFeedback.style.display = "block";

      if (answer === "high") {
        quizFeedback.textContent = "Exactly! High temperature makes my responses more creative.";
      } else {
        quizFeedback.textContent = "Not quite! Low temperature makes my responses predictable. High temperature is more creative.";
      }

      // After answering, enable Continue button
      scene7NextButton.disabled = false;
    });
  });

  // Scene 7 → Scene 8
  scene7NextButton.addEventListener("click", () => {
    scenes[7].style.display = "none";
    scenes[8].style.display = "block";
  });

  // Scene 8: Reflection logic
  const reflectionInput = document.getElementById("reflection-input");
  const reflectionSubmit = document.getElementById("reflection-submit");
  const reflectionResponse = document.getElementById("reflection-response");
  const scene8NextButton = document.getElementById("scene8-next");

  reflectionSubmit.addEventListener("click", () => {
    const userReflection = reflectionInput.value.trim();
    if (userReflection.length === 0) {
      // If no input, do nothing
      return;
    }

    // Show AI response
    reflectionResponse.style.display = "block";

    // Enable Continue button
    scene8NextButton.style.display = "inline-block";
  });

  // Scene 8 → Scene 9
  scene8NextButton.addEventListener("click", () => {
    scenes[8].style.display = "none";
    scenes[9].style.display = "block";
    playFarewellMusic();
  });

  // Scene 9: End session (reload or hide everything)
  document.getElementById("end-session").addEventListener("click", () => {
    // You can either reload the page or hide the container
    // location.reload();
    document.getElementById("scene-container").style.display = "none";
    // Optionally show a final message or redirect
  });

  // Utility: Play a notification sound when AI icon is clicked
  function playNotificationSound() {
    const audio = new Audio("audio/notify.mp3"); // ensure you have this file
    audio.play();
  }

  // Utility: Play farewell music for closing scene
  function playFarewellMusic() {
    const audio = new Audio("audio/farewell.mp3"); // ensure you have this file
    audio.loop = false;
    audio.play();
  }
});
