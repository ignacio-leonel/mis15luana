import Hero from './components/Hero';
import Countdown from './components/Countdown';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero
        name="Pablo"
        backgroundImage="/fondohero.png"      />
      <Countdown />
      <InfoSection
        location="Quinta Azul"
        locationUrl="https://maps.app.goo.gl/nQsQQEEr1vJLGXcd9"
        dressCode="Traer traje de baño y toalla"
      />
      <Gallery />
      <Gift alias="PABLORIOS08" />
      <RSVP
        phoneNumber="5491112345678"
        message="¡Hola! Confirmo mi asistencia a la fiesta de 18"
      />
      <Footer name="Sofía" />
    </div>
  );
}

export default App;
