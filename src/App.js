import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
