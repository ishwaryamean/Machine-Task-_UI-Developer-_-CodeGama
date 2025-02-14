import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import FAQ from "./components/pages/FAQ/FAQ";
import Section from "./components/pages/Section/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Section />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
