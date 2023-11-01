import { useState, useEffect } from "react";

/*

8.Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression.

*/

const images = [
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
  "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
  "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  "https://fastly.picsum.photos/id/41/1280/805.jpg?hmac=W9CWeYdlZisqEfhjuODl83T3lCXAqjUZrOe9iMFPYmI",
  "https://fastly.picsum.photos/id/42/3456/2304.jpg?hmac=dhQvd1Qp19zg26MEwYMnfz34eLnGv8meGk_lFNAJR3g",
  "https://fastly.picsum.photos/id/46/3264/2448.jpg?hmac=ZHE8nk-Q9uRp4MxgKNvN7V7pYFvA-9BCv99ltY3HBv4",
  "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
  "https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ",
  "https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ",
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
          style={{ width: "1000px" }}
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
