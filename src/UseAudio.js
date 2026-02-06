// src/useAudio.js
export const useAudio = (src) => {
  const play = () => {
    const audio = new Audio(src);
    audio.volume = 0.4; // 40% volume taaki kaan mein na chubhe
    audio.play().catch((err) => console.log("Sound error:", err));
  };
  return play;
};

