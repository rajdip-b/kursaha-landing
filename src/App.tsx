import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import 'animate.css';

function App() {
    return (
        <div className={'w-screen flex flex-col bg-black-primary font-inter'}>
            <Navbar />
            <Hero />
            <Section1 />
        </div>
    );
}

export default App;
