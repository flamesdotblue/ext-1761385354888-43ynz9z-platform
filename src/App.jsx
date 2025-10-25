import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Hero />
      <main className="flex-1">
        <Features />
        <Curriculum />
      </main>
      <Footer />
    </div>
  );
}

export default App;
