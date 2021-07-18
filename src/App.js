// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Destinations from './components/content/Destinations';
import Features from './components/content/Features';
import FormSection from './components/content/FormSection';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Destinations />
      <Features />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
