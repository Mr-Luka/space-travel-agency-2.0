import './Plantia.css';
import { PLANETS } from '../../../Planets/planets.js';

export default function Plantia() {
  const videoSections = [
    { video: PLANETS[1].promoVideo.video2, text: "As one of our most sought-after destinations, Plantia offers travelers an experience unlike any other. With the Future Tourist Space Agency, you’ll journey to the Green Planet in comfort and style, enjoying the safest and most affordable interplanetary travel. Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable." },
    { video: PLANETS[1].promoVideo.video1, text: "What to Expect on Plantia: Passengers can look forward to breathtaking landscapes, from the towering Plantia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth." },
    { video: PLANETS[1].promoVideo.video5, text: "Enjoy guided tours of past rover and landing sites, a Plantia sunset, and the unique geological formations that make this planet so mysterious and captivating. With Us, You will Experience: The highest safety standards in the galaxy. Luxurious cabins for restful interplanetary journeys. Professional space guides to enhance your Plantia adventure." },
    { video: PLANETS[1].promoVideo.video4, text: "What to Expect on Plantia: Passengers can look forward to breathtaking landscapes, from the towering Exodia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth." },
    { video: PLANETS[1].promoVideo.video3, text: "What to Expect on Plantia: Passengers can look forward to breathtaking landscapes, from the towering Exodia Forests (the solar system's biggest forest) to the vast, ancient valleys of Kaladria Rora. Experience the thin, chill Plantia atmosphere and witness the blue skies, unlike anything on Earth." },
  ];

  return (
    <div className="destination-div">
      <div className="video-destination">
        <video id="destination-video" src={PLANETS[1].planetVideo} autoPlay loop muted></video>
      </div>
      <div className="destination-segment plantia-segment">
        <div className="destination-info">
          <p id="destination" className="destination-plantia-title"><span>PLANTIA</span></p>
          <p id="catch" className="plantia-catch">A Journey Beyond Imagination</p>

          <div className="destination-promo-wrapper promo-plantia">
            {videoSections.map((section, i) => (
              <div className="destination-promo" key={i}>
                {i % 2 === 0 ? (
                  <>
                    <p>{section.text}</p>
                    <video className="plantia-promo-vid" src={section.video} autoPlay loop muted></video>
                  </>
                ) : (
                  <>
                    <video className="plantia-promo-vid" src={section.video} autoPlay loop muted></video>
                    <p>{section.text}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          <video className="plantia-promo-vid" id="plantia-6-video" src={PLANETS[1].promoVideo.video6} autoPlay loop muted></video>
          <p id="destination-plantia-6">Let us make your dream of visiting Plantia a reality!</p>
        </div>
      </div>
    </div>
  );
}