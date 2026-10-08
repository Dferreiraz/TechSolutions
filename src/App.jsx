import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Flow from './components/Flow';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-bg font-body text-text antialiased overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Services />
        <Flow />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;