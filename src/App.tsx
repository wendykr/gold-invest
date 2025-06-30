import { Benefits } from './components/Benefits/Benefits';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from "./components/Hero/Hero";
import { Newsletter } from './components/Newsletter/Newsletter';
import { Offer } from './components/Offer/Offer';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Offer />
      <Blog />
      <Benefits />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
