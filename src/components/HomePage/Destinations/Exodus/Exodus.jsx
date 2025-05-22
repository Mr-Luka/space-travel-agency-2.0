import './Exodus.css';
import { PLANETS } from '../../../Planets/planets.js';

export default function Exodus() {
  return (
    <div className="destination-div">
      <div className="video-destination">
        <video id="destination-video" autoPlay loop muted playsInline>
          <source src={PLANETS[0].planetVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="destination-segment exodus-segment">
        <div className="destination-info">
          <p id="destination" className="destination-exodus"><span>Exodus</span></p>
          <p id="catch" className="catch-exodus">A Journey Beyond Imagination</p>
          <div className="destination-promo-wrapper">
            {[
              { video: PLANETS[0].promoVideo.video2, text: "As one of our most sought-after destinations, Exodus offers travelers an experience unlike any other. With the Future Tourist Space Agency, you’ll journey to the Blue Planet in comfort and style, enjoying the safest and most affordable interplanetary travel. Established since 2017, our agency is dedicated to making space exploration accessible and unforgettable." },
              { video: PLANETS[0].promoVideo.video3, text: "What to Expect on Exodus: Passengers can look forward to breathtaking underwater landscapes, from the towering Canyon Eternal (the deepest point) to the vast, ancient valleys of Valles Exodus. Experience the thin, chill Exodus atmosphere, clean water and witness the pinkish-red skies, unlike anything on Earth." },
              { video: PLANETS[0].promoVideo.video1, text: "Enjoy guided tours of past rover and landing sites, a Exodus sunset, and the unique geological formations that make this planet so mysterious and captivating. With Us, You will Experience: The highest safety standards in the galaxy. Luxurious cabins for restful interplanetary journeys. Professional space guides to enhance your Exodus adventure." },
              { video: PLANETS[0].promoVideo.video4, text: "Let us make your dream of visiting Exodus a reality!" }
            ].map((section, i) => (
              <div className="destination-promo" key={i}>
                {i % 2 === 0 ? (
                  <>
                    <video className="two-promo-vid" src={section.video} autoPlay loop muted playsInline></video>
                    <p>{section.text}</p>
                  </>
                ) : (
                  <>
                    <p>{section.text}</p>
                    <video className="two-promo-vid" src={section.video} autoPlay loop muted playsInline></video>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
