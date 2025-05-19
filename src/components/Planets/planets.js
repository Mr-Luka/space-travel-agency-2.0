// Exodus:
import ExodusVideo from '../../assets/media/exodus/water-planet.mp4';
import UnderWater1 from '../../assets/media/exodus/under-water.mp4';
import UnderWater2 from '../../assets/media/exodus/under-water-r.mp4';
import UnderWater3 from '../../assets/media/exodus/underwater.mp4';
import Whales from '../../assets/media/exodus/whales.mp4';

// Plantia
import PlantiaVideo from '../../assets/media/plantia/nature-planet.mp4';
import plantia1 from '../../assets/media/plantia/1.mp4';
import plantia2 from '../../assets/media/plantia/2.mp4';
import plantia3 from '../../assets/media/plantia/3.mp4';
import plantia4 from '../../assets/media/plantia/4.mp4';
import plantia5 from '../../assets/media/plantia/5.mp4';
import forest from '../../assets/media/plantia/forest.mp4';

// Mars
import MarsVideo from '../../assets/media/mars/mars-planet.mp4';
import marsAmerica from '../../assets/media/mars/mars-america.mp4';
import marsExploring from '../../assets/media/mars/mars-exploring.mp4';
import marsHiking from '../../assets/media/mars/mars-hiking.mp4';
import marsWalking from '../../assets/media/mars/mars-walking.mp4';
import mars from '../../assets/media/mars/mars.mp4';

export const PLANETS = [
    {
        planet:'EXODUS',
        planetWelcome:'Welcome to Water Planet EXODUS.',
        species:'Naga',
        planetVideo: ExodusVideo,
        promoVideo: {
            video1: UnderWater1,
            video2: UnderWater2,
            video3: UnderWater3,
            video4: Whales,
        }
    },
    {
        planet:'PLANTIA',
        planetWelcome:'Welcome to nature planet, merged with Plants.',
        species:'Plantians',
        planetVideo: PlantiaVideo,
        promoVideo: {
            video1: plantia1,
            video2: plantia2,
            video3: plantia3,
            video4: plantia4,
            video5: plantia5,
            video6: forest,
        }
    },
    {
        planet:'MARS',
        planetWelcome:'Welcome to Mars, our red planet sister..',
        species:'Second generation People (Martian)',
        planetVideo: MarsVideo,
        promoVideo: {
            video1: marsAmerica,
            video2: marsExploring,
            video3: marsHiking,
            video4: marsWalking,
            video5: mars,
        }
    }
];

