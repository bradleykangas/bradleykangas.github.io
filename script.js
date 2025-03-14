const textArray = [
  "Unity 3D expert",
  "C#, Java, Python proficiency",
  "Maya, Blender 3D modeler",  
  "UNCW Computer Science Digital Arts"
];
let textIndex = 0;
let charIndex = 0;
let typingSpeed = 160; // Speed of typing (ms per character)
let backspaceSpeed = 100; // Speed of backspacing (ms per character)
let currentText = "";
let isBackspacing = false;

const typingTextElement = document.getElementById("typing-text");

function type() {
  if (!isBackspacing) {
    if (charIndex < textArray[textIndex].length) {
      currentText += textArray[textIndex].charAt(charIndex);
      charIndex++;
      typingTextElement.textContent = currentText;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(backspace, 1000); // Wait a second before backspacing
    }
  }
}

function backspace() {
  if (charIndex > 0) {
    currentText = currentText.substring(0, currentText.length - 1);
    typingTextElement.textContent = currentText;
    charIndex--;
    setTimeout(backspace, backspaceSpeed);
  } else {
    isBackspacing = false;
    textIndex = (textIndex + 1) % textArray.length; // Loop back to first text after finishing all
    setTimeout(type, 500); // Wait a bit before starting to type again
  }
}

function startTypingEffect() {
  type();
}

// Initialize typing effect
startTypingEffect();

// Function to open the modal and populate it with information
function openModal(imageId) {
  // Open the modal
  document.getElementById('image-modal').style.display = "block";
  
  // Set the content of the modal based on the clicked image
  const imageData = {
    pgame1: {
	  src: "pgame6.png",
      caption: "Modeling & Design - Title Screen",
      title: "xPug",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "The first screen upon launching the game."
    },
    pgame2: {
	  src: "pgame1.png",
      caption: "Game Design - Battle System",  // Middle title (caption)
      title: "xPug '#Pug-Jitsu'",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "Real-time battle system with an AI that adapts its moves based on the pace of battle.\nOpponents come in waves + increase in difficulty.\nPlayers can upgrade attacks for more damage / healing."
    },
    pgame3: {
	  src: "pgame2.png",
      caption: "Game Design - Gameplay Modifiers",
      title: "xPug",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "Unlockable gameplay modifiers, called 'Hacks', that visually orbit the player during battle.\nCan benefit the player, or challenge them."
    },
    pgame4: {
	  src: "pgame3.png",
      caption: "Modeling & Design - Dress Up",
      title: "xPug",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "Equip items by clicking or tapping on the icon in your inventory.\nSort cosmetics by type (head, face, body, paw, tail) by clicking on the respective icon."
    },
    pgame5: {
	  src: "pgame4.png",
      caption: "Game Design - Menu",
      title: "xPug",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "Cycle through hub worlds in the menu. Also displays the current amount of money owned by the player."
    },
    pgame6: {
      src: "pgame5.png",
      caption: "Modeling & Design - Shop & Shopkeeper",
      title: "xPug",
      year: "2021-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL, Mobile",
      description: "Programmed shop, shopkeeper, televisions which display items & prices.\nPart of the larger shop, where players use in-game currency they earn to buy cosmetics."
    },
    // Placeholder for the rest after the 6th one
    pgame7: {
      src: "pgame7.png", // Placeholder image
      caption: "Level Modeling & Design - Creative",
      title: "Esotaria",
      year: "2023-2025",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC",
      description: "Conceptualized, designed, modeled game environment for use in an upcoming puzzle game involving cymatics.\nPlayer must navigate a colored checkered cube to its associated portal to unlock the next section of the level."
    },
    pgame8: {
      src: "pgame8.png", // Placeholder image
      caption: "Character Modeling & Design - Goblin",
      title: "Esotaria",
      year: "2023-2025",
      tools: "Unity C#, Autodesk Maya, Paint.NET",
      platform: "PC",
      description: "Conceptualized, designed, modeled, textured & animated game character for use in an upcoming puzzle game involving cymatics and using tuning forks as a tool for level interaction."
    },
    pgame9: {
      src: "gunTech_gameplay2.gif", // Placeholder image
      caption: "Game Design - VR Shooting Gallery",
      title: "Gun Tech",
      year: "2022",
      tools: "Unity C#, Autodesk Maya / 3ds Max, Visual Studio, Audacity, Paint.NET, Sony VEGAS",
      platform: "Oculus / Meta VR",
      description: "I was responsible for game design, programming, scene construction, sound design, UI graphics. Developed lock-on system for shooting multiple targets at once."
    },
    pgame10: {
      src: "pgame11.png", // Placeholder image
      caption: "Game Design - Entity AI",
      title: "Cryptids",
      year: "2021",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC",
      description: "Programmed entity AI to follow the player and walk to set pieces to activate cutscenes."
    },
    pgame11: {
      src: "cryptids_gameplay2.gif", // Placeholder image
      caption: "Modeling & Design - Moving Furniture",
      title: "Cryptids",
      year: "2021",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC",
      description: "Modeled & animated assets for use in first-person horror project.\nProgrammed system where player can collect, pick up, inspect, or throw props around the level."
    },
    pgame12: {
      src: "pgame10.png", // Placeholder image
      caption: "Character Modeling & Design - Demon",
      title: "Cryptids",
      year: "2021",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC",
      description: "Conceptualized, designed, modeled, textured & animated demon creature & environment for use in a horror game project.\nPart of matching game, each wrong move makes the demon pull the lever, lowering the axe."
    },
    pgame13: {
      src: "pgame12.png", // Placeholder image
      caption: "Character Modeling - Plush Bear",
      title: "Before We Wake - Black Fox Games ",
      year: "2020",
      tools: "Autodesk Maya, Paint.NET, Unity C#, Visual Studio",
      platform: "PC",
      description: "Worked with concept artist on team of freelancers to translate 2D artwork to 3D game asset.\nModeled, textured & animated plush bear based on orthographic artwork."
    },
    pgame14: {
      src: "pgame13.png", // Placeholder image
      caption: "Modeling & Design - Mutant Apple Lab",
      title: "David Dees Inspired Animation",
      year: "2020",
      tools: "Autodesk Maya, Audacity, Paint.NET, Sony VEGAS",
      platform: "PC",
      description: "I was responsible for designing, storyboarding, modeling, texturing & animating characters, props & environment for an animation involving a lab which experiments on turning food sentient."
    },
	pgame15: {
      src: "pizzatron_gameplay.gif", // Placeholder image
      caption: "Programming & Design - Minigame",
      title: "Club Penguin 3D 'Pizzatron 3000'",
      year: "2019",
      tools: "Unity C#, Autodesk Maya, Visual Studio, Audacity, Paint.NET",
      platform: "PC, WebGL",
      description: "Minigame developed for an online multiplayer fan project called 'Club Penguin 3D'.\nI was responsible for all programming, design, and animations. The team was responsible for the majority of the art assets."
    },
  };

  // Populate the modal with the relevant content
  const data = imageData[imageId];
  
  // Set the image, caption, and other details
  document.getElementById('modal-image').src = data.src;
  document.getElementById('modal-caption').innerText = data.caption; // Set middle title (caption)
  document.getElementById('modal-title-year').innerText = `${data.title} (${data.year})`;
  document.getElementById('modal-tools').innerText = data.tools;
  document.getElementById('modal-platform').innerText = data.platform;
  document.getElementById('modal-description').innerText = data.description;
}

// Function to close the modal
function closeModal() {
  document.getElementById('image-modal').style.display = "none";
}


