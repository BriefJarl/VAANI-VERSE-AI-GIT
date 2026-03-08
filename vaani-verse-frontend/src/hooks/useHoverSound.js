import { useEffect } from "react";

function useHoverSound() {

  useEffect(() => {

    const sound = new Audio("/src/assets/sounds/click.mp3");

    const buttons = document.querySelectorAll("button, a");

    buttons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
      });
    });

  }, []);

}

export default useHoverSound;