import { useState } from "react";
import "./GiftBox.css";
import birthdayImg from "../assets/birthday.jpeg";

const balloons = Array.from({ length: 15 }, (_, index) => ({
  id: index,

  left: Math.random() * 100,

  size: 40 + Math.random() * 40,

  duration: 6 + Math.random() * 6,

  delay: Math.random() * 5,

  color: [
    "#ff006e",
    "#ffd166",
    "#06d6a0",
    "#118ab2",
    "#8338ec",
    "#ff4d6d"
  ][Math.floor(Math.random() * 6)]
}));

function GiftBox() {
  const [open, setOpen] = useState(false);
  const [surprise, setSurprise] = useState(false);
  const [showCake, setShowCake] = useState(false);
  const [confetti, setConfetti] = useState(false);

  return (
    <div className="birthday-page">
<div className="balloons">

{
 balloons.map((balloon)=>(
  
  <div
    className="balloon"
    key={balloon.id}

    style={{
      left:`${balloon.left}%`,
      width:`${balloon.size}px`,
      height:`${balloon.size * 1.3}px`,
      background:balloon.color,

      animationDuration:`${balloon.duration}s`,
      animationDelay:`${balloon.delay}s`
    }}
  >

    <span className="string"></span>

  </div>

 ))
}

</div>
      {!open && (
        <div className="gift-box" onClick={() => setOpen(true)}>
          <div className="lid"></div>
          <div className="box"></div>

          <div className="ribbon-vertical"></div>
          <div className="ribbon-horizontal"></div>

          <p className="click-text">Click Gift 🎁</p>
        </div>
      )}

      {open && (
        <div className="card">
          {/* Photo */}
          <img src={birthdayImg} alt="birthday" className="birthday-img" />

          {/* Typing Text */}
          <h1 className="typing">Happy Birthday 🎂</h1>

          <p>Wishing you lots of happiness, success and beautiful moments ❤️</p>

          <button
            onClick={() => {
              setSurprise(true);
              setShowCake(true);
              setConfetti(true);
            }}
          >
            Open Surprise 🎁
          </button>

          {surprise && (
            <h2 className="surprise-text">
              ✨ You are Special ❤️ <br />
              Keep smiling always 😊
            </h2>
          )}

          {showCake && (
            <div className="cake">
              <div className="candle">
                <span></span>
              </div>

              <div className="cake-top"></div>
              <div className="cake-body"></div>
            </div>
          )}

          {confetti && (
            <div className="confetti-container">
              {Array.from({ length: 150 }).map((_, index) => {
                const direction = Math.random() > 0.5 ? 1 : -1;

                return (
                  <span
                    key={index}
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                      animationDelay: `${Math.random()}s`,
                      "--x": `${direction * (100 + Math.random() * 300)}px`,
                    }}
                  ></span>
                );
              })}
            </div>
          )}
          <div className="heart">❤️ ❤️ ❤️</div>
        </div>
      )}
    </div>
  );
}

export default GiftBox;
