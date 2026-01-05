import Hero from './components/Hero';
import Countdown from './components/Countdown';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import PoemSection from './components/PoemSection';
import PoemSection2 from './components/PoemSection2';
import { useAudio } from './hooks/useAudio';
import { MusicControl } from './components/MusicControl';

function App() {

  const { isPlaying, toggleMusic } = useAudio('/music/cancion.mpeg');

  return (
    <div className="min-h-screen">

      {/* Control de música */}
      <MusicControl 
        isPlaying={isPlaying}
        toggleMusic={toggleMusic}
      />

      <Hero
        name="Pablo"
        backgroundImage="/fondohero.png"
      />

      <Countdown />

      {/* 🌙 SECTION POEMA */}
      <PoemSection backgroundImage="/imagen.png" />

      <InfoSection
        location="Quinta Azul"
        locationUrl="https://maps.app.goo.gl/nQsQQEEr1vJLGXcd9"
        dressCode="Traer traje de baño y toalla"
      />

      <Gallery />
      <Gift alias="PABLORIOS08" />

      <PoemSection2 backgroundImage="/footerbg.png" />

      <RSVP
        phoneNumber="2325516800"
        message="¡Hola! Confirmo mi asistencia a la fiesta de 18"
      />

      <Footer name="Pablo" />
    </div>
  );
}

export default App;
