import Header from './components/Header';
import Main from './components/Main';
import Whoami from './components/Whoami';
import ObjectSvg from '../public/assets/Object.svg?react';
import Object2Svg from '../public/assets/Object2.svg?react';
import Consult from './components/Consult';
import Services from './components/Services';
import Opinions from './components/Opinions';
import Packs from './components/Packs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useRef } from'react';
function App() {
  const mainRef = useRef();
  const whoamiRef = useRef();
  const servicesRef = useRef();
  const packsRef = useRef();
  const contactRef = useRef();
  return (
    <>
      <Header  mainRef={mainRef} whoamiRef={whoamiRef} servicesRef={servicesRef} packsRef={packsRef} contactRef={contactRef} />
      <div className='absolute right-0 top-[300px] z-[-1] w-full max-w-[425px] h-[964px] pointer-events-none'>
        <ObjectSvg
          className='w-full h-full'
          style={{
            stroke: '#626A48',
            strokeWidth: '1.6px',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />
      </div>
      <Main mainRef={mainRef} contactRef={contactRef} />
      <Whoami whoamiRef={whoamiRef} />
      <Consult contactRef={contactRef} />
      <div className='absolute left-0 top-[2700px]  z-[-1] w-full max-w-[425px] h-[964px] pointer-events-none'>
        <Object2Svg
          className='w-full h-full'
          style={{
            stroke: '#626A48',
            strokeWidth: '1.6px',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          }}
        />
      </div>
      <Services servicesRef={servicesRef} />
      <Opinions />
      <Packs packsRef={packsRef} />
      <Contact contactRef={contactRef} />
      <Footer mainRef={mainRef} whoamiRef={whoamiRef} servicesRef={servicesRef} packsRef={packsRef} contactRef={contactRef}  />
    </>
  );
}

export default App;
