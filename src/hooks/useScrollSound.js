// src/hooks/useScrollSound.js
import { useEffect, useRef, useCallback } from "react";

const useScrollSound = (
  soundPath = "/sounds/rachet-scrolldown.mp3",
  options = {}
) => {
  const audioRef = useRef(null);
  const lastScrollTop = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const {
    volume = 0.3,
    playbackRate = 1.0,
    throttleDelay = 150, // Minimum time between sound plays
    scrollThreshold = 50, // Minimum scroll distance to trigger sound
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

  const playScrollSound = useCallback(() => {
    if (audioRef.current && !isScrolling.current) {
      isScrolling.current = true;

      // Reset audio to beginning and play
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        console.warn("Could not play scroll sound:", error);
      });

      // Throttle sound playing
      setTimeout(() => {
        isScrolling.current = false;
      }, throttleDelay);
    }
  }, [throttleDelay]);

  const handleScroll = useCallback(() => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    const scrollDistance = Math.abs(currentScrollTop - lastScrollTop.current);

    // Only play sound if user scrolled enough distance
    if (scrollDistance >= scrollThreshold) {
      playScrollSound();
      lastScrollTop.current = currentScrollTop;
    }

    // Clear existing timeout
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    // Set timeout to reset scroll state
    scrollTimeout.current = setTimeout(() => {
      lastScrollTop.current = currentScrollTop;
    }, 100);
  }, [playScrollSound, scrollThreshold]);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  // Return control functions if needed
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
  };
};

export default useScrollSound;
