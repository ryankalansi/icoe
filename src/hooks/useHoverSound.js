// src/hooks/useHoverSound.js
import { useEffect, useRef, useCallback } from "react";

const useHoverSound = (soundPath = "/sounds/hover-sound.mp3", options = {}) => {
  const audioRef = useRef(null);
  const isPlaying = useRef(false);
  const lastPlayTime = useRef(0);

  const {
    volume = 0.2,
    playbackRate = 1.0,
    throttleDelay = 100, // Minimum time between sound plays
    // CSS selectors for elements that should trigger hover sound
    selectors = [
      "button",
      "a",
      ".hover-sound",
      ".interactive",
      '[role="button"]',
      'input[type="button"]',
      'input[type="submit"]',
      ".btn",
      ".link",
      ".card",
      ".menu-item",
    ],
  } = options;

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio(soundPath);
    audioRef.current.volume = volume;
    audioRef.current.playbackRate = playbackRate;
    audioRef.current.preload = "auto";

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [soundPath, volume, playbackRate]);

  const playHoverSound = useCallback(() => {
    const now = Date.now();

    // Throttle sound playing
    if (isPlaying.current || now - lastPlayTime.current < throttleDelay) {
      return;
    }

    if (audioRef.current) {
      isPlaying.current = true;
      lastPlayTime.current = now;

      // Reset audio to beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => {
          // Reset playing flag when sound ends
          setTimeout(() => {
            isPlaying.current = false;
          }, throttleDelay);
        })
        .catch((error) => {
          console.warn("Could not play hover sound:", error);
          isPlaying.current = false;
        });
    }
  }, [throttleDelay]);

  const handleMouseEnter = useCallback(
    (event) => {
      // Check if the element or its parents match our selectors
      const element = event.target;
      const shouldPlaySound = selectors.some((selector) => {
        try {
          return element.matches(selector) || element.closest(selector);
        } catch {
          return false;
        }
      });

      if (shouldPlaySound) {
        playHoverSound();
      }
    },
    [selectors, playHoverSound]
  );

  const handleTouchStart = useCallback(
    (event) => {
      // Same logic for touch devices
      const element = event.target;
      const shouldPlaySound = selectors.some((selector) => {
        try {
          return element.matches(selector) || element.closest(selector);
        } catch {
          return false;
        }
      });

      if (shouldPlaySound) {
        playHoverSound();
      }
    },
    [selectors, playHoverSound]
  );

  useEffect(() => {
    // Add event listeners to document for global coverage
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("touchstart", handleTouchStart, {
      passive: true,
      capture: true,
    });

    // Cleanup
    return () => {
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("touchstart", handleTouchStart, true);
    };
  }, [handleMouseEnter, handleTouchStart]);

  // Return control functions
  return {
    setVolume: (newVolume) => {
      if (audioRef.current) {
        audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
      }
    },
    setPlaybackRate: (rate) => {
      if (audioRef.current) {
        audioRef.current.playbackRate = rate;
      }
    },
    mute: () => {
      if (audioRef.current) {
        audioRef.current.volume = 0;
      }
    },
    unmute: () => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
      }
    },
    playSound: playHoverSound, // Manual trigger if needed
  };
};

export default useHoverSound;
