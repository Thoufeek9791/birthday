import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";
import ConfettiExplosion from "react-confetti-explosion";
import { Cake, Gift, PartyPopper } from "lucide-react";
import IMAGE_URL from "../assets/front-image.png";
import PERSON_IMAGE from "../assets/person-left-image.jpeg";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { useWindowSize } from "react-use";

const BIRTHDAY_DATE = new Date("2025-06-15T00:00:00");
const NAME = "Yasmeen Parveen";
const ABBREVIATIONS = [
  "Y - Youthful",
  "A - Admirable",
  "S - Smart",
  "M - Magnificent",
  "E - Elegant",
  "E - Energetic",
  "N - Noble",
  "P - Passionate",
  "A - Artistic",
  "R - Radiant",
  "V - Vibrant",
  "E - Enchanting",
  "E - Empathetic",
  "N - Nurturing",
];

const AUDIO_URL = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate]);

  return [countDown, ...getReturnValues(countDown)];
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
};

export const CountdownPage = () => {
  const navigate = useNavigate();
  const [countDown, days, hours, minutes, seconds] = useCountdown(BIRTHDAY_DATE);

  useEffect(() => {
    
      navigate("/name");
    
  }, [navigate]);

//   useEffect(() => {
//     if ("vibrate" in navigator) {
//       navigator.vibrate([200, 100, 200]);
//     }
//     const audio = new Audio(AUDIO_URL);
//     audio.play();
//   }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 flex items-center justify-center text-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-6">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Count Down
        </motion.h1>
        <div className="text-xl mt-2 text-white">
          {days}d {hours}h {minutes}m {seconds}s
        </div>
      </div>
    </div>
  );
};

export const NamePage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-300 to-red-300 flex flex-col items-center justify-center p-4 relative overflow-hidden space-y-8">
       
      {showConfetti && (
         <Confetti
         width={width}
         height={height}
       />
      )}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-6 text-center">
        <motion.img
          src={IMAGE_URL}
          alt="User"
          className="rounded-full w-36 h-36 object-contain mb-6 border-4 border-white mx-auto"
          initial={{ rotate: -10, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="text-3xl md:text-4xl font-bold text-blue-500 mb-2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Happy Birthday {NAME}!
        </motion.h1>

        <motion.h2
          className="text-xl text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          What Does {NAME} Stand For?
        </motion.h2>

        <ul className="text-lg md:text-xl text-blue-700 space-y-3">
          {ABBREVIATIONS.map((abbr, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {abbr}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* New Section */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row items-center md:space-x-6 text-white">
        <motion.img
          src={PERSON_IMAGE}
          alt="Left Person"
          className="w-full md:w-64 h-auto object-contain rounded-2xl border-4 border-white mb-4 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          className="text-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-2">About Yasmeen</h3>
          <p className="text-lg text-gray-500">
            Yasmeen is a wonderful person filled with joy, creativity, and compassion. Her presence brings light and positivity to everyone around. She loves Cat, Chocolates, and making people smile. she stands in every tough situation. She likes watching K-Dramas and korean movies and veg lover
          </p>
        </motion.div>
      </div>
      

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-6 flex flex-col md:flex-row items-center md:space-x-6 text-white">
  <motion.img
    src="https://i.pinimg.com/236x/2f/45/ef/2f45efca781cfb5bebc7b02d5612fef9.jpg"
    alt="Jungkook"
    className="w-full md:w-64 h-auto object-contain rounded-2xl border-4 border-white mb-4 md:mb-0"
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  />
  <motion.div
    className="text-left w-full"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-2xl font-bold mb-2">Her Love for Jungkook (BTS)</h3>
    <p className="text-lg mb-4 text-gray-500">
      Yasmeen is a proud BTS ARMY and her heart beats a little faster for Jungkook. His voice, charm, and dedication inspire her every day. From watching every live performance to collecting BTS merch, her admiration for him is pure and boundless.
      <br /><br />
      One of her favorite lines that touches her heart is from Jungkook’s “Euphoria”:<br />
      <span className="italic text-pink-200">“You are the cause of my euphoria.”</span>
      <br /><br />
      Every time she hears it, it reminds her of the happiness and warmth his music brings into her life. 💜
    </p>
    {/* 🎧 Audio Player */}
    <div className="mt-4">
    <iframe 
        width="100%" 
        height="120" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        title="Euphoria by Jungkook" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/314566199&color=%23ff66cc&auto_play=false&show_artwork=true">
      </iframe>

    </div>
  </motion.div>
</div>



<motion.div
  className="text-center text-white text-2xl font-bold mt-10 px-4"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
>
  💖 This website is created with love by the loved one 💝❤️💫
</motion.div>

    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<NamePage />} />
      {/* <Route path="/name" element={<NamePage />} /> */}
    </>
  )
);

export default function AppComponent() {
  return <RouterProvider router={router} />;
}
