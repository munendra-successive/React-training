import { useState, useEffect } from "react";

/*

8.Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.

*/

const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
  "/img-6.jpg",
  "/img-7.jpg",
  "/img-8.jpg",
  "/img-9.jpg",
  "/img-10.jpg",
];

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [intervalTime, setIntervalTime] = useState(3000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setCurrentSlide((currentSlide + 1) % images.length);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [playing, intervalTime, currentSlide]);

  const PlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <h4>
        8.Use the useEffect hook to manage the current slide and transition. Add
        few images atleast 10 in public folder to populate the slideshow. Allow
        users to pause, play the slideshow. Include a time interval option to
        control the automatic slideshow progression.
      </h4>
      <div>
        <img
          style={{ width: "800px", height:"500px" }}
          src={images[currentSlide]}
          alt="SlideShow"
        />
        <button onClick={PlayPause}>{playing ? "Pause" : "Play"}</button>
        <input
          type="number"
          placeholder="Interval (ms) "
          value={intervalTime}
          onChange={(e) => setIntervalTime(e.target.value)}
        />
      </div>
    </>
  );
};
export default SlideShow;
