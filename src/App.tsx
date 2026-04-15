import Hero from './components/Hero';
import Countdown from './components/Countdown';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import PoemSection from './components/PoemSection';
import PoemSection2 from './components/PoemSection2';
import Sugerencia from './components/Sugerencia';
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
        name="Leila"
        backgroundImage="/fondohero.png"
      />

      <Countdown />

      {/* 🌙 SECTION POEMA */}
      <PoemSection backgroundImage="/fondohero.png" />

      <InfoSection
        location="Salón Sociedad Española"
        locationUrl="https://maps.app.goo.gl/w4N4qvfXD3nDSg497"
       
      />

      <Gallery />
      <Gift alias="Leila.537.ceibo.mp" />


      <PoemSection2 backgroundImage="/fondohero.png" />

      <RSVP
        phoneNumber="2273426386"
        message="¡Hola! Confirmo mi asistencia a la fiesta de 15"
      />
      
      <Footer name="Leila" />
    </div>
  );
}

export default App;
