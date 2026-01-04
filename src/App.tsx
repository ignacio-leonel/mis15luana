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
        name="Sofía"
        backgroundImage="https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />
      <Countdown />
      <InfoSection
        location="Salón de Eventos Golden, Av. Principal 123"
        locationUrl="https://maps.google.com"
        dressCode="Elegante Sport"
      />
      <Gallery />
      <Gift alias="SOFIA.FIESTA18" />
      <RSVP
        phoneNumber="5491112345678"
        message="¡Hola! Confirmo mi asistencia a la fiesta de 18"
      />
      <Footer name="Sofía" />
    </div>
  );
}

export default App;
